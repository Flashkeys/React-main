import React, { useEffect, useState } from 'react';
import axios from 'axios';



const UseTheFect = () => {

    const [api, setApi] = useState(null)
    useEffect(() => {
        axios.get(`https://restcountries.eu/rest/v2/all`)
            .then(res => {
                setApi(res.data)
            })
    }, [])


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Capital</th>    
                    </tr>
                </thead>
                <tbody>
                    {api ? api.map(country => <tr key={country.numericCode}><td>{country.name}</td><td>{country.capital}</td></tr>) : null}
                    
                </tbody>
            </table>
        </div>
    )
}
export default UseTheFect