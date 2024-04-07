// import React, { useState } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function Logins() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const findUser = async () => {
//     const user = { email, password };

//     try {
//       const response = await axios.post("http://13.48.25.89:8080/api/login", user);
      
//       if (!response.data || response.data === "") {
//         toast.error("Invalid credentials");
//       } else {
//         const { roleId, status, user_id, name } = response.data;

//         if (roleId === 2) { // Service Provider role
//           if (status === "Active") {
//             localStorage.setItem("role", roleId);
//             localStorage.setItem("userid", user_id);
//             sessionStorage.setItem("name", name);
//             window.location.href = "/serviceproviderhome";
//           } else {
//             toast.error("You are temporarily blocked! Please contact admin");
//           }
//         } else {
//           toast.error("You do not have permission to access this page");
//         }
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       toast.error("An error occurred. Please try again later");
//     }
//   };

//   return (
//     <div className="main">
//       <div className="container">
//         <div className="row">
//           <div className="col-sm-9 col-md-7 col-lg-5 mx-auto my-0">
//             <div className="p-4 p-sm-5 mt-5 login">
//               <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
//               <form>
//                 <div className="mb-4">
//                   <label>Email address</label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="floatingInput"
//                     placeholder="name@example.com"
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label>Password</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="floatingPassword"
//                     placeholder="Password"
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </div>
//                 <ToastContainer />
//                 <div className="d-grid">
//                   <button
//                     className="btn navBtnLogin btn-outline-success text-light text-uppercase fw-bold"
//                     type="button"
//                     onClick={findUser}
//                   >
//                     Sign in
//                   </button>
//                 </div>
//                 <a href="signup">New to Homely? Create an account.</a>
//                 <h6 className="mt-4">
//                   <a href="/forgot_password">Forgot Password?</a>
//                 </h6>
//                 <hr className="my-4" />
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Logins;



import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';

function Login1() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const findUser = async () => {
    const serviceprovider = { email, password };

    try {
      const response = await axios.post("http://13.48.25.89:8080/api/splogin", serviceprovider);
      
      if (!response.data || response.data === "") {
        toast.error("Invalid credentials");
      } else {
        const { roleId, status,serviceprovider_id, name } = response.data;

         // if (roleId === 2) {  }// Service Provider role
          if (status === "Active") {
            // localStorage.setItem("role", roleId);
          //  localStorage.setItem("serviceproviderid", serviceprovider_id);
            sessionStorage.setItem("name", name);
            window.location.href = "/serviceproviderhome";
          } else {
            swal("Oops!", "You are temporarily blocked! Please contact admin", "error");
          }
        // } else {
        //   swal("Oops!", "You do not have permission to access this page", "error");
       
       }
    } catch (error) {
      console.error('Error logging in:', error);
      toast.error("An error occurred. Please try again later");
    }
  };

  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto my-0">
            <div className="p-4 p-sm-5 mt-5 login">
              <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
              <form>
                <div className="mb-4">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <ToastContainer />
                <div className="d-grid">
                  <button
                    className="btn navBtnLogin btn-outline-success text-light text-uppercase fw-bold"
                    type="button"
                    onClick={findUser}
                  >
                    Sign in
                  </button>
                </div>
                <a href="signup">New to Homely? Create an account.</a>
                <h6 className="mt-4">
                  <a href="/forgot_password">Forgot Password?</a>
                </h6>
                <hr className="my-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login1;