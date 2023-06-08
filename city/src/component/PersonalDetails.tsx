import React from 'react';
import logo from './Tuti.jpeg';
import "./PersonalDetails.css"

const PersonalDetails = () => {
    const x = 0;
    return(
        <div className='div'>
        <div className ="nofar"></div>
        <p className="headline">Welcome Nofar!</p>
        <img src={logo} alt="Logo" className="rounded-image" />
        <p className='Tscore'>Total coins: 100</p>
        <p className='Ascore'>Available coins: 50</p>
        {/* <image></image>
        <button>the queen</button>
        <div>{x}</div> */}
        </div>
    )
}

export default PersonalDetails;