import React from 'react';

const AdminNavbar = () => {
  return (
    <>
      <nav className="navbar bg-transparent data-bs-theme='dark'">
        <div className="container d-flex justify-content-between">
          <a className="navbar-brand fw-bold text-white" href="#">
            Bookflix
          </a>
          <div className="d-flex align-items-center">
           
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
             {/* Profile Dropdown */}
             <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle me-2"
                type="button"
                id="profileDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Profile
              </button>
              <ul className="dropdown-menu" aria-labelledby="profileDropdown">
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Logout</a></li>
              </ul>
            </div>
            {/* Search Form */}
        
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminNavbar;
