import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNav from '../AdminNav';

const AddUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (name && email && phone && role) {
            // Add user logic here
            console.log({ name, email, phone, role });
            setName('');
            setEmail('');
            setPhone('');
            setRole('');
        }
    };

    return (
        <>
            <AdminNav />
            <div className="container rounded text-white text-center bg-karu p-5 mt-4">
            <h1 className="py-3 text-white text-center">Add User</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group my-3">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter the name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group my-3">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter the email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group my-3">
                        <input
                            type="text"
                            className="form-control"
                            id="phone"
                            placeholder="Enter the phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group my-3">
                        <select
                            className="form-control"
                            id="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                        >
                            <option value="" disabled>Select role</option>
                            <option value="Admin">Admin</option>
                            <option value="Librarian">Librarian</option>
                           
                        </select>
                    </div>
                    <button type="submit" className="btn w-100 btn-danger">
                        Add User
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddUser;
