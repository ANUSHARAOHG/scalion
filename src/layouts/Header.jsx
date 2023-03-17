import React from "react";

export default function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-white fixed-top bg-white"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand " href="#!">
          <img src="logosc.png" alt="Logo" width={100} height={40} style={{marginTop:"-14px"}} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-list-ul"></i>
        </button>

        <div
          className="collapse navbar-collapse bg-white"
          id="navbarResponsive"
        >
          <ul className="navbar-nav text-uppercase ms-auto">

            <li className="list-inline-item">
              <a
                href="/products"
                style={{ color: "#290148", marginLeft: "10px",fontWeight:"bold" }}
              >
                Products
              </a>
            </li>

           
            
      <li className="list-inline-item dropdown ">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink"
                   role="button" 
                   data-bs-toggle="dropdown" 
                   aria-expanded="false"
                   style={{ color: "#290148", marginLeft: "10px",fontWeight:"bold" }}
                   >
                   Settings
              </a>
            <ul className="dropdown-menu"
                aria-labelledby="navbarDarkDropdownMenuLink">
            <li>
              <a className="dropdown-item"
                href="/settings" 
                >
                Store Locations
              </a>
            </li>
           
            <li>
              <a className="dropdown-item" 
              href="/shipping" 
              >
              Shipping Methods
              </a>
            </li>
        </ul>
      </li>

            <li className="list-inline-item">
              <a href="/" style={{ color: "#290148", marginLeft: "10px" }}>
                <i className="fa fa-sign-out text-dark"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
