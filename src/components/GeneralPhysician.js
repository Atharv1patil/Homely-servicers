import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServiceProvider from './ServiceProvider';
import '../styles/gardener.css'; // Import your CSS file

const GeneralPhysician = ({ specialization }) => {
    const [serviceProviders, setServiceProviders] = useState([]);

    useEffect(() => {
        fetchServiceProviders();
    }, [specialization]);

    const fetchServiceProviders = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/serviceprovider/bySpecialization?specialization=GeneralPhysician`);
            setServiceProviders(response.data);
            console.log(response.data);
            console.log(specialization);
        } catch (error) {
            console.error('Error fetching services', error);
        }
    };

    const handleProviderUpdate = (updatedProvider) => {
        const updatedProviders = serviceProviders.map(provider =>
            provider.id === updatedProvider.id ? updatedProvider : provider
        );
        // setServiceProviders(updatedProviders);
    };

    return (
        <div className="service-provider-page">
            <h2>General Physician List</h2>
            <table className="provider-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Specialization</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {serviceProviders.map((provider) => (
                        <ServiceProvider key={provider.id} provider={provider} onUpdate={handleProviderUpdate} />
                        // <ServiceProvider key={provider.id} provider={provider} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GeneralPhysician;
