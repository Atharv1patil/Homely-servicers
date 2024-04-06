

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import '../styles/Viewbooking.css'; // Import CSS file for styling

// function ViewUser() {
//   const [bookings, setBookings] = useState([]);
//   const userNameFromHeader = sessionStorage.getItem("name")
//   useEffect(() => {
//     // Function to fetch bookings from backend
//     const fetchBookings = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/bookings/${userNameFromHeader}`);
//         // Filter out bookings where booking_status is not null
//         const filteredBookings = response.data.filter(booking => booking.booking_status !== null);
//         setBookings(filteredBookings);
//       } catch (error) {
//         console.error('Error fetching bookings:', error);
//       }
//     };

//     fetchBookings(); // Call the function to fetch bookings when component mounts
//   }, [userNameFromHeader]); // Added userNameFromHeader to dependency array

//   return (
//     <div>
//       {/* <h1>Bookings</h1> */}
//       <div className="bookings-list">
//         {bookings.map(booking => (
//           <div key={booking.id} className="booking-item">
//             <p><strong>Booking:</strong> {booking.id}</p>
//             <p className={booking.booking_status === 'Not confirm' ? 'not-confirmed' : 'confirmed'}>
//               <strong>Status:</strong> {booking.booking_status === 'Not confirm' ? 'Not confirmed' : `Confirmed and service provider name is: ${booking.booking_status}`}
//             </p>
//             <p><strong>Service:</strong> {booking.service}</p>
//             <p><strong>Date & Time:</strong> {booking.dateTime !== null ? booking.dateTime : 'Not specified'}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ViewUser;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/Viewbooking.css';

function ViewUser() {
  const [bookings, setBookings] = useState([]);
  const [hoveredBooking, setHoveredBooking] = useState(null);
  const userNameFromHeader = sessionStorage.getItem("name");
  
  useEffect(() => {
    // Function to fetch bookings from backend
    const fetchBookings = async () => {
      try {
           let name_1 = userNameFromHeader.trim();
        const response = await axios.get(`http://localhost:8080/bookings/${userNameFromHeader}`);
        console.log(response);
        console.log(userNameFromHeader);
        // Filter out bookings where booking_status is not null
        const filteredBookings = response.data.filter(booking => booking.booking_status !== null);
        setBookings(filteredBookings);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
      axios.get(`http://localhost:8080/bookings/${userNameFromHeader}`).then(
        (Response)=>
        {
          console.log(Response)
        },
        (Error) =>
        {
          console.error(Error)
        }
      )
    };

    fetchBookings(); // Call the function to fetch bookings when component mounts
  }, [userNameFromHeader]); // Added userNameFromHeader to dependency array

  const handleMouseEnter = (booking) => {
    setHoveredBooking(booking);
  };

  const handleMouseLeave = () => {
    setHoveredBooking(null);
  };

  return (
    <div>
      {/* <h1>Bookings</h1> */}
      <div className="bookings-list">
        {bookings.map(booking => (
          <div 
            key={booking.id} 
            className="booking-item"
            onMouseEnter={() => handleMouseEnter(booking)}
            onMouseLeave={handleMouseLeave}
          >
            <p><strong>Booking:</strong> {booking.id}</p>
            <p className={booking.booking_status === 'Not confirm' ? 'not-confirmed' : 'confirmed'}>
              <strong>Status:</strong> {booking.booking_status === 'Not confirm' ? 'Not confirmed' : `Confirmed and service provider name is: `}
              <strong>{booking.booking_status}</strong>
            </p>
            <p><strong>Service:</strong> {booking.service}</p>
            <p><strong>Date & Time:</strong> {booking.dateTime !== null ? booking.dateTime : 'Not specified'}</p>
            {hoveredBooking === booking && (
              <p><strong>Problem Description:</strong> {booking.problemDescription}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewUser;


