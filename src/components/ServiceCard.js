
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// // import { ToastContainer, toast } from 'react-toastify';
// import "bootstrap/dist/js/bootstrap.min.js";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import sweetalert from "sweetalert";
// import ele from '../images/Electrician.jpg';
// import mec from '../images/Mechanic.jpg';
// import plu from '../images/Plumber1.jpg';
// import doc from '../images/doctor.jpg';
// import gar from '../images/gardener1.jpg';
// import Hmcl from '../images/homecleaner.jpg';
// import winc from '../images/room.jpeg';
// import '../styles/servicecard.css';

// function ServiceCard() {
//   const [services, setServices] = useState([
//     { id: 1, name: 'Electrician', price: 200, image: ele, defaultDescription: 'Electricity problem description' },
//     { id: 2, name: 'Mechanic', price: 200, image: mec, defaultDescription: 'Vehicle problem description' },
//     { id: 3, name: 'Plumber', price: 300, image: plu, defaultDescription: 'Plumbing problem description' },
//     { id: 4, name: 'Gardener', price: 100, image: gar, defaultDescription: 'Gardening problem description' },
//     { id: 5, name: 'Home Cleaner', price: 400, image: Hmcl, defaultDescription: 'Home cleaning problem description' },
//     { id: 6, name: 'General physician', price: 500, image: doc, defaultDescription: 'Health problem description' },
//     { id: 7, name: 'Window Cleaner', price: 150, image: winc, defaultDescription: 'Window cleaning problem description' },
//   ]);

//   const [cart, setCart] = useState([]);
//   const [confirmService, setConfirmService] = useState(null);
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedTime, setSelectedTime] = useState('');
//   const [totalCost, setTotalCost] = useState(0);
//   const [problemDescription, setProblemDescription] = useState('');
//   const [Address,setAddress]=useState('');
//   const base_url ="http://localhost:8080/addservices"

//   const handleBookNow = (service) => {
//     setConfirmService(service);
//     setSelectedDate(''); // Clear selected date
//     setSelectedTime(''); // Clear selected time
//     setProblemDescription(service.defaultDescription); // Set default description for the selected service
//   };
      
//   const handleConfirmService = () => {
//     if (!selectedDate || !selectedTime || !problemDescription) {
//       alert('Please select a date, time, and provide a problem description.');
//       return;
//     }
//     const bookedService = {
//       ...confirmService,
//       date: selectedDate,
//       time: selectedTime,
//       problemDescription: problemDescription,
//       Address : Address,
//     };
//     setCart([...cart, bookedService]);
//     setConfirmService(null);
//     setSelectedDate(''); // Clear selected date
//     setSelectedTime(''); // Clear selected time
//     setProblemDescription(''); // Clear problem description
//     setAddress('');
//   };

//   const handleDeleteService = (service) => {
//     const updatedCart = cart.filter((item) => item.id !== service.id);
//     setCart(updatedCart);
//   };

//   const collectData = async () => {
//     try {
      
  
//       const data1 = cart.map((item) => ({
//         dateTime: `${item.date} ${item.time}`,
//         problemDescription: item.problemDescription,
//         totalPrice: item.price,
//         userName: sessionStorage.getItem("name"),
//         service: item.name,
//         booking_status:"Not confirm",
//         address:item.Address,
//       }));
//       console.log(data1);
  
//       const response = await axios.post(`${base_url}`, data1, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       const loadScript = (src) =>
//       {
//         return new Promise((resovle) => {
//           const script = document.createElement("script");
//           script.src =src;

//           script.onload=() =>
//           {
//             resovle(true);
//           }
//           script.onerror=()=>
//           {
//             resovle(false);
//           }
//           document.appendChild(script);
//         })
//       }
//       const displayRazorpay = async(amount)=>
//       {
//         const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

