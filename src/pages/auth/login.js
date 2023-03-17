import React from "react";
import "../auth/auth.css";

export default function Login() {
  return (
    <React.Fragment>
      <div className="page">
        <div className="">
          <div className="container-login100 " style={{marginTop:"3px"}}>
            <div className="wrap-login100 p-6">
            <form class="login100-form validate-form">
            <div class="text-center">
                <img src="../circle.png" class="h-8" alt=""/>
            </div>
            <span class="login100-form-title pb-5 mt-2">
                Login
            </span>
            <div class="panel panel-primary">
                
                <div class="panel-body tabs-menu-body p-0 pt-1">
                    <div class="tab-content">
                        <div class="tab-pane active">
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
                            <div class="text-end pt-4">
                                <p class="mb-0"><a href="#" class="text-primary ms-1">Forgot Password?</a></p>
                            </div>
                            <div class="container-login100-form-btn">
                                <a href="/table/products" class="login100-form-btn btn-facebook">
                                        Login
                                </a>
                            </div>
                            <div class="text-center pt-3">
                                <p class="text-dark mb-0">Not a member?<a href="/register" class="text-primary ms-1">Sign UP</a></p>
                            </div>
                            
                        </div>
                        
                    </div>
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
