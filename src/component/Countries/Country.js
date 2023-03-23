import React from 'react';
import './Country.css'
const Country = (props) => {
    // console.log(props)
    // const {area} = props.country;
    // console.log(props.country.name.common);
    // const {name, area, region, population} = props.country
    return (
            <    div className='country'>
                {/* <h3>Area: {area}</h3> */}
                <img className='img' src={props.flags} alt=""/>
                <h1>Name: <span className='country-name'>
                    {props.name}</span>
                </h1>
                <h5>Area: {props.area}</h5>
                <h3>Region: {props.region}</h3>
                <h4>Population: {props.population}</h4>
                <p>Idd: {props.root}</p>
            </div>
    );
};

export default Country;