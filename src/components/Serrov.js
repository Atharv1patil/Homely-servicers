import axios from 'axios'
import React, { useEffect } from 'react'

function Serrov() {
    useEffect(() => {
        axios.get(`http://13.48.25.89:8080/api/services/${sessionStorage.getItem("name")}`).then(
            (Response) => {
                console.log(Response.data);
                console.log("Name:", Response.data.name);
                console.log("Mobile:", Response.data.mobile);
            },
            (Error) => {
                console.log(Error);
            }
        )
    }, [])

    return (
        <div>Serrov</div>
    )
}

export default Serrov
