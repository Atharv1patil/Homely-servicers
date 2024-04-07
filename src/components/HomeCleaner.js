import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServiceProvider from './ServiceProvider';
import '../styles/gardener.css'; // Import your CSS file

const HomeCleaner = ({ specialization }) => {
    const [serviceProviders, setServiceProviders] = useState([]);

    // useEffect(() => {
    //     fetchServiceProviders();
    // }, [specialization]);

    // const fetchServiceProviders = async () => {
    //     try {
    //         const response = await axios.get(`http://13.48.25.89:8080/api/serviceprovider/bySpecialization?specialization=${specialization}`);
    //         console.log(response);
    //         setServiceProviders(response.data);
    //     } catch (error) {
    //         console.error('Error fetching services', error);
    //     }
    //     // console.log(Response.data);
    // };
    useEffect(() => {
        const trimmedSpecialization = specialization.trim();
        fetchServiceProviders(trimmedSpecialization);
    }, [specialization]);
    
    const fetchServiceProviders = async (trimmedSpecialization) => {
        try {
            const response = await axios.get(`http://13.48.25.89:8080/api/serviceprovider/bySpecialization?specialization=HomeCleaner`);
            console.log(response);
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
            <h2>Home cleaners List</h2>
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

export default HomeCleaner;
