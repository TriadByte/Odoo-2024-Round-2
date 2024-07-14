import  { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
const EditProfile = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState('Edogaru');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('edogaru@mail.com.my');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Here you can add logic to save changes, e.g., send API request

    // For demo, we'll just exit edit mode
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    // Here you can reset fields or manage cancel action
  };

  const handleBackClick = () => {
    navigate(-1); // Navigate back one step in history
  };

  return (
    <div className="container mt-5">
      <div className="card position-relative">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <button className="btn btn-outline-primary me-3" onClick={handleBackClick}>
              Back
            </button>
            <h4 className="text-left mb-0">Edit Profile</h4>
            {!isEditing && (
              <button className="btn btn-primary ms-3" onClick={handleEditClick}>
                Edit
              </button>
            )}
          </div>
          <div className="row">
            <div className="col-md-4 text-center border-right">
              <div className="py-4">
                <img
                  className="rounded-circle"
                  width="150px"
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                  alt="profile"
                />
                <h5 className="font-weight-bold mt-3">{firstName}</h5>
                <p className="text-muted">{email}</p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="p-4">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="labels">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-12">
                    <label className="labels">Email ID</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Email ID"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="labels">Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="labels">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Gender</label>
                    <select
                      className="form-control"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      disabled={!isEditing}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                {isEditing && (
                  <div className="mt-4 text-center">
                    <button className="btn btn-primary me-3" onClick={handleSaveClick}>
                      Save Profile
                    </button>
                    <button className="btn btn-secondary" onClick={handleCancelClick}>
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
