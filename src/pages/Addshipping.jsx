import React from "react";

export default function Shipping() {
  return (
    <div className="col-md-12 mt-4">
      <div className="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Shipping Methods</h4>
          </div>
          <div class="card-body">
            <form class="form-horizontal">
              <div class=" row mb-4">
                <label class="col-md-3 form-label text-start">Name: </label>
                <div class="col-md-9">
                  <input type="text" class="form-control" />
                </div>
              </div>

              <div class=" row mb-4">
                <label class="col-md-3 form-label text-start">Type: </label>
                <div class="col-md-9">
                  <select className="form-control form-select select2">
                    <option value="br">Manual</option>
                    <option value="cz">Provider based</option>
                  </select>
                </div>
              </div>

              <div class=" row mb-4">
                <label class="col-md-3 form-label text-start">Price: </label>
                <div class="col-md-9">
                  <input type="text" class="form-control" />
                </div>
              </div>

              <div class=" row mb-4">
                <label class="col-md-3 form-label text-start">
                  Countries:{" "}
                </label>
                <div class="col-md-9">
                  <select className="form-control form-select select2">
                    <option value="br">All countries</option>
                    <option value="cz">Rest of the world</option>
                  </select>
                </div>
              </div>

              <div class=" row mb-4">
                <label class="col-md-3 form-label text-start">
                  Apply When:{" "}
                </label>
                <div class="col-md-9">
                  <div className="table-responsive ">
                    <table
                      class="table table-bordered text-nowrap border-bottom"
                      
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
                                <div className="col-md-6">order total</div>
                                <div className="col-md-6">undefined</div>
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
                  <div className="col-md-9 text-start">
                  <a href="javascript:void(0)" className="btn btn-facebook">
                    Add Condition
                  </a>
                  {/* <div className="row mb-4">
              <label className="col-md-3 form-label text-start">Field:</label>
              <div className="col-md-9">
                <select className="form-control form-select select2 text-start">
                  <option value="br">Order total</option>
                  <option value="cz">Order weight</option>
                  <option value="de">Order quantity</option>
                  <option value="pl">Every product price</option>
                </select>
              </div>
            </div> */}
                </div>

                
                </div>
              </div>
              <div className="row mb-4">
              <label className="col-md-3 form-label text-start">Enabled:</label>
              <div className="col-md-9 mt-1">
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox2"
                    value="option2"
                    
                  />
                  <span className="custom-control-label"></span>
                </label>
              </div>
            </div>
            <div className="row mb-4">
              <label className="col-md-3 form-label text-start">Tax:</label>
              <div className="col-md-9">
                <select className="form-control form-select select2 text-start">
                  <option value="br">No tax</option>
                  <option value="cz">Default</option>
                  <option value="de">GST 18%(EXCLUSIVE)</option>
                  <option value="pl">GST(EXCLUSIVE)</option>
                </select>
              </div>
            </div>
            <div class="col-md-12 text-end">
                <a href="javascript:void(0)" class="btn btn-facebook">
                  Save
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
