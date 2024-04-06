import React from 'react';
import img2 from '../images/gardener1.jpg'
//import img1 from './images/doctor.jpg';

const OutdoorList = () => {
  const outdoors = [
    {
      id: 1,
      name: 'Gardener',
      price:'100 Rs.',
      image: img2,
    }

  ];

  return (
    <div className="container mt-4">
      <h2>Outdoor List</h2>
      <ul className="list-group mt-3">
         {outdoors.map((Gardener) => (
          <li key={Gardener.id} className="list-group-item d-flex">
            <div className="me-3">
              <img src={Gardener.image} alt={Gardener.name} className="img-fluid" style={{ maxWidth: '100px' }} />
            </div>
            <div>
              <h4>{Gardener.name}</h4>
              <p>Price: {Gardener.price}</p>
             
              <a class="nav-link " aria-current="page" href="/gardener">
                   view service providers
                  </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OutdoorList;