//         if (!res) {
//           sweetalert("error", "You are offline...", "error");
//           return
//         }
//         const options = {
//           "key": "rzp_test_tsrsoRU1sBXN1P", // Enter the Key ID generated from the Dashboard
//           "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//           "currency": "INR",
//           "name": "Homely services ", //your business name
//           "description": "Test Transaction",
//           "image": "https://example.com/your_logo",
//           // "order_id": "order_NurNjn9mq5iSYl", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//           handler: function (response){
//               alert(response.razorpay_payment_id);
//               alert(response.razorpay_order_id);
//               alert(response.razorpay_signature);
//               sweetalert("success", "Payment is done successfully...", "success");
//           },
//           "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
//               "name": "Atharv Patil", //your customer's name
//               "email": "gaurav.kumar@example.com", 
//               "contact": "9022395724"  //Provide the customer's phone number for better conversion rates 
//           },
//           "notes": {
//               "address": "Razorpay Corporate Office"
//           },
//           "theme": {
//               "color": "#3399cc"
//           }
//       };
//        const paymentobject = new window.Razorpay(options);
//        paymentobject.open()
  
//       }

      

  
//       console.log(response);
//       sweetalert("success", "Booking confirmed successfully...", "success");
//       <Link to="/payment">
//             <button>Pay Now</button>
//           </Link>
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         console.error("Axios error:", error.response);
//         const errorMessage = error.response?.data?.message || "An error occurred";
//         sweetalert("Error","Error adding data:", errorMessage);
//       } else {
//         console.error("Error sending data:", error);
//         toast.error("Error adding data");
//       }
//     }
//   };
//   useEffect(() => {
//     const newTotalCost = cart.reduce((total, item) => total + item.price, 0);
//     setTotalCost(newTotalCost);
//   }, [cart]);

//   return (
//     <div className="App">
//       <h1>Services</h1>
//       <div className="service-list">
//         {services.map((service) => (
//           <div key={service.id} className="service-card">
//             <img
//               src={service.image}
//               alt={service.name}
//               className="service-image"
//             />
//             <h3>{service.name}</h3>
//             <p>Price: Rs.{service.price}</p>
//             {confirmService && confirmService.id === service.id ? (
//               <div>
//                 <textarea
//                   placeholder="Describe your problem..."
//                   value={problemDescription}
//                   onChange={(e) => setProblemDescription(e.target.value)}
//                 ></textarea>
//                 <div>
//                   <label>Select Date:</label>
//                   <input
//                     type="date"
//                     value={selectedDate}
//                     min={new Date().toISOString().split('T')[0]}
//                     onChange={(e) => setSelectedDate(e.target.value)}
//                   />
//                 </div>
//                 <div>
//                   <label>Select Time:</label>
//                   <input
//                     type="time"
//                     value={selectedTime}
//                     onChange={(e) => setSelectedTime(e.target.value)}
//                   />
//                 </div>
//                 <div>
//                   {/* <label>Select Address:</label>
//                   <input
//                     type="text"
//                     value={setAddress}
//                     onChange={(e) => setAddress(e.target.value)}
//                   /> */}
//                 </div>
//                 <button onClick={handleConfirmService}>Confirm</button>
//                 <button onClick={() => setConfirmService(null)}>Cancel</button>
//               </div>
//             ) : (
//               <button onClick={() => handleBookNow(service)}>Book Now</button>
//             )}
//           </div>
//         ))}
//       </div>
//       <div className="cart">
//         <h2>Cart</h2>
//         <ul>
//           {cart.map((item) => (
//             <li key={item.id}>
//               {item.name} - Rs{item.price} <br />
//               Date: {item.date} | Time: {item.time} <br />
//               Problem Description: {item.problemDescription}
//               <button onClick={() => handleDeleteService(item)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//         <p>Total Cost: Rs.{totalCost}</p>
//         <ToastContainer/>
//         <div>
          
//           <Link to="/payment">
//           <button onClick={collectData} totalCost={totalCost}>Confirm Booking</button>
//           </Link>
//           <button onClick={displayRazorpay}>pay</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ServiceCard;

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import "bootstrap/dist/js/bootstrap.min.js";
// import 'react-toastify/dist/ReactToastify.css';
// import sweetalert from "sweetalert";
// import ele from '../images/Electrician.jpg';
// import mec from '../images/Mechanic.jpg';
// import plu from '../images/Plumber1.jpg';
// import doc from '../images/doctor.jpg';
// import gar from '../images/gardener1.jpg';
// import Hmcl from '../images/homecleaner.jpg';
// import winc from '../images/room.jpeg';
// import '../styles/servicecard.css';

