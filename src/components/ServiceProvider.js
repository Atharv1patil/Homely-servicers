import React, { useState } from 'react';
import axios from 'axios';

const ServiceProvider = ({ provider, onUpdate }) => {
    const [isBooked, setIsBooked] = useState(false);

    const handleBookNow = () => {
      setIsBooked(true);
    };

    return (
        <tr className="service-provider">
            <td>{provider.name}</td>
            <td>{provider.specialization}</td>
            <td>
                {/* <button
                    className="book-button"
                    onClick={handleBookNow}
                    disabled={isBooked}
                >
                    {isBooked ? 'Booked' : 'Book Now'}
                </button> */}
                4/5
            </td>
        </tr>
    );
};

export default ServiceProvider;
