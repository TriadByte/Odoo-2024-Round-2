from fastapi import APIRouter
from api.v1.books.routes import router as books_router

router = APIRouter()

@router.get("/", response_description="Api Version Manager route")
async def hello_world():
    return {
        "location" : "api/v1",
        "message" : "API Version V1 - Initial Version",
        "version" : "1.0.0",
        "status" : 200,
        "status_message" : "OK",
        "data" : {
            "message" : "Welcome to the API"
        }
    }

router.include_router(books_router, tags=["/books"], prefix="/books")
