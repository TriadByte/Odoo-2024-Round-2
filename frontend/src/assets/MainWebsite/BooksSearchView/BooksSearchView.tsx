import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Book from "../../0/MODELS/Book";

const BooksSearchView = () => {
  const [bookName, setBookName] = useState<string>("");
  const [books, setBooks] = useState<Book[]>([]);
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleBorrowBook = (book: Book) => {
    if(localStorage.getItem('isLoggdIn') === 'false'){
      alert('Please login to borrow book');
      navigate('/login');
    }

    axios.post('http://localhost:5000/api/v1/borrow', {bookId: book.id})
  }

  useEffect(() => {
    const stateBookName = location.state?.bookName || "";
    setBookName(stateBookName);
  }, [location.state]);

  useEffect(() => {
    if (bookName === "") return;

    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`)
      .then((res) => {
        const fetchedBooks: Book[] = res.data.items || [];
        setBooks(fetchedBooks);
        console.log(fetchedBooks);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [bookName]);

  const handleBookSearch = () => {
    if (bookName === "") return;
    navigate("/search", { state: { bookName: bookName } });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleBookSearch();
    }
  };

  return (
    <>
      <div className="">
        <Navbar />
        <div className="text-light p-5 bg-transparent">
          <h1 className="text-center">BookFlix Search</h1>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex mb-3 justify-content-center align-items-center">
                  <input
                    type="text"
                    className="form-control me-3 w-50 bg-transparent text-light"
                    placeholder="Search Book"
                    aria-label="Search Book"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                  <button
                    className="btn btn-danger text-white"
                    onClick={handleBookSearch}
                    type="button"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-book-list d-flex flex-wrap bg-dark py-5 px-2 justify-content-center gap-3">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
};

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const description = book.volumeInfo?.description;
  const clippedDescription = clipTextAfterSecondFullStop(description);
  return (
    <div className="card bg-karu border-2" style={{ width: "18rem" }}>
      <img
        src={book.volumeInfo.imageLinks?.thumbnail ?? 'Title'}
        className="card-img-top"
        alt={book.volumeInfo?.title}
        style={{ objectFit: 'contain', height: '250px' }}
      />
      <div className="card-body d-flex flex-column justify-content-between align-items-start text-white">
        <h5 className="card-title">{book.volumeInfo?.title}</h5>
        {/* <p className="card-text">{clippedDescription}</p> */}
        <span>{clippedDescription}</span>
        <div className="d-flex gap-2 mt-3">
          <span className="btn btn-danger">
            Borrow
          </span>
          <span className="btn btn-success">
            Check Availability
          </span>
        </div>
      </div>
    </div>

  );
};

function clipTextAfterSecondFullStop(text: string) {
  if (!text) return '';

  const words = text.split(' ');
  if (words.length <= 15) return text;

  return words.slice(0, 15).join(' ') + '...';
}

export default BooksSearchView;