// function ServiceCard(props) {
//   const [services, setServices] = useState([
//     { id: 1, name: 'Electrician', price: 200, image: ele, defaultDescription: 'Electricity problem description' },
//     { id: 2, name: 'Mechanic', price: 200, image: mec, defaultDescription: 'Vehicle problem description' },
//     { id: 3, name: 'Plumber', price: 300, image: plu, defaultDescription: 'Plumbing problem description' },
//     { id: 4, name: 'Gardener', price: 100, image: gar, defaultDescription: 'Gardening problem description' },
//     { id: 5, name: 'Home Cleaner', price: 400, image: Hmcl, defaultDescription: 'Home cleaning problem description' },
//     { id: 6, name: 'General physician', price: 500, image: doc, defaultDescription: 'Health problem description' },
//     { id: 7, name: 'Window Cleaner', price: 150, image: winc, defaultDescription: 'Window cleaning problem description' },
//   ]);

//   const [cart, setCart] = useState([]);
//   const [confirmService, setConfirmService] = useState(null);
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedTime, setSelectedTime] = useState('');
//   const [totalCost, setTotalCost] = useState(0);
//   const [problemDescription, setProblemDescription] = useState('');
//   const [Address,setAddress]=useState('');
//   const base_url ="http://localhost:8080/addservices"

//   const handleBookNow = (service) => {
//     setConfirmService(service);
//     setSelectedDate(''); // Clear selected date
//     setSelectedTime(''); // Clear selected time
//     setProblemDescription(service.defaultDescription); // Set default description for the selected service
//   };
      
//   const handleConfirmService = async () => {
//     if (!selectedDate || !selectedTime || !problemDescription) {
//       alert('Please select a date, time, and provide a problem description.');
//       return;
//     }
//     const bookedService = {
//       ...confirmService,
//       date: selectedDate,
//       time: selectedTime,
//       problemDescription: problemDescription,
//       Address : Address,
//     };
//     setCart([...cart, bookedService]);
//     setConfirmService(null);
//     setSelectedDate(''); // Clear selected date
//     setSelectedTime(''); // Clear selected time
//     setProblemDescription(''); // Clear problem description
//     setAddress('');

//     // await collectData(); // Call collectData to save the booking
//     // displayRazorpay(); // Call displayRazorpay to initiate payment
//     // Redirect to payment page programmatically
//     // window.location.href = "/payment";
//   };

//   const handleDeleteService = (service) => {
//     const updatedCart = cart.filter((item) => item.id !== service.id);
//     setCart(updatedCart);
//   };

//   const collectData = async () => {
//     try {
//       const data1 = cart.map((item) => ({
//         dateTime: `${item.date} ${item.time}`,
//         problemDescription: item.problemDescription,
//         totalPrice: item.price,
//         userName: sessionStorage.getItem("name"),
//         service: item.name,
//         booking_status:"Not confirm",
//         address:item.Address,
//       }));

//       const response = await axios.post(`${base_url}`, data1, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       console.log(response);
//       sweetalert("success", "Booking confirmed successfully...", "success");
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         console.error("Axios error:", error.response);
//         const errorMessage = error.response?.data?.message || "An error occurred";
//         sweetalert("Error","Error adding data:", errorMessage);
//       } else {
//         console.error("Error sending data:", error);
//         toast.error("Error adding data");
//       }
//     }
//     sessionStorage.setItem('totalCost', totalCost);
//   };

//   const loadScript = (src) => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = src;

//       script.onload = () => {
//         resolve(true);
//       };
//       script.onerror = () => {
//         resolve(false);
//       };
//       document.head.appendChild(script);
//     });
//   };

//   const displayRazorpay = async () => {
//     const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

//     if (!res) {
//       sweetalert("error", "You are offline...", "error");
//       return;
//     }

