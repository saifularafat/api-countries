import React, { useEffect, useState } from 'react';
import Country from './Country';

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        // <div className='country-name'>
        <div className='country'>
            <h1>Visiting Every Country of the World!!!</h1>
            <h3>Available Countries : {countries.length}</h3>
            <div className='all-country'>
                {
                    countries.map(country => console.log(country.flags.png))
                }
                {
                    countries.map(country => <Country
                        key = {country.cca3}
                        // country = {country}
                        name={country.name.common}
                        population={country.population}
                        region={country.region}
                        area={country.area}
                        flags = {country.flags.png}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;