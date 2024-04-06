

import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import sweetalert from "sweetalert";
import emailjs from 'emailjs-com';
import "../styles/viewuser.css";

function Booking() {
  const [bookingList, setBookingList] = useState([]);
  const [serviceProviderName, setServiceProviderName] = useState("");

  useEffect(() => {
    getBookings();
  }, []);

  const getBookings = async () => {
    try {
        const response = await axios.get("http://localhost:8080/getbooking");
        const providerDataResponse = await axios.get(`http://localhost:8080/api/services/${sessionStorage.getItem("name")}`);
        const providerData = providerDataResponse.data[0]; // Assuming the data is an array and we take the first element
        
        // Convert specialization based on specific conditions
        let modifiedSpecialization = providerData.specialization;
        if (providerData.specialization === "GeneralPhysician") {
            modifiedSpecialization = "General physician";
        } else if (providerData.specialization === "HomeCleaner") {
            modifiedSpecialization = "Home Cleaner";
        } else if(providerData.specialization ==="WindowCleaner")
        {
           modifiedSpecialization ="Window Cleaner";
        }

        // Trim whitespace from the modified specialization
        const trimmedSpecialization = modifiedSpecialization.trim();

        const simplifiedBookings = response.data
            .filter((booking) => booking.booking_status === "Not confirm")
            .filter((booking) => booking.service === modifiedSpecialization)
            .map((booking) => ({
                booking_id: booking.id,
                service: booking.service,
                user_name: booking.userName,
                dateTime: booking.dateTime,
                problemDescription: booking.problemDescription,
                totalPrice: booking.totalPrice,
                status: booking.booking_status,
                needsConfirmation: true
            }));

        setBookingList(simplifiedBookings);
    } catch (error) {
        console.error("Error fetching bookings: ", error);
    }
};

const confirmBooking = async (bookingId, userName, service, dateTime, problemDescription, totalPrice) => {
    const providerName = prompt("Enter service User name:");
    if (!providerName || !isNaN(providerName)) {
      toast.error("Please enter a valid service provider name.");
      return; 
    }
  
    try {
      await axios.put(`http://localhost:8080/${bookingId}/status?booking_status=${sessionStorage.getItem("name")}`);
        
      const userResponse = await axios.get(`http://localhost:8080/api/email/${providerName}`);
      const userEmail = userResponse.data;
  
      const providerDataResponse = await axios.get(`http://localhost:8080/api/services/${sessionStorage.getItem("name")}`);
      const providerData = providerDataResponse.data[0]; // Accessing the first element of the array
      const { name, mobile,email } = providerData;

      await emailjs.send('service_fncpqes', 'template_2s84m6i', {
        to_email: userEmail,
        from_name:"Homely Service Team Head ",
        userName: userName,
        dateTime: dateTime,
        id: bookingId,
        service: service,
        problemDescription: problemDescription,
        totalPrice: totalPrice,
        serviceProviderName: `${providerData.name}`, // Assuming the name field is available in the response
        serviceProviderContact: `${providerData.mobile}` // Assuming the contact field is available in the response
      }, 'HHI-G_wl_Cedwr-kv');
      
       await emailjs.send('service_fncpqes', 'template_oqklbca', {
        to_email: `${providerData.email}`,
        from_name:"Homely Service Team Head ",
        userName: userName,
        dateTime: dateTime,
        id: bookingId,
        service: service,
        problemDescription: problemDescription,
        totalPrice: totalPrice,
        serviceProviderName: `${providerData.name}`,
        userEmail:userEmail // Assuming the name field is available in the response
      }, 'HHI-G_wl_Cedwr-kv');

      sweetalert("success", "Booking confirmed successfully...", "success");
      setServiceProviderName(providerName);
      
      getBookings();
    } catch (error) {
      console.error("Error confirming booking: ", error);
      toast.error("Error confirming booking. Please try again later.");
    }
  };
  
  return (
    <body className="view">
    <div className="container col-12 viewuser">
      <ToastContainer/>
      <h1 className="text-center text-light">Booking List</h1>
      <table className="table table-striped">
        <thead>
          <tr className="bg-success text-light">
            <th>Booking Id</th>
            <th>User Name</th>
            <th>Service</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookingList.map((booking) => {
            return (
              <tr key={booking.booking_id} className="">
                <td>{booking.booking_id}</td>
                <td>{booking.user_name}</td>
                <td>{booking.service}</td>
                <td>
                  {booking.needsConfirmation ? (
                    <button
                      onClick={() => {
                        confirmBooking(
                          booking.booking_id,
                          booking.user_name,
                          booking.service,
                          booking.dateTime,
                          booking.problemDescription,
                          booking.totalPrice
                        );
                      }}
                      className="btn btn-success mb-4"
                    >
                      Confirm
                    </button>
                  ) : (
                    <span>Confirmed</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </body>
  );
}

export default Booking;
