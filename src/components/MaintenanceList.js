import React from 'react';
import img3 from '../images/Electrician.jpg';
import img4 from '../images/Mechanic.jpg';
import img5 from '../images/Plumber1.jpg';

const MaintenanceList = () => {
  const maintenances = [
    {
      id: 1,
      name: 'Electrician',
      price:'200 Rs.',
      image: img3,
    },
    {
      id: 2,
      name: 'Mechanic',
      price:'300 Rs.',
      image: img4,
    },
    {
      id: 3,
      name: 'Plumber',
      price:'300 Rs.',
      image: img5,
    },
  ];

  return (
    <div className="container mt-4">
      <h2>Maintenance List</h2>
      <ul className="list-group mt-3">
        {maintenances.map((maintenance) => (
          <li key={maintenance.id} className="list-group-item d-flex">
            <div className="me-3">
              <img src={maintenance.image} alt={maintenance.name} className="img-fluid" style={{ maxWidth: '100px' }} />
            </div>
            <div>
              <h4>{maintenance.name}</h4>
              <p>Price: {maintenance.price}</p>
              <a
                className="nav-link"
                aria-current="page"
                href={`/serviceproviders/${maintenance.id}`} // Use the id in the href
              >
                View Service Providers
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MaintenanceList;
