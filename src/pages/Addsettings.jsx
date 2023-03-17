import React from "react";

export default function Profile() {
  return (
  <div className="col-md-12 mt-4">
    <div className="col-lg-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Store Locations</h4>
        </div>
        <div class="card-body">
          <form class="form-horizontal">
            <div class=" row mb-4">
              <label class="col-md-3 form-label text-start">Geolocation: </label>
              <div class="col-md-9">
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class=" row mb-4">
              <label class="col-md-3 form-label text-start">Title:</label>
              <div class="col-md-9">
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class=" row mb-4">
              <label class="col-md-3 form-label text-start" for="example-email">
                Email:
              </label>
              <div class="col-md-9">
                <input
                  type="email"
                  id="example-email"
                  name="example-email"
                  class="form-control"
                  placeholder="Email"
                />
              </div>
            </div>
            <div class=" row mb-4">
              <label class="col-md-3 form-label text-start">Phone: </label>
              <div class="col-md-9">
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class=" row mb-4">
              <label class="col-md-3 form-label text-start">Address: </label>
              <div class="col-md-9">
                <input type="text" class="form-control" placeholder="" />
              </div>
            </div>
            <div class=" row mb-4">
              <label class="col-md-3 form-label text-start">Country: </label>
              <div class="col-md-9">
                <select className="form-control form-select select2">
                  <option value="br">India</option>
                  <option value="cz">Brazil</option>
                  <option value="de">Germany</option>
                  <option value="pl">Japan</option>
                </select>
              </div>
            </div>
            <div class=" row mb-4">
              <label class="col-md-3 form-label text-start">State:</label>
              <div class="col-md-9">
                <input type="text" class="form-control" placeholder="" />
              </div>
            </div>
            <div class=" row mb-4 mb-4">
              <label class="col-md-3 form-label text-start">City:</label>
              <div class="col-md-9">
                <input type="text" class="form-control" placeholder="" />
              </div>
            </div>
            <div class=" row mb-4">
              <label class="col-md-3 form-label text-start">Pin Code: </label>
              <div class="col-md-9">
                <input type="text" class="form-control" placeholder="" />
              </div>
            </div>
            <div class=" row mb-4 mb-4">
              <label class="col-md-3 form-label text-start">Show On website:</label>
              <div class="col-md-9">
                <label class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    name="example-checkbox1"
                    value="option1"
                    
                  />
                  <span class="custom-control-label"></span>
                </label>
              </div>
            </div>
            <div class="  row mb-4 mb-4">
              <label class="col-md-3 form-label text-start">Metafields:</label>
              <div class="col-md-9">
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class=" row mb-0">
              <label class="col-md-3 form-label text-start">Sort Order:</label>
              <div class="col-md-9">
                <input type="text" class="form-control" />
              </div>
            </div>

            <div class="row mt-2">
              <div class="col-md-3"></div>
              <div class="col-md-9 text-end">
                <a href="javascript:void(0)" class="btn btn-facebook">
                  Save
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
