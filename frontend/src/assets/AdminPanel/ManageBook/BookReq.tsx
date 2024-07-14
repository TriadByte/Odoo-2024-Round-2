import AdminNav from "../AdminNav";

const BookReq = () => {
  return (
    <>
      <AdminNav />
      <div className="container bg-karu p-5 mt-5">
      <h1 className="py-3 text-white text-center">Requested Book</h1>
        <form className="d-flex">
          <input
            className="form-control me-2 bg-secondary text-white"
            type="search"
            placeholder="Search Book / Auther Name / ISBN Number"
            aria-label="Search"
          />
          <button className="btn btn-danger" type="submit">
            Search
          </button>
        </form>

        <table className="table mt-4 table-dark  table-striped">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Book Name</th>
              <th scope="col">Auther Name</th>
              <th scope="col">Stock</th>
              <th scope="col">Requeast</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>22</td>
          
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>28</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
              <td>28</td>
              </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookReq;
