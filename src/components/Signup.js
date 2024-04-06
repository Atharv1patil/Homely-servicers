import React, { useState } from "react";

function SignUp() {
  const [selectedRole, setSelectedRole] = useState(""); // State to track selected role

  const redirectToLogin = (role) => {
    if (role === "user") {
      window.location.href = "/usersignup";
    } else if (role === "service-provider") {
      window.location.href = "/serviceprovidersignup";
    }
  };

  return (
    <div className="main1">
      <div className="pb-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="">
                <div className="px-5 pt-5 pb-1 mt-5 login">
                  <h5 className="card-title text-center mb-3 fw-bold">Sign Up</h5>
                  {/* Two buttons for signing up as a user or a service provider */}
                  <div><h4>Welcome,to the homely services</h4></div>
                  <div>Please select option to use app as user  or serviceprovider</div>
                  <div className="d-grid">
                    <button
                      className="btn btn-outline-success text-uppercase"
                      onClick={() => setSelectedRole("user")}
                    >
                     User
                    </button>
                    <button
                      className="btn btn-outline-success text-uppercase"
                      onClick={() => setSelectedRole("service-provider")}
                    >
                     Service Provider
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Redirect to appropriate signup page based on the selected role */}
      {selectedRole && redirectToLogin(selectedRole)}
    </div>
  );
}

export default SignUp;
