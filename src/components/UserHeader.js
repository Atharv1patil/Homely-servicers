import React from "react";
import "../styles/header.css";


const UserHeader = () => {
  return (
    <div className="m-0 p-0">
      <nav className="navbar navbar-expand-lg navbar-dark ">
  <a className="navbar-brand" href="/">{/*<img src={servis} alt="" />*/}<b>Homely</b></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ml-auto text-uppercase">
      <li className="nav-item ">
      <a class="nav-link active" aria-current="page" href="/userhome">
                {sessionStorage.getItem("name")}
              </a>
      </li>
      <li className="nav-item ">
      <a class="nav-link " aria-current="page" href="/Categoryservices">
                  Categories
                  </a>
      </li>
      <li className="nav-item ">
    <a className="nav-link" href="/viewbooking">
      View Booking
    </a>
  </li>

      <li className="nav-item ">
      <a class="nav-link " aria-current="page" href="/login">
                   Logout
                  </a>
      </li>
     
     
      
    </ul>
  </div>
</nav>

    
    </div>
  );
};

export default UserHeader;
