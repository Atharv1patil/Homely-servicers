import React from "react";
import "../styles/header.css";


const AdminHeader = () => {
  const redirectlogin = () => {
    window.location.href = "/login";
    localStorage.setItem("role", null);
  };

  return (
    <div className="m-0 p-0">
      <nav class="navbar navbar-expand-lg  navbar-custom  ">
      <a className="navbar-brand" href="/"><b> Homely</b></a>
       

        <button
          class="navbar-toggler my-toggler bg-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-custom"
          aria-controls="navbar-custom"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse navbar-custom m-0 p-0"
          id="navbar-custom"
        >
          <ul class="navbar-nav  ml-auto linktab text-uppercase">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/adminhome">
              {sessionStorage.getItem("name")}
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/viewuser">
                View Users
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/viewserviceprovider">
                View Service Providers
              </a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/viewserviceprovider">
              ViewBookings
              </a>
            </li> */}
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/login">
                Logout
              </a>
            </li>
          </ul>

         
        </div>
      </nav>
    </div>
  );
};

export default AdminHeader;
