const AdminNav = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-black text-white">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/#/dashboard">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/admin/stockappro">Stock Approval</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="user" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Manage User
          </a>
          <ul className="dropdown-menu" aria-labelledby="user">
            <li><a className="dropdown-item" href="/#/admin/adduser">Add User</a></li>
            <li><a className="dropdown-item" href="/#/admin/manageuser">Manage User</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="books" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Manage Book
          </a>
          <ul className="dropdown-menu" aria-labelledby="books">
            <li><a className="dropdown-item" href="/#/admin/addbook">Add Book</a></li>
            <li><a className="dropdown-item" href="/#/admin/bookstock">Book Stock</a></li>
            {/* just for admin */}
            <li><a className="dropdown-item" href="/#/admin/bookreq">Book Request</a></li>
          </ul>
        </li>
        {/* Just For admin */}
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2 bg-secondary text-white" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-danger" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default AdminNav;