import React from "react";
import { Input } from "reactstrap";

export default function Opinion() {
  return (
    <div className="col-md-12 mt-4">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Add New Product</div>
          </div>
          <div className="card-body">
            <div className="row mb-4">
              <label className="col-md-3 form-label text-start ">
                Product Name :
              </label>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product Name"
                />
              </div>
            </div>
            <div className="row mb-4">
              <label className="col-md-3 form-label text-start">Alias:</label>
              <div className="col-md-9">
                <input type="number" className="form-control" />
              </div>
            </div>

            <div className="row">
              <label className="col-md-3 form-label text-start mb-4">
                Product Description :
              </label>
              <div className="col-md-9 mb-4">
                <textarea className="content" name="example"></textarea>
              </div>
            </div>

            <div className="row mb-4">
              <label className="col-md-3 form-label text-start mb-4">
                Images:
              </label>
              <div className="col-md-9">
                <input
                  id="demo"
                  type="file"
                  name="files"
                  accept=".jpg,.png, image/jpeg, image/png"
                  multiple
                />
              </div>
            </div>

            <div className="row mb-4">
              <label className="col-md-3 form-label text-start">Price:</label>
              <div className="col-md-9">
                <input type="number" className="form-control" />
              </div>
            </div>
            <div className="row mb-4">
              <label className="col-md-3 form-label text-start">
                Maximum Retail Price(MRP):
              </label>
              <div className="col-md-9">
                <input type="number" className="form-control" />
              </div>
            </div>
            <div className="row mb-4">
              <label className="col-md-3 form-label text-start">
                Inventory Management:
              </label>
              <div className="col-md-9">
                <div className="custom-controls-stacked">
                  <div className="row">
                    <div className="col-md-3 text-start">
                      <label className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="example-radios"
                          value="option1"
                          checked
                        />
                        <span className="custom-control-label">
                          Don't track my inventory
                        </span>
                      </label>
                    </div>
                    <div className="col-md-3 text-start">
                      <label className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="example-radios"
                          value="option1"
                          checked
                        />
                        <span className="custom-control-label">
                          Track my inventory
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <label className="col-md-3 form-label text-start">HSN/SAC:</label>
              <div className="col-md-9">
                <input type="number" className="form-control" />
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

            <div className="row mb-4">
              <label className="col-md-3 form-label text-start">
                Package Weight:
              </label>
              <div className="col-md-9">
                <input
                  type="number"
                  className="form-control"
                  placeholder="gm"
                />
              </div>
            </div>

            <div className="row mb-4">
              <label className="col-md-3 form-label text-start">Publish:</label>
              <div className="col-md-9">
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox1"
                    value="option1"
                  
                  />
                  <span className="custom-control-label"></span>
                </label>
              </div>
            </div>

            <div className="row mb-4">
              <label className="col-md-3 form-label text-start">
                Location Availability Mode:
              </label>
              <div className="col-md-9">
                <div className="custom-controls-stacked">
                  <div className="row">
                    <div className="col-md-3 text-start">
                      <label className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="example-radios"
                          value="option1"
                          checked
                        />
                        <span className="custom-control-label">Cities</span>
                      </label>
                    </div>
                    <div className="col-md-3 text-start">
                      <label className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="example-radios"
                          value="option1"
                          checked
                        />
                        <span className="custom-control-label">Pin codes</span>
                      </label>
                    </div>
                    <div className="col-md-3 text-start">
                      <label className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="example-radios"
                          value="option1"
                          checked
                        />
                        <span className="custom-control-label">
                          All over india
                        </span>
                      </label>
                    </div>
                    <div className="col-md-3 text-start">
                      <label className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="example-radios"
                          value="option2"
                        />
                        <span className="custom-control-label">
                          Seller default
                        </span>
                      </label>
                    </div>
                    <p className="text-start">Specify where this product/service can be delivered</p>
                  </div>
                </div>
              </div>
             
            </div>

            <div className="row mb-4">
              <label className="col-md-3 form-label text-start">ONDC:</label>
              <div className="col-md-9">
                <div className="card2">
            <div className="row mb-4">

              <label className="col-md-2 form-label text-start ms-2">Time To Deliver:</label>
              <div className="col-md-2 mt-2 text-start">
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox1"
                    value="option1"
                    
                  />
                  <span className="custom-control-label">Default</span>
                </label>
              </div>

              <div className="row mb-4">
              <label className="col-md-2 form-label text-start ms-2">
                Cancellable:
              </label>
              <div className="col-md-6 mt-2">
                <div className="custom-controls-stacked">
                  <div className="row">
                    <div className="col-md-2 text-start">
                      <label className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="example-radios"
                          value="option1"
                          checked
                        />
                        <span className="custom-control-label">
                          Yes
                        </span>
                      </label>
                    </div>
                    <div className="col-md-2 text-start">
                      <label className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="example-radios"
                          value="option1"
                          checked
                        />
                        <span className="custom-control-label">
                          No
                        </span>
                      </label>
                    </div>
                    <div className="col-md-3 text-start">
                      <label className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="example-radios"
                          value="option1"
                          checked
                        />
                        <span className="custom-control-label">
                          Default
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <label className="col-md-2 form-label text-start ms-2">
                Returnable:
              </label>
              <div className="col-md-6 mt-2">
                <div className="custom-controls-stacked">
                  <div className="row">
                    <div className="col-md-2 text-start">
                      <label className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="example-radios"
                          value="option1"
                          checked
                        />
                        <span className="custom-control-label">
                          Yes
                        </span>
                      </label>
                    </div>
                    <div className="col-md-2 text-start">
                      <label className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="example-radios"
                          value="option1"
                          checked
                        />
                        <span className="custom-control-label">
                          No
                        </span>
                      </label>
                    </div>
                    <div className="col-md-3 text-start">
                      <label className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="example-radios"
                          value="option1"
                          checked
                        />
                        <span className="custom-control-label">
                          Default
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <label className="col-md-2 form-label text-start ms-2">
                Category Id:
              </label>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Category id"
                />
              </div>
             
            </div>


                  </div>
                </div>
              </div>
            </div>

            <div className="card-footer">
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-9 text-end">
                  <a href="javascript:void(0)" className="btn btn-facebook">
                    Save
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
