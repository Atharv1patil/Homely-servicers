import React from 'react';
import img6 from '../images/cleaner.jpg'
import img7 from '../images/windowcleaner.jpg';
const CleanerList = () => {
  const cleaners = [
    {
      id: 1,
      name: 'Home Cleaner',
      price:'400 Rs.',
      image: img6,
    },
    {
      id: 2,
      name: 'Window Cleaner',
      price:'150 Rs.',
      image: img7,
    }
   
    
    
  ];

  return (
    <div className="container mt-4">
    <h2>Cleaner List</h2>
    <ul className="list-group mt-3">
      {cleaners.map((cleaner) => (
        <li key={cleaner.id} className="list-group-item d-flex">
          <div className="me-3">
            <img src={cleaner.image} alt={cleaner.name} className="img-fluid" style={{ maxWidth: '100px' }} />
          </div>
          <div>
            <h4>{cleaner.name}</h4>
            <p>Price: {cleaner.price}</p>
            <a
              className="nav-link"
              aria-current="page"
              href={`/service-providers/${cleaner.id}`} // Use the id in the href
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

export default CleanerList;