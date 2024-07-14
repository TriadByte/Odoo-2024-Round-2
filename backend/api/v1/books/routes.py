from fastapi import APIRouter, Body, HTTPException, Request

router = APIRouter()

@router.get("/", response_description="Api Version Manager route")
async def hello_world():
    return {"message": "Hello World"}

@router.get("/new_arrival", response_description="Get New Arrival Books")
async def new_books(request: Request):
    try:
        db = request.app.dbApi.collection('books')
        
        # Query books with status "arrived"
        query = db.where('bookStatus', '==', 'new').stream()
        
        arrived_books = []
        
        # Collect ISBN numbers of arrived books
        for book in query:
            book_data = book.to_dict()
            arrived_books.append(book_data["bookIsbn"])
        
        return {"newArrival": arrived_books}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")


@router.get("/request", response_description="Decrement Book from Inventory")
async def request_books(request: Request, data = Body(...)):
    try:
        db = request.app.dbApi.collection('books')
        
        isbn = data["isbn"]
        
        # Check if the book with the given ISBN exists in Firestore
        books = db.where('bookIsbn', '==', isbn).stream()
        book_exists = False

        for book in books:
            book_data = book.to_dict()
            book_exists = True
            
            # Check if the stock is zero
            if book_data["bookStock"] == 0:
                # Increment the requested number if the book exists and stock is zero
                db.document(book.id).update({"bookRequested": book_data["bookRequested"] + 1})
                return {"message": "Book request Complete"}
            else:
                return {"message": "Book is in stock, No request made"}

        if not book_exists:
            # If the book does not exist, add it to Firestore with initial request
            db.add({
                "bookIsbn": isbn,
                "bookStatus": "new",
                "bookRequested": 1,
                "bookStock": 0
            })
            return {"message": "Book added to inventory with initial request"}

        return {"message": "Book request handled"}
    
    except KeyError as e:
        raise HTTPException(status_code=400, detail=f"Missing field in request data: {e}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")
    
@router.post("/add", response_description="Add Book to Inventory")
async def add_books(request: Request, data = Body(...)):
    try:
        db = request.app.dbApi.collection('books')
        
        isbn = data["isbn"]
        book_stock = data["bookStock"]
        
        if not isbn:
            raise HTTPException(status_code=400, detail="ISBN is required")
        if not book_stock:
            raise HTTPException(status_code=400, detail="Book stock is required")

        # Check if the book with the given ISBN exists in Firestore
        books = db.where('bookIsbn', '==', isbn).stream()
        book_exists = False

        for book in books:
            book_data = book.to_dict()
            book_exists = True
            
            # Update the book status and stock
            db.document(book.id).update({
                "bookStatus": "inVerification",
                "bookStock": book_stock,
                "bookRequested": book_data["bookRequested"]
            })
            return {"message": "Book updated in inventory"}

        if not book_exists:
            # If the book does not exist, add it to Firestore
            db.add({
                "bookIsbn": isbn,
                "bookStatus": "inVerification",
                "bookRequested": 0,
                "bookStock": book_stock
            })
            return {"message": "Book added to inventory with initial request"}

        return {"message": "Book addition handled"}
    
    except KeyError as e:
        raise HTTPException(status_code=400, detail=f"Missing field in request data: {e}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")
    
@router.put("/update", response_description="Update Book Stock")
async def update_book_stock(request: Request, data: dict = Body(...)):
    try:
        db = request.app.dbApi.collection('books')
        
        isbn = data["isbn"]
        book_stock = data["bookStock"]
        
        if not isbn:
            raise HTTPException(status_code=400, detail="ISBN is required")
        if not book_stock:
            raise HTTPException(status_code=400, detail="Book stock is required")

        # Check if the book with the given ISBN exists in Firestore
        books = db.where('bookIsbn', '==', isbn).stream()
        book_exists = False

        for book in books:
            book_exists = True
            
            # Update the book stock with the given value
            db.document(book.id).update({"bookStock": book_stock})
            return {"message": "Book stock updated successfully"}

        if not book_exists:
            # If the book does not exist, return an error message
            raise HTTPException(status_code=404, detail=f"Book with ISBN Code {isbn} not found in inventory")

    except KeyError as e:
        raise HTTPException(status_code=400, detail=f"Missing field in request data: {e}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")
    
@router.post("/verify", response_description="Verify Book Arrival")
async def verify_books(request: Request, data: dict = Body(...)):
    try:
        db = request.app.dbApi.collection('books')
        
        isbn = data["isbn"]
        arrival_date = data["arrivalDate"]
        stock = data["bookStock"]
        
        if not isbn:
            raise HTTPException(status_code=400, detail="ISBN is required")

        # Check if the book with the given ISBN exists in Firestore
        books = db.where('bookIsbn', '==', isbn).stream()
        book_exists = False

        for book in books:
            book_exists = True
            
            # Update the book status to "arriving" and optionally update the stock
            update_data = {"bookStatus": "arriving"}
            if stock is not None:
                update_data["bookStock"] = stock
            
            if arrival_date:
                update_data["arrivalDate"] = arrival_date
            
            db.document(book.id).update(update_data)
            return {"message": "Book verified and status updated"}

        if not book_exists:
            # If the book does not exist, return an error message
            raise HTTPException(status_code=404, detail=f"Book with ISBN {isbn} not found in inventory")

    except KeyError as e:
        raise HTTPException(status_code=400, detail=f"Missing field in request data: {e}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")

@router.post("/borrow", response_description="Decrement Book from Inventory")
async def borrow_book(request: Request, data: dict = Body(...)):
    try:
        db = request.app.dbApi.collection('books')
        
        isbn = data["isbn"]
        id = data["id"]
        
        # Check if the book with the given ISBN exists in Firestore
        books = db.where('bookIsbn', '==', isbn).stream()
        book_exists = False

        for book in books:
            book_data = book.to_dict()
            book_exists = True
            
            # Check if the book is available to borrow (status is available and stock > 0)
            if book_data["bookStatus"] != "available":
                return {"message": "Book is not available for borrowing"}
            
            if book_data["bookStock"] <= 0:
                return {"message": "Book is out of stock"}

            # Decrease the stock by 1
            db.document(book.id).update({"bookStock": book_data["bookStock"] - 1})
            return {"message": "Book borrowed successfully"}

        if not book_exists:
            # If the book does not exist, return an error message
            raise HTTPException(status_code=404, detail=f"Book with ISBN {isbn} not found in inventory")

    except KeyError as e:
        raise HTTPException(status_code=400, detail=f"Missing field in request data: {e}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")

