import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNav from '../AdminNav';

const AddBook = ({ }) => {
    const [isbn, setIsbn] = useState('');
    const [stock, setStock] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (isbn && stock) {
            AddBook({ isbn, stock });
            setIsbn('');
            setStock('');
        }
    };

    return (
        <>
        <AdminNav/>
        <div className="container rounded text-white text-center bg-karu p-5 mt-4">
            <h1 className="py-3">Add a New Book</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group my-3">
                    {/* <label htmlFor="isbn">ISBN No.</label> */}
                    <input
                        type="number"
                        className="form-control"
                        id="isbn"
                        placeholder="Enter ISBN number"
                        value={isbn}
                        onChange={(e) => setIsbn(e.target.value)}
                        required
                        />
                </div>
                <div className="form-group my-3">
                    {/* <label htmlFor="stock">How Much Stock</label> */}
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Enter how much stock you want to add"
                        id="stock"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        required
                        />
                </div>
                <button type="submit" className="btn w-100 btn-danger">
                    Add Book
                </button>
            </form>
        </div>
</>
    );
};

export default AddBook;
