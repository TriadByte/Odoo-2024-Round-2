import React, { useState } from 'react';
import AdminNav from '../AdminNav';
import 'bootstrap/dist/css/bootstrap.min.css';

const ManageUsers = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Implement search logic here
        console.log("Searching for:", searchTerm);
    };

    const handleActionChange = (userId, action) => {
        // Implement action logic here
        console.log(`Action "${action}" selected for user ID ${userId}`);
    };

    return (
        <>
            <AdminNav />
            <div className="container bg-karu p-5 mt-5">
            <h1 className="py-3 text-white text-center">Manage Users</h1>
                <form className="d-flex" onSubmit={handleSearchSubmit}>
                    <input
                        className="form-control me-2 bg-secondary text-white"
                        type="search"
                        placeholder="Search User / Email / Role"
                        aria-label="Search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button className="btn btn-danger" type="submit">
                        Search
                    </button>
                </form>

                <table className="table mt-4 table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Role</th>
                            <th scope="col">Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>John Doe</td>
                            <td>john@example.com</td>
                            <td>123-456-7890</td>
                            <td>Admin</td>
                            <td>
                                <select
                                    className="form-select bg-secondary text-white"
                                    onChange={(e) => handleActionChange(1, e.target.value)}
                                    defaultValue=""
                                >
                                    <option value="" disabled>Select Action</option>
                                    <option value="Update">Admin</option>
                                    <option value="Delete">Librarian</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jane Smith</td>
                            <td>jane@example.com</td>
                            <td>987-654-3210</td>
                            <td>Librarian</td>
                            <td>
                                <select
                                    className="form-select bg-secondary text-white"
                                    onChange={(e) => handleActionChange(2, e.target.value)}
                                    defaultValue=""
                                >
                                    <option value="" disabled>Select Action</option>
                                    <option value="Update">Admin</option>
                                    <option value="Delete">Librarian</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Bob Johnson</td>
                            <td>bob@example.com</td>
                            <td>555-555-5555</td>
                            <td>User</td>
                            <td>
                                <select
                                    className="form-select bg-secondary text-white"
                                    onChange={(e) => handleActionChange(3, e.target.value)}
                                    defaultValue=""
                                >
                                   <option value="" disabled>Select Action</option>
                                    <option value="Update">Admin</option>
                                    <option value="Delete">Librarian</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ManageUsers;
