import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/serviceslist.css';

const ServicesList = ({ categoryId }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetchServices();
    }, [categoryId]);

    const fetchServices = async () => {
        try {
            const response = await axios.get(`http://13.48.25.89:8080/api/service/byCategory/${categoryId}`);
            setServices(response.data);
        } catch (error) {
            console.error('Error fetching services', error);
        }
    };

    return (
        <div className="services-container">
            {/* <h1>Services by Category</h1> */}
            <ul className="service-list">
                {services.map((service) => (
                    <li key={service.id} className="service-item">
                        <h2>{service.name}</h2>
                        <p>{service.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServicesList;
