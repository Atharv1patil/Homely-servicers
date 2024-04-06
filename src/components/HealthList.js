import React from 'react';
import img1 from '../images/doctor.jpg';
const HealthList = () => {
  const doctors = [
    {
      id: 1,
      name: 'General physician',
      price:'500 Rs.',
      image: img1 ,
    }
    

  ];

  return (
    <div className="container mt-4">
      <h2>Doctor List</h2>
      <ul className="list-group mt-3">
        {doctors.map((doctor) => (
          <li key={doctor.id} className="list-group-item d-flex">
            <div className="me-3">
              <img src={doctor.image} alt={doctor.name} className="img-fluid" style={{ maxWidth: '100px' }} />
            </div>
            <div>
              <h4>{doctor.name}</h4>
              <p>Price: {doctor.price}</p>
            
              <a class="nav-link " aria-current="page" href="/generalphysician">
                   view service providers
                  </a>
              
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthList;