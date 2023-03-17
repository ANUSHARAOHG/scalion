import React from "react";

export default function LoginContainer() {
  return (
    <React.Fragment>
      <div className="page">
        <div className="">
          <div className="container-login100 " style={{marginTop:"3px"}}>
            <div className="wrap-login100 p-6">
            <form className="login100-form validate-form">
            <div className="text-center">
                <img src="../circle.png" className="h-8" alt=""/>
            </div>
            <span className="login100-form-title pb-5 mt-2">
                Login
            </span>
            <div className="panel panel-primary">
                
                <div className="panel-body tabs-menu-body p-0 pt-1">
                    <div className="tab-content">
                        <div className="tab-pane active">
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
                            <div className="text-end pt-4">
                                <p className="mb-0"><a href="#" className="text-primary ms-1">Forgot Password?</a></p>
                            </div>
                            <div className="container-login100-form-btn">
                    <a
                      href="/"
                      className="login100-form-btn btn-facebook" style={{width:"92%"}}
                    >
                      Login
                    </a>
                  </div>
                            <div className="text-center pt-3">
                                <p className="text-dark mb-0">Not a member?<a href="/register" className="text-primary ms-1">Sign UP</a></p>
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