//     const options = {
//       "key": "rzp_test_tsrsoRU1sBXN1P",
//       "amount": 1000,
//       "currency": "INR",
//       "name": "Homely services",
//       "description": "Service payment",
//       "image": "https://example.com/your_logo",
//       "handler": function (response){
//           alert(" payment id - "+response.razorpay_payment_id);
//           // alert(response.razorpay_order_id);
//           // alert(response.razorpay_signature);
//           sweetalert("success", "Payment is done successfully...", "success");
//       },
//       "prefill": {
//           "name": "Atharv Patil",
//           "email": "gaurav.kumar@example.com",
//           "contact": "9022395724"
//       },
//       "theme": {
//           "color": "#3399cc"
//       }
//     };

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   };

//   useEffect(() => {
//     const newTotalCost = cart.reduce((total, item) => total + item.price, 0);
//     setTotalCost(newTotalCost);
//   }, [cart]);

//   return (
//     <div className="App">
//       <h1>Services</h1>
//       <div className="service-list">
//         {services.map((service) => (
//           <div key={service.id} className="service-card">
//             <img
//               src={service.image}
//               alt={service.name}
//               className="service-image"
//             />
//             <h3>{service.name}</h3>
//             <p>Price: Rs.{service.price}</p>
//             {confirmService && confirmService.id === service.id ? (
//               <div>
//                 <textarea
//                   placeholder="Describe your problem..."
//                   value={problemDescription}
//                   onChange={(e) => setProblemDescription(e.target.value)}
//                 ></textarea>
//                 <div>
//                   <label>Select Date:</label>
//                   <input
//                     type="date"
//                     value={selectedDate}
//                     min={new Date().toISOString().split('T')[0]}
//                     onChange={(e) => setSelectedDate(e.target.value)}
//                   />
//                 </div>
//                 <div>
//                   <label>Select Time:</label>
//                   <input
//                     type="time"
//                     value={selectedTime}
//                     onChange={(e) => setSelectedTime(e.target.value)}
//                   />
//                 </div>
//                 <button onClick={handleConfirmService}>Confirm</button>
//                 <button onClick={() => setConfirmService(null)}>Cancel</button>
//               </div>
//             ) : (
//               <button onClick={() => handleBookNow(service)}>Book Now</button>
//             )}
//           </div>
//         ))}
//       </div>
//       <div className="cart">
//         <h2>Cart</h2>
//         <ul>
//           {cart.map((item) => (
//             <li key={item.id}>
//               {item.name} - Rs{item.price} <br />
//               Date: {item.date} | Time: {item.time} <br />
//               Problem Description: {item.problemDescription}
//               <button onClick={() => handleDeleteService(item)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//         <p>Total Cost: Rs.{totalCost}</p>
//         <ToastContainer/>
//         <div>
//           <button onClick={collectData} totalCost={totalCost}>Confirm Booking</button>
//           {/* <button onClick={displayRazorpay}>PAY</button> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ServiceCard;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import sweetalert from "sweetalert";
import ele from '../images/Electrician.jpg';
import mec from '../images/Mechanic.jpg';
import plu from '../images/Plumber1.jpg';
import doc from '../images/doctor.jpg';
import gar from '../images/gardener1.jpg';
import Hmcl from '../images/homecleaner.jpg';
import winc from '../images/room.jpeg';
import '../styles/servicecard.css';

