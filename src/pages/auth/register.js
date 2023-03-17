import React from "react";
import { Input } from "reactstrap";
import "../auth/auth.css";

export default function Register() {
  return (
    <React.Fragment>
      <div className="page bg-relook">
        <div className="">
          <div className="container-login100 mt-1 ">
            <div className="wrap1-login100 p-6">
              <form className="login100-form validate-form">
                <div className="text-center">
                  <img src="../circle.png" className="h-8" alt="" />
                </div>
                <span className="login100-form-title mt-4">Sign Up</span>

                <div className="row">
                <div className="col-md-12 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Business Name"
                    />
                  </div>

                  <div className="col-md-12 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="GSTIN"
                    />
                  </div>
                  
                 
                  <div className="col-md-12 mb-4">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>

                  <div className="col-md-12 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="col-md-12 mb-4">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Phone No."
                    />
                  </div>

                  <div className="row">
                    <div className="col-sm-9 mb-4">
                      <input
                        type="number"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm-2 mb-4" style={{marginLeft:"10px"}}>
                      <a href="javascript:void(0)" className="btn btn-facebook">
                        Send OTP
                      </a>
                    </div>
                  </div>
                 

                  <div className="container-login100-form-btn">
                    <a
                      href="/table/products"
                      className="login100-form-btn btn-facebook"
                    >
                      Register
                    </a>
                  </div>
                  <div className="text-center pt-3">
                    <p className="text-dark mb-0">
                      Already have account?
                      <a href="/login" class="text-primary ms-1">
                        Sign In
                      </a>
                    </p>
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
