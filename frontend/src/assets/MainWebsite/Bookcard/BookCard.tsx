const BookCard = () => {
  return (
    <>
      <div className="card bg-karu" style={{width: '18rem'}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body text-white">
          <h5 className="card-title">Card title</h5>
          <p className="card-text text-wrap">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-danger">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default BookCard;
