import { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import BookCarousel from "./Bookcard/BookCardCarousel";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer/Footer";
import axios from "axios";

const MainWebsite = () => {
  const [bookName, setBookName] = useState<string>("");
  const navigate = useNavigate(); // Use useNavigate hook for navigation
  const [newArrival, setNewArrival] = useState<string[]>([]);

  const handleBookSearch = () => {
    if (bookName === "") return;
    navigate("/search", { state: { bookName: bookName } });
  };

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/books/new_arrival").then((res) => {
      setNewArrival(res.data.newArrival);
    });
  }, []);

  const handleSignIn = () => {
    navigate("/#/login"); // Navigate to sign up page
  };

  return (
    <>
      <div className="home-bg">
        <Navbar />
        <div className="text-light main-land border-bottom">
          <h1 className="text-center">Welcome to Bookflix</h1>
          <p className="text-center text-light">
            Search the book available in library
          </p>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex mb-3 justify-content-center align-items-center">
                  <input
                    type="text"
                    className="form-control me-3 w-50 text-place bg-transparent"
                    placeholder="Search Book"
                    aria-label="Search Book"
                    onChange={(e) => setBookName(e.target.value)}
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
      </div>
      
      <div className="text-center border-bottom border-body text-white bg-dark py-5">
        <p className="fs-3 fw-bold pb-3">New Arrival</p>
        <div className="container">
          <BookCarousel id={"newarrival"} newArrival={newArrival} />
        </div>
      </div>
      <div className="text-center border-bottom border-body text-light py-5">
        <p className="fs-3">Sign up & get the Access of</p>
        <p className="text-danger fw-bold hund">Unlimited</p>
        <p className="fs-3">Books of Our Library</p>
        <button className="btn btn-danger w-25 mt-4" onClick={handleSignIn}>
          Sign Up
        </button>
      </div>

      <Footer />
    </>
  );
};

export default MainWebsite;
