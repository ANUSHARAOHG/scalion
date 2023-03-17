import React from "react";
import "../table/table.css";

export default function Issue() {
  return (
    <div className="page bg-relook">
      <div className="page-main mt-5">
          <div className="col-lg-12">
            <div className="card">
            <div class="card-header">
                <h3 class="card-title">
                  <div class="col-md-12 text-end">
                    <a href="/addsettings" class="btn btn-facebook text-white">
                      Add New
                    </a>
                  </div>
                </h3>
              </div>
              <div className="card-body">
                <div className="table-responsive ">
                <table class="table table-bordered text-nowrap border-bottom" id="basic-datatable">
                                                <thead className="text-start">
                                                    <tr>
                                                        <th class="wd-15p border-bottom-0">Title</th>
                                                        <th class="wd-15p border-bottom-0">Email</th>
                                                        <th class="wd-20p border-bottom-0">Phone</th>
                                                        <th class="wd-15p border-bottom-0">Show on website</th>
                                                        <th class="wd-10p border-bottom-0">Actions</th>
                                                       
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    

 
                                                    <tr>
                                                        <td>KCOGF Limited Mysore</td>
                                                        <td>mail@kof.co.in</td>
                                                        <td>+919591812033</td>
                                                        <td> <label class="custom-switch form-switch mb-0">
                                                            <input type="checkbox" name="custom-switch-radio" class="custom-switch-input"/>
                                                            <span class="custom-switch-indicator"></span>
                                                            <span class="custom-switch-description"></span>
                                                    </label></td>
                                                        <td><a href=""><i class="fa fa-eye" aria-hidden="true"></i><i class="fe fe-edit m-3"></i></a></td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <td>KCOGF Limited Mysore</td>
                                                        <td>mail@kof.co.in</td>
                                                        <td>+919591812033</td>
                                                        <td> <label class="custom-switch form-switch mb-0">
                                                            <input type="checkbox" name="custom-switch-radio" class="custom-switch-input"/>
                                                            <span class="custom-switch-indicator"></span>
                                                            <span class="custom-switch-description"></span>
                                                    </label></td>
                                                        <td><a href=""><i class="fa fa-eye" aria-hidden="true"></i><i class="fe fe-edit m-3"></i></a></td>
                                                        
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
