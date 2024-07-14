import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';


const TestComp: React.FC = () => {
  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="sidebar-heading">Admin Panel</div>
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link href="#dashboard">Dashboard</Nav.Link>
        </Nav.Item>
        <NavDropdown title="User Management" id="user-management-dropdown">
          <NavDropdown.Item href="#add-user">Add User</NavDropdown.Item>
          <NavDropdown.Item href="#view-users">View Users</NavDropdown.Item>
          <NavDropdown.Item href="#edit-user">Edit User</NavDropdown.Item>
          <NavDropdown.Item href="#delete-user">Delete User</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Book Management" id="book-management-dropdown">
          <NavDropdown.Item href="#add-book">Add Book</NavDropdown.Item>
          <NavDropdown.Item href="#view-books">View Books</NavDropdown.Item>
          <NavDropdown.Item href="#edit-book">Edit Book</NavDropdown.Item>
          <NavDropdown.Item href="#delete-book">Delete Book</NavDropdown.Item>
        </NavDropdown>
        <Nav.Item>
          <Nav.Link href="#logout">Logout/Sign In</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default TestComp;
