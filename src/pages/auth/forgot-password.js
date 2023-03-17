import React from "react";
import "../auth/auth.css";

export default function Forgot() {
  return (
    <React.Fragment>
      <div className="page bg-relook">
        <div className="">
          <div className="container-login100 mt-1 ">
            <div className="wrap-login100 p-8">
              <form>
                <div className="col col-login mx-auto mb-6">
                  <div className="text-center">
                    <img src="logo.png" className="header-brand-img" alt="" />
                  </div>
                </div>

                <div className="text-start">
                  <h5>Forgot Password</h5>
                  <h6 className="fw-semibold mt-3">
                    Enter the email address associated with your account.
                  </h6>
                </div>

                <div className="mt-5">
                  <div className="wrap-input100  input-group">
                    <a href="" className="input-group-text bg-white text-muted">
                      <i
                        className="zmdi zmdi-email text-muted"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <input
                      className="input100 border-start-1 form-control ms-0"
                      type="email"
                      placeholder="Email"
                    />
                  </div>

                  <div className="container-login100-form-btn mt-4">
                    <a href="" className="login100-form-btn btn-temp">
                      Submit
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
