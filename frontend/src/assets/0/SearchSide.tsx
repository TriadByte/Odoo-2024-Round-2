import React, { useState } from 'react';

const TestComp = () => {
  const initialUser = {
    name: 'Vishal Shrimali',
    email: '24vishalmali@gmail.com',
    address: '123 Main St, City, Country',
    phone: '+91 814191213',
  };

  const [user, setUser] = useState(initialUser);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Perform save logic if needed, e.g., update database
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row justify-content-center text-center justify-content-center align-items-center h-100">
          <div className="col-md-9">
            <div className="card shadow-lg h-100">
              <div className="card-body">
                <h4 className="card-title">Main Content</h4>
                {/* Add your main content here */}
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-lg h-100">
              <div className="card-body d-flex flex-column align-items-center">
                <div className="profile-header mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    className="rounded-circle img-fluid"
                    style={{ width: '120px' }}
                    alt="Profile"
                  />
                  <h4 className="mt-3 mb-2">
                    {isEditing ? (
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                      />
                    ) : (
                      user.name
                    )}
                  </h4>
                  <p className="text-muted mb-2">
                    {isEditing ? (
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                      />
                    ) : (
                      user.email
                    )}
                  </p>
                  <p className="text-muted mb-2">
                    {isEditing ? (
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={user.address}
                        onChange={handleChange}
                      />
                    ) : (
                      user.address
                    )}
                  </p>
                  <p className="text-muted mb-2">
                    {isEditing ? (
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                      />
                    ) : (
                      user.phone
                    )}
                  </p>
                </div>
                {/* Edit and Save Buttons */}
                <div className="mt-auto d-flex justify-content-center w-100">
                  {isEditing ? (
                    <button className="btn btn-danger me-2" onClick={handleSave}>
                      Save
                    </button>
                  ) : (
                    <button className="btn btn-danger me-2" onClick={handleEdit}>
                      Edit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestComp;
