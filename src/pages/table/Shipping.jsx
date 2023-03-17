import React from "react";
import "../table/table.css";

export default function Ship() {
  return (
    <div className="page bg-relook">
      <div className="page-main mt-5">
        <div className="col-lg-12">
          <div className="card">
            <div class="card-header">
              <h3 class="card-title">
                <div class="col-md-12 text-end">
                  <a href="/addshipping" class="btn btn-facebook text-white">
                    Add New
                  </a>
                </div>
              </h3>
            </div>
            <div className="card-body">
              <div className="table-responsive ">
                <table
                  class="table table-bordered text-nowrap border-bottom"
                  id="basic-datatable"
                >
                  <thead className="text-start">
                    <tr>
                      <th class="wd-15p border-bottom-0"></th>
                      <th class="wd-15p border-bottom-0">Summary</th>
                      <th class="wd-20p border-bottom-0">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox2"
                    value="option2"
                    
                  />
                  <span className="custom-control-label"></span>
                </label></td>

                      <td>
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-4">
                                25000<br></br>
                                All countries<br></br>
                                All states
                            </div>
                            <div className="col-md-4">
                                1 condition
                            </div>
                            <div className="col-md-4">
                                Typee: Manual<br></br>
                                Price: 150<br></br>
                                Enabled: 1
                            </div>
                          </div>
                        </div>
                      </td>

                      <td>
                        <a href="">
                          <i class="fa fa-eye" aria-hidden="true"></i>
                          <i class="fe fe-edit m-3"></i>
                          <i class="fe fe-delete"></i>
                          <i class="fe fe-duplicate"></i>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td><label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox2"
                    value="option2"
                    
                  />
                  <span className="custom-control-label"></span>
                </label></td>
                      <td>
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-4">
                                25000<br></br>
                                All countries<br></br>
                                All states
                            </div>
                            <div className="col-md-4">
                                1 condition
                            </div>
                            <div className="col-md-4">
                                Typee: Manual<br></br>
                                Price: 150<br></br>
                                Enabled: 1
                            </div>
                          </div>
                        </div>
                      </td>

                      <td>
                        <a href="">
                          <i class="fa fa-eye" aria-hidden="true"></i>
                          <i class="fe fe-edit m-3"></i>
                          <i class="fe fe-delete"></i>
                          <i class="fe fe-duplicate"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
