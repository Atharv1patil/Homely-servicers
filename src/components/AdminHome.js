import React, { useEffect } from "react";
import '../styles/home.css';
function AdminHome() {
  useEffect(() => {
    if (
      localStorage.getItem("role") === "null" ||
      localStorage.getItem("role") != "1"
    ) {
      // window.location.href = "/login";
    }
  });
  return (
    
     <div>
      <header class="masthead text-center ">
        <div class="masthead-content">
          <div class="container">
            <h1 class="masthead-heading mb-0">Homely Services Booking</h1>
            <h2 class="masthead-subheading mb-0">Get help around your home</h2>
            <a href="/search" class="btn btn-primary btn-xl rounded-pill mt-5">Search Now</a>
          </div>
        </div>
        <div class="bg-circle-1 bg-circle"></div>
        <div class="bg-circle-2 bg-circle"></div>
        <div class="bg-circle-3 bg-circle"></div>
        <div class="bg-circle-4 bg-circle"></div>
      </header>
      <section>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 order-lg-2">
              <div class="p-5">
                <img class="img-fluid rounded-circle" src="https://images.unsplash.com/photo-1510563800743-aed236490d08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80" alt="" />
              </div>
            </div>
            <div class="col-lg-6 order-lg-1">
              <div class="p-5">
                <h2 class="display-4">Book a service provider near you</h2>
                <p>"Discover convenience at your doorstep with our exceptional home services. From skilled technicians to expert artisans, we've gathered a network of service providers ready to cater to your every need. Whether it's a plumbing fix, a garden transformation, or a fresh coat of paint, you can now effortlessly book a service provider near you. Experience quality, reliability, and a touch of magic in every service, all just a click away."</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="p-5">
              <img class="img-fluid rounded-circle" src="https://images.unsplash.com/photo-1471560090527-d1af5e4e6eb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80" alt="" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="p-5">
              <h2 class="display-4">More time to relax!</h2>
              <p>Embrace the luxury of time for yourself and your loved ones by entrusting your home services to us. With our dedicated professionals taking care of your every need, you can reclaim precious moments to relax, unwind, and indulge in the things that truly matter. Say goodbye to the stress of chores and repairs – we've got you covered. It's not just a service; it's a gateway to a life with more time to relax, rejuvenate, and create lasting memories.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </div>
    
  );
}

export default AdminHome;
