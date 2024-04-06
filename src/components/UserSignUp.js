import axios from "axios";
import "bootstrap/dist/js/bootstrap.min.js";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import sweetalert from "sweetalert";
import { auth } from "../Firebase";
import "../styles/signup.css";
function UserSignUp() {
  const [Name, setName] = useState("");
  const [Mobile, SetMobile] = useState("");
  const [Email, setEmail] = useState("");
  const [Pass, setPassword] = useState("");
  const [Address, setAddress] = useState("");
  const status = "Active";
   const [Role, setRole] = useState("3");
  const roleId ="3";
  // const [Specialization,setSpecialization]=useState("");


  
  
  const validate = () => {
    var regEx = /^[a-zA-Z\s]+$/;
    if (Name === "") {
      sweetalert("Error", "Please enter Name", "error");
      return false;
      // } else if (!isNaN(Name)) {
      //   sweetalert("Error", "Please enter valid Name", "error");
      //   return false;
    } else if (!regEx.test(Name)) {
      sweetalert("Error", "Please enter characters and space only", "error");
      return false;
    } else if (Mobile === "") {
      sweetalert("Error", "Please enter Mobile number", "error");
      return false;
    } else if (isNaN(Mobile) || Mobile.length <= 9 || Mobile.length >= 11) {
      sweetalert("Error", "Please enter valid Mobile number", "error");
      return false;
    } else if (Email === "") {
      sweetalert("Error", "Please enter email", "error");
      return false;
    } else if (Email.indexOf("@") <= 0) {
      sweetalert("Error", "Please enter valid email", "error");
      return false;
    } else if (
      Email.charAt(Email.length - 4) !== "." &&
      Email.charAt(Email.length - 3) !== "."
    ) {
      sweetalert("Error", "Please enter valid email", "error");
      return false;
    } else if (Pass === "") {
      sweetalert("Error", "Please enter password", "error");
      return false;
    } else if (Pass.length <= 5 || Pass.length > Pass) {
      // sweetalert("Error", "Please enter Strong password", "error");
      sweetalert("Error", "Password must be atleast 6 character", "error");

      return false;
    } else if (Address === "") {
      sweetalert("Error", "Please enter address", "error");
      return false;
    } else if (!isNaN(Address)) {
      sweetalert("Error", "Please enter valid Address", "error");
      return false;
    } else if (Role === "") {
      sweetalert("Error", "Please select role", "error");
      return false;
    }
    // data();
    finduser();
   
  };

  // 
  const addNewUser = async () => {
    const newuser = {
      name: Name,
      mobile: Mobile,
      email: Email,
      password: Pass,
      address: Address,
      status: status,
      roleId: Role,

    };
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, Email, Pass);
      await sendEmailVerification(userCredential.user);

      await axios.post("http://localhost:8080/api/registerUser", newuser);
      // toast.success(" Email is send Success plz verify it ");
      sweetalert("success", "You have registered successfully. Please check your email for verification.", "success");
      
    } catch (error) {
      sweetalert("Error", error.message, "error");
    }
  };
  

  const finduser = async () => {
    console.log("method called find user()");
    const user = { email: Email };
    const response = await axios.post("http://localhost:8080/api/checkEmail", user);
    console.log(response.data);
    if (response.data === null || response.data === "") {
      addNewUser();
    } else {
      sweetalert("Error", "Email already used", "error");
    }
  };

  const redirectlogin = () => {
    window.location.href = "/login";
  };

  const redirectreg = () => {
    window.location.href = "/signup";
  };

  return (
    <div className="main1 ">
      <div className=" pb-0">
        <div class="container ">
          <div class="row ">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div class="">
                <div class=" px-5 pt-5 pb-1 mt-5 login">
                  <h5 class="card-title text-center mb-3 fw-bold ">
                    Sign Up
                  </h5>
                  <form >
                  {/* <div class="mb-3 rdo radio-buttons">
                      <h6 class="reg">SignUp as</h6>
                      <input
                        className="rdo"
                        type="radio"
                        value="2"
                        name="role"
                        onChange={(e) => {
                          setRole(e.target.value);
                        }}
                      />{" "}
                      Service Provider
                      <input
                        className="rdo"
                        type="radio"
                        value="3"
                        name="role"
                        onChange={(e) => {
                          setRole(e.target.value);
                        }}
                      />{" "}
                      User
                    </div> */}
                    <div class="mb-4">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Enter your name"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                      <p id="name1"></p>
                    </div>
                    <div class="mb-4">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Enter mobile number"
                        onChange={(e) => {
                          SetMobile(e.target.value);
                        }}
                      />
                      <p id="mobileno1"></p>
                    </div>{" "}
                    <div class="mb-4">
                      <input
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Enter email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                      <p id="email1"></p>
                    </div>{" "}
                    <div class="mb-4">
                      <input
                        type="password"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Enter password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                      <p id="pwd1"></p>
                    </div>{" "}
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Enter address"
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                      />
                      <p id="city1"></p>
                    </div>
                   
                    <ToastContainer/>
                    <div class="d-grid ">
                      <a
                        class="btn text-light navBtnLogin btn-outline-success  text-uppercase "
                        type="button"
                        onClick={validate}
                      >
                        Sign Up
                      </a>

                      <a href="/login">Already have an account? Sign in </a>
                    </div>
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
export default UserSignUp;
