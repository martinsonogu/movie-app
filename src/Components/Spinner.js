import React from 'react';
import spinner from "./Loading/Hourglass.gif"

const Spinner = () => {
    return(
    <div>
        <img src={spinner} alt="Loading..." 
        style={{width:"200px",
         margin:"auto", 
         display:"block"}}/>
    </div>
)
}

export default Spinner;