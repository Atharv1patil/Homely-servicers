import axios from "axios";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import sweetalert from "sweetalert";
import { auth } from "../Firebase";
import "../styles/signup.css";

function Service_Provider_signup() {
  const [Name, setName] = useState("");
  const [Mobile, SetMobile] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Address, setAddress] = useState("");
  const [Role, setRole] = useState("3");
  const [Specialization, setSpecialization] = useState("");

  const status = "Active";

  const validate = () => {
    var regEx = /^[a-zA-Z\s]+$/;
    if (Name === "") {
      sweetalert("Error", "Please enter Name", "error");
      return false;
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
    } else if (Password === "") {
      sweetalert("Error", "Please enter password", "error");
      return false;
    } else if (Password.length <= 5 || Password.length > Password) {
      sweetalert("Error", "Password must be at least 6 characters", "error");
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
    
    addNewUser();
  };

  const addNewUser = async () => {
    const newUser = {
      name: Name,
      mobile: Mobile,
      email: Email,
      password: Password,
      address: Address,
      status: status,
      specialization: Specialization,
    };
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, Email, Password);
      await sendEmailVerification(userCredential.user);

      await axios.post("http://localhost:8080/api/registerserviceprovider", newUser);
      sweetalert("success", "You have registered successfully. Please check your email for verification.", "success");
    } catch (error) {
      sweetalert("Error", error.message, "error");
    }
  };

  return (
    <div className="main1 ">
      <div className="pb-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="">
                <div className="px-5 pt-5 pb-1 mt-5 login">
                  <h5 className="card-title text-center mb-3 fw-bold ">Sign Up</h5>
                  <form>
                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Enter your name"
                        onChange={(e) => setName(e.target.value)}
                      />
                      <p id="name1"></p>
                    </div>
                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Enter mobile number"
                        onChange={(e) => SetMobile(e.target.value)}
                      />
                      <p id="mobileno1"></p>
                    </div>
                    <div className="mb-4">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <p id="email1"></p>
                    </div>
                    <div className="mb-4">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <p id=
                      "pwd1"></p>
                    </div>
                    <div className="mb-4">
  <select
    className="form-select"
    aria-label="Select Specialization"
    onChange={(e) => setSpecialization(e.target.value)}
  >
    <option value="">Select Specialization</option>
    <option value="Electrician">Electrician</option>
    <option value="Mechanic">Mechanic</option>
    <option value="Plumber">Plumber</option>
    <option value="Gardener">Gardener</option>
    <option value="HomeCleaner">HomeCleaner</option>
    <option value="GeneralPhysician">GeneralPhysician</option>
    <option value="WindowCleaner">WindowCleaner</option>
    {/* Add more options as needed */}
  </select>
  <p id="pwd1"></p>
</div>

                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Enter address"
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      <p id="city1"></p>
                    </div>
                    <div className="d-grid ">
                      <button
                        className="btn text-light navBtnLogin btn-outline-success  text-uppercase"
                        type="button"
                        onClick={validate}
                      >
                        Sign Up
                      </button>
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

export default Service_Provider_signup;




// import axios from "axios";
// import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
// import { useState } from "react";
// import { ToastContainer } from "react-toastify";
// import sweetalert from "sweetalert";
// import { auth } from "../Firebase";
// import "../styles/signup.css";

// function Service_Provider_signup() {
//   const [Name, setName] = useState("");
//   const [Mobile, SetMobile] = useState("");
//   const [Email, setEmail] = useState("");
//   const [Password, setPassword] = useState("");
//   const [Address, setAddress] = useState("");
//   const [Specialization, setSpecialization] = useState("");
//   const status = "Active";
//   const [Role, setRole] = useState("2"); // Role 2 for service provider

//   const validate = () => {
//     var regEx = /^[a-zA-Z\s]+$/;
//     if (Name === "") {
//       sweetalert("Error", "Please enter Name", "error");
//       return false;
//     } else if (!regEx.test(Name)) {
//       sweetalert("Error", "Please enter characters and space only", "error");
//       return false;
//     } else if (Mobile === "") {
//       sweetalert("Error", "Please enter Mobile number", "error");
//       return false;
//     } else if (isNaN(Mobile) || Mobile.length <= 9 || Mobile.length >= 11) {
//       sweetalert("Error", "Please enter valid Mobile number", "error");
//       return false;
//     } else if (Email === "") {
//       sweetalert("Error", "Please enter email", "error");
//       return false;
//     } else if (Email.indexOf("@") <= 0) {
//       sweetalert("Error", "Please enter valid email", "error");
//       return false;
//     } else if (
//       Email.charAt(Email.length - 4) !== "." &&
//       Email.charAt(Email.length - 3) !== "."
//     ) {
//       sweetalert("Error", "Please enter valid email", "error");
//       return false;
//     } else if (Password === "") {
//       sweetalert("Error", "Please enter password", "error");
//       return false;
//     } else if (Password.length <= 5) {
//       sweetalert("Error", "Password must be at least 6 characters", "error");
//       return false;
//     } else if (Address === "") {
//       sweetalert("Error", "Please enter address", "error");
//       return false;
//     } else if (!isNaN(Address)) {
//       sweetalert("Error", "Please enter valid Address", "error");
//       return false;
//     }
    
//     addNewServiceProvider();
//   };

//   const addNewServiceProvider = async () => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, Email, Password);
//       await sendEmailVerification(userCredential.user);

//       const newServiceProvider = {
//         name: Name,
//         mobile: Mobile,
//         email: Email,
//         password: Password,
//         address: Address,
//         status: status,
//         roleId: Role, // Role 2 for service provider
//         specialization: Specialization,
//       };

//       await axios.post("http://localhost:8080/api/registerServiceProvider", newServiceProvider);
//       sweetalert("success", "You have registered successfully. Please check your email for verification.", "success");
//     } catch (error) {
//       sweetalert("Error", error.message, "error");
//     }
//   };

//   return (
//     <div className="main1">
//       <div className="pb-0">
//         <div className="container">
//           <div className="row">
//             <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
//               <div className="">
//                 <div className="px-5 pt-5 pb-1 mt-5 login">
//                   <h5 className="card-title text-center mb-3 fw-bold ">Service Provider Sign Up</h5>
//                   <form>
//                     <div className="mb-4">
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="floatingInput"
//                         placeholder="Enter your name"
//                         onChange={(e) => setName(e.target.value)}
//                       />
//                       <p id="name1"></p>
//                     </div>
//                     <div className="mb-4">
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="floatingInput"
//                         placeholder="Enter mobile number"
//                         onChange={(e) => SetMobile(e.target.value)}
//                       />
//                       <p id="mobileno1"></p>
//                     </div>
//                     <div className="mb-4">
//                       <input
//                         type="email"
//                         className="form-control"
//                         id="floatingInput"
//                         placeholder="Enter email"
//                         onChange={(e) => setEmail(e.target.value)}
//                       />
//                       <p id="email1"></p>
//                     </div>
//                     <div className="mb-4">
//                       <input
//                         type="password"
//                         className="form-control"
//                         id="floatingInput"
//                         placeholder="Enter password"
//                         onChange={(e) => setPassword(e.target.value)}
//                       />
//                       <p id="pwd1"></p>
//                     </div>
//                     <div className="mb-4">
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="floatingInput"
//                         placeholder="Enter specialization"
//                         onChange={(e) => setSpecialization(e.target.value)}
//                       />
//                       <p id="spec"></p>
//                     </div>
//                     <div className="mb-4">
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="floatingInput"
//                         placeholder="Enter address"
//                         onChange={(e) => setAddress(e.target.value)}
//                       />
//                       <p id="city1"></p>
//                     </div>
//                     <div className="d-grid ">
//                       <button
//                         className="btn text-light navBtnLogin btn-outline-success  text-uppercase"
//                         type="button"
//                         onClick={validate}
//                       >
//                         Sign Up
//                       </button>
//                       <a href="/login">Already have an account? Sign in </a>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Service_Provider_signup;
