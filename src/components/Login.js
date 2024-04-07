import axios from "axios";
import "bootstrap/dist/js/bootstrap.min.js";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import sweetalert from "sweetalert";
import "../styles/login.css";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  // const finduser = async () => {
  //   const user = { email: Email, password: Password };

  //   const response = await axios.post("http://13.48.25.89:8080/api/login", user);

  //   console.log(response.data);
  //   if (response.data === null || response.data === "") {
  //     sweetalert("error", "Invalid Credential..", "error");
  //   } else {
  //     sweetalert("success", "You have a login successfully..", "success");

  //     localStorage.setItem("role", response.data.roleId);
  //     localStorage.setItem("userid", response.data.user_id);
  //     sessionStorage.setItem("name",response.data.name);

  //     if (response.data.status === "Active") {
  //       if (response.data.roleId === 1) {
  //         window.location.href = "/adminhome";
  //       } else if (response.data.roleId === 2) {
  //         window.location.href = "/serviceproviderhome";
  //       } else {
  //         window.location.href = "/userhome";
  //       }
  //     } else {
  //       sweetalert(
  //         "Error",
  //         "You are temporarily block! Please contact admin",
  //         "error"
  //       );
  //     }
  //   }
  // };
  const finduser = async () => {
    const user = { email: Email, password: Password };
  
    const response = await axios.post("http://13.48.25.89:8080/api/login", user);
  
    console.log(response.data);
    if (response.data === null || response.data === "") {
      sweetalert("error", "Invalid Credential..", "error");
      
    } else {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user.emailVerified) {
        sweetalert("error", "Please verify your email first", "error");
        // toast.error(" Plz verify your email and try again");
      } else {
        sweetalert("success", "You have logged in successfully..", "success");
        // toast.success(" Email is verifed ");
  
        localStorage.setItem("role", response.data.roleId);
        localStorage.setItem("userid", response.data.user_id);
        sessionStorage.setItem("name", response.data.name);
  
        if (response.data.status === "Active") {
          if (response.data.roleId === 1) {
            window.location.href = "/adminhome";
          } else if (response.data.roleId === 2) {
            window.location.href = "/serviceproviderhome";
          } else {
            window.location.href = "/userhome";
          }
        } else {
          sweetalert(
            "Error",
            "You are temporarily blocked! Please contact admin",
            "error"
          );
        }
      }
    }
  };
  

  return (
    <div className="">
      <div className="main pb-4">
        <div class="container">
          <div class="row abc">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto my-0">
              <div class="">
                <div class="p-4 p-sm-5 mt-5 login">
                  <h5 class="card-title text-center mb-5 fw-light fs-5">
                    Sign In
                  </h5>
                  <form>
                    <div class="mb-4">
                       <label>Email address</label> 

                      <input
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div class="mb-4">
                       <label>Password</label> 

                      <input
                        type="password"
                        class="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                    <ToastContainer/>
                    <div class="d-grid ">
                      <a
                        class="btn navBtnLogin btn-outline-success text-light text-uppercase fw-bold"
                        type="button"
                        onClick={finduser}
                      >
                        Sign in
                      </a>
                    </div>
                    <a href="signup">New to Homely?Create an account.</a>
                    <h6 class="mt-4">
                      <a href="/forgot_password">Forgot Password?</a>
                    </h6>
                    <hr class="my-4" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
