// import "bootstrap/dist/js/bootstrap.min.js";
// import { sendPasswordResetEmail } from "firebase/auth";
// import { useState } from "react";
// import sweetalert from "sweetalert";
// import '../styles/login.css';
// function Login() {
//   const [Email, setEmail] = useState("");

//   // const finduser = async () => {
//   //   console.log("method call");
//   //   const user = { email: Email };
//   //   const response = await axios.post("http://localhost:8080/api/forgetPass", user);
//   //   console.log(response.data);
//   //   if (response.data === "success") {
//   //     sweetalert(
//   //       "Success",
//   //       "Your password is sent to your mail please check ",
//   //       "success"
//   //     );
//   //   } else {
//   //     sweetalert("Error", response.data, "error");
//   //   }
//   // };
//   // var mail =Email;
//   const fire =()=>
//   {
    
//     sendPasswordResetEmail(Email).then(() => {
//       sweetalert.success(" the link is send to the email account");
//       console.log('Password reset email sent successfully');
//     })
//     .catch((error) => {
//       sweetalert(" something went wrong ")
//       console.log('Error sending password reset email:', error.message);
//     });
//   }



//   return (
//     <div className="">
//       <div className="main pb-4">
//         <div class="container">
//           <div class="row abc">
//             <div class="col-sm-9 col-md-7 col-lg-5 mx-auto my-0">
//               <div class="">
//                 <div class="p-4 p-sm-5 mt-5 login">
//                   <h5 class="card-title text-center mb-5 fw-light fs-5">
//                     Enter your email id which is registered to Homely App
//                     account you will get password on your email
//                   </h5>
//                   <form>
//                     <div class="mb-4">
//                       <label>Email address</label>

//                       <input
//                         type="email"
//                         class="form-control"
//                         id="floatingInput"
//                         placeholder="name@example.com"
//                         onChange={(e) => {
//                           setEmail(e.target.value);
//                         }}
//                       />
//                     </div>

//                     <div class="d-grid ">
//                       <button
//                         class="btn navBtnLogin btn-outline-success  text-uppercase fw-bold"
//                         type="button"
//                         onClick={fire}
//                       >
//                         Send
//                       </button>
//                     </div>

//                     <hr class="my-4" />
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
// export default Login;

import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import sweetalert from "sweetalert";
import { auth } from "../Firebase";
import '../styles/login.css';

function Login() {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth,email)
      .then(() => {
        sweetalert("Success", "The link is sent to the email account", "success");
        console.log('Password reset email sent successfully');
      })
      .catch((error) => {
        sweetalert("Error", "Something went wrong", "error");
        console.log('Error sending password reset email:', error.message);
      });
  };

  return (
    <div className="">
      <div className="main pb-4">
        <div className="container">
          <div className="row abc">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto my-0">
              <div className="">
                <div className="p-4 p-sm-5 mt-5 login">
                  <h5 className="card-title text-center mb-5 fw-light fs-5">
                    Enter your email id which is registered to Homely App
                    account you will get password on your email
                  </h5>
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
                    <div className="d-grid">
                      <button
                        className="btn navBtnLogin btn-outline-success text-uppercase fw-bold"
                        type="button"
                        onClick={handleResetPassword}
                      >
                        Send
                      </button>
                    </div>
                    <hr className="my-4" />
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

