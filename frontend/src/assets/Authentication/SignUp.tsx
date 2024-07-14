import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebaseConfig";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(null); // State for alert message
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setAlert("Sign up successful!"); // Set success alert message
      setTimeout(() => {
        setAlert(null); // Clear alert after 3 seconds
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Error signing up with email and password", error);
      setAlert(error.message); // Set error alert message
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setAlert("Sign up with Google successful!"); // Set success alert message
      setTimeout(() => {
        setAlert(null); // Clear alert after 3 seconds
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Error signing up with Google", error);
      setAlert(error.message); // Set error alert message
    }
  };

  return (
    <div>
      <section className="vh-100">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card bg-light" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="fw-bold text-center mb-5">
                      Create an account
                    </h2>

                    {alert && (
                      <div className="alert alert-dismissible alert-success">
                        {alert}
                      </div>
                    )}

                    <form>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3cg"
                          placeholder="Enter Your Email"
                          className="form-control form-control-lg"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cg"
                          placeholder="Password"
                          className="form-control form-control-lg"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-primary w-100 btn-block btn-lg gradient-custom-4 text-white"
                          onClick={handleSignUp}
                        >
                          Sign Up
                        </button>
                      </div>

                      <hr />
                      <div className="text-center mb-4">
                        <button className="border-0 bg-light" onClick={handleGoogleSignUp}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            fill="currentColor"
                            className="bi bi-google"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                          </svg>
                        </button>
                      </div>

                      <p className="text-center text-muted mt-3 mb-0">
                        Have already an account?{" "}
                        <button
                          className="btn btn-link fw-bold text-body"
                          onClick={handleLogin}
                        >
                          Sign In
                        </button>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
