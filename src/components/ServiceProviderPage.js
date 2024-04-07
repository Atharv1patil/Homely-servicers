import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServiceProvider from './ServiceProvider';
import '../styles/serviceproviderpage.css'; // Import your CSS file

const GeneralPhysician = () => {
    const [serviceProviders, setServiceProviders] = useState([]);

    useEffect(() => {
        fetchServiceProviders();
    }, []);

    const fetchServiceProviders = async () => {
        try {
            const response = await axios.get(`http://13.48.25.89:8080/api/serviceprovider`);
            setServiceProviders(response.data);
        } catch (error) {
            console.error('Error fetching services', error);
        }
    };

    const handleProviderUpdate = (updatedProvider) => {
        const updatedProviders = serviceProviders.map(provider =>
            provider.id === updatedProvider.id ? updatedProvider : provider
        );
        setServiceProviders(updatedProviders);
    };

    return (
        <div className="service-provider-page">
            <h2>Service Providers</h2>
            <table className="provider-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Specialization</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {serviceProviders.map((provider) => (
                        <ServiceProvider key={provider.id} provider={provider} onUpdate={handleProviderUpdate} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GeneralPhysician;
