const Footer = () => {
  return (
    <>
      <footer className="bg-body-dark bg-dark text-white text-center">
        {/* <!-- Grid container --> */}
        <div className="container p-4 pb-0">
          {/* <!-- Section: Form --> */}
          <section className="">
            <form action="">
              {/* <!--Grid row--> */}
              <div className="row d-flex justify-content-center flex-column">
                {/* <!--Grid column--> */}
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>
                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}
                <div className="d-flex justify-content-center align-items-center">
                  <div className="col-md-5 col-12">
                    {/* <!-- Email input --> */}
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="email"
                        id="form5Example26"
                        placeholder="Email"
                        className="form-control me-2 bg-secondary text-white"
                      />
                      {/* <label className="form-label" htmlFor="form5Example26">
                      Email address
                    </label> */}
                    </div>
                  </div>
                  {/* <!--Grid column--> */}

                  {/* <!--Grid column--> */}
                  <div className="col-auto">
                    {/* <!-- Submit button --> */}
                    <button
                      data-mdb-ripple-init
                      type="submit"
                      className="btn ms-2 btn-danger mb-4"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                {/* <!--Grid column-->/ */}
              </div>
              {/* {/* <!--Grid ro }w- */}
            </form>
          </section>
          {/* {/* <!-- Section: Form} --> */}
        </div>
        {/* {/* <!-- Grid container} --> */}

        {/* {/* <!-- Copyright} --> */}
        <div
          className="text-center text-light p-3"
          style={{ backgroundColor: "black" }}
        >
          © 2020 Copyright:
          <a className="text-white ms-3" href="https://triabyte.com/">
            triadbyte.com
          </a>
        </div>
        {/* {/* <!-- Copyright} --> */}
      </footer>
    </>
  );
};

export default Footer;
