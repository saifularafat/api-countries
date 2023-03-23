import React from 'react';
import './Country.css'
const Country = (props) => {
    console.log(props?.country?.flags)
    // const {} = props?.country;
    // const {name:{common}} = props?.country;
    // console.log(props.country.name.common);
    const {name:{common},flags:{png}, area, region, population, idd:{root}} = props.country
    return (
            <div className='country'>
                  <img className='img' src={png} alt=""/>
                <h1>Name: <span className='country-name'>
                    {common}</span>
                </h1>
                <h3>Area: {area}</h3>
                <h3>Region: {region}</h3>
                <h4>Population: {population}</h4>
                <p>Idd: {root}</p>
            </div>
    );
};

export default Country;