function ServiceCard(props) {
  const [services, setServices] = useState([
    { id: 1, name: 'Electrician', price: 200, image: ele, defaultDescription: 'Electricity problem description' },
    { id: 2, name: 'Mechanic', price: 200, image: mec, defaultDescription: 'Vehicle problem description' },
    { id: 3, name: 'Plumber', price: 300, image: plu, defaultDescription: 'Plumbing problem description' },
    { id: 4, name: 'Gardener', price: 100, image: gar, defaultDescription: 'Gardening problem description' },
    { id: 5, name: 'Home Cleaner', price: 400, image: Hmcl, defaultDescription: 'Home cleaning problem description' },
    { id: 6, name: 'General physician', price: 500, image: doc, defaultDescription: 'Health problem description' },
    { id: 7, name: 'Window Cleaner', price: 150, image: winc, defaultDescription: 'Window cleaning problem description' },
  ]);

  const [cart, setCart] = useState([]);
  const [confirmService, setConfirmService] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [totalCost, setTotalCost] = useState(0);
  const [problemDescription, setProblemDescription] = useState('');
  const [Address,setAddress]=useState('');
  const base_url ="http://localhost:8080/addservices"

  const handleBookNow = (service) => {
    setConfirmService(service);
    setSelectedDate(''); // Clear selected date
    setSelectedTime(''); // Clear selected time
    setProblemDescription(service.defaultDescription); // Set default description for the selected service
  };
      
  const handleConfirmService = async () => {
    if (!selectedDate || !selectedTime || !problemDescription) {
      alert('Please select a date, time, and provide a problem description.');
      return;
    }
    const bookedService = {
      ...confirmService,
      date: selectedDate,
      time: selectedTime,
      problemDescription: problemDescription,
      Address : Address,
    };
    setCart([...cart, bookedService]);
    setConfirmService(null);
    setSelectedDate(''); // Clear selected date
    setSelectedTime(''); // Clear selected time
    setProblemDescription(''); // Clear problem description
    setAddress('');

    // await collectData(); // Call collectData to save the booking
    // displayRazorpay(); // Call displayRazorpay to initiate payment
    // Redirect to payment page programmatically
    // window.location.href = "/payment";
  };

  const handleDeleteService = (service) => {
    const updatedCart = cart.filter((item) => item.id !== service.id);
    setCart(updatedCart);
  };

  const collectData = async () => {
    try {
      const data1 = cart.map((item) => ({
        dateTime: `${item.date} ${item.time}`,
        problemDescription: item.problemDescription,
        totalPrice: item.price,
        userName: sessionStorage.getItem("name"),
        service: item.name,
        booking_status:"Not confirm",
        address:item.Address,
      }));

      const response = await axios.post(`${base_url}`, data1, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response);
      sweetalert("success", "Booking confirmed successfully...", "success");

      // Redirect to the payment page
      window.location.href = "/payment";
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response);
        const errorMessage = error.response?.data?.message || "An error occurred";
        sweetalert("Error","Error adding data:", errorMessage);
      } else {
        console.error("Error sending data:", error);
        toast.error("Error adding data");
      }
    }
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.head.appendChild(script);
    });
  };

  useEffect(() => {
    const newTotalCost = cart.reduce((total, item) => total + item.price, 0);
    setTotalCost(newTotalCost);
  }, [cart]);

  // Store totalCost in session storage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('totalCost', totalCost.toString());
  }, [totalCost]);

  return (
    <div className="App">
      <h1>Services</h1>
      <div className="service-list">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img
              src={service.image}
              alt={service.name}
              className="service-image"
            />
            <h3>{service.name}</h3>
            <p>Price: Rs.{service.price}</p>
            {confirmService && confirmService.id === service.id ? (
              <div>
                <textarea
                  placeholder="Describe your problem..."
                  value={problemDescription}
                  onChange={(e) => setProblemDescription(e.target.value)}
                ></textarea>
                <div>
                  <label>Select Date:</label>
                  <input
                    type="date"
                    value={selectedDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
                <div>
                  <label>Select Time:</label>
                  <input
                    type="time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                  />
                </div>
                <button onClick={handleConfirmService}>Confirm</button>
                <button onClick={() => setConfirmService(null)}>Cancel</button>
              </div>
            ) : (
              <button onClick={() => handleBookNow(service)}>Book Now</button>
            )}
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - Rs{item.price} <br />
              Date: {item.date} | Time: {item.time} <br />
              Problem Description: {item.problemDescription}
              <button onClick={() => handleDeleteService(item)}>Delete</button>
            </li>
          ))}
        </ul>
        <p>Total Cost: Rs.{totalCost}</p>
        <ToastContainer/>
        <div>
          <button onClick={collectData}>Confirm Booking</button>
          {/* <button onClick={displayRazorpay}>PAY</button> */}
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;


