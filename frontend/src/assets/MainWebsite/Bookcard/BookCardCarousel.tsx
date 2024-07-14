// src/components/BookCarousel.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import Book from '../../0/MODELS/Book';

interface Props {
    id: string;
    newArrival?: string[]; // Update to match the expected type of newArrival
}


interface BookCardProps {
    book: Book;
  }
  
  const BookCard2: React.FC<BookCardProps> = ({ book }) => {
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


const BookCarousel: React.FC<Props> = ({ id, newArrival }) => {
    const [books, setBooks] = useState<Book[]>([]); // Use state to store fetched books

    useEffect(() => {
        if (newArrival && newArrival.length > 0) {
            // Fetch book details from Google Books API based on ISBNs
            newArrival.forEach((isbn: string) => {
                axios.get(`https://www.googleapis.com/books/v1/volumes?q=${isbn}`)
                    .then((res) => {
                        // Extract book data from API response and update state
                        const bookData = res.data.items[0]; // Assuming first item is the desired book
                        if (bookData) {
                            setBooks(prevBooks => [...prevBooks, bookData]);
                        }
                    })
                    .catch((error) => {
                        console.error(`Error fetching book with ISBN ${isbn}:`, error);
                    });
            });
        }
    }, [newArrival]);

    // Function to chunk books array into arrays of size 3
    const chunkBooks = (books: Book[]): Book[][] => {
        const chunkedArray: Book[][] = [];
        for (let i = 0; i < books.length; i += 3) {
            chunkedArray.push(books.slice(i, i + 3));
        }
        return chunkedArray;
    };

    // Render carousel items based on chunked books array
    const renderCarouselItems = () => {
        const chunkedBooks = chunkBooks(books);

        return chunkedBooks.map((chunk, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <div className="bg-dark text-center d-flex w-100 justify-content-around align-items-center px-5">
                    {chunk.map((book, idx) => (
                        <BookCard2 key={idx} book={book} />
                    ))}
                </div>
            </div>
        ));
    };

    return (
        <div id={id} className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {renderCarouselItems()}
            </div>
            <button className="carousel-control-prev me-5" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon text-white" aria-hidden="true"></span>
                <span className="visually-hidden text-white">Previous</span>
            </button>
            <button className="carousel-control-next text-white" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden text-white">Next</span>
            </button>
        </div>
    );
};

export default BookCarousel;
