import react, { useState } from 'react';
import "./css/style.css"

const Tempapp   =   () => {

const[city,setCity] = useState(null);
const [search,setSearch] = useState(null);


    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputfield" 
                    onChange={ (event)=> {

                    }}/>
            
            </div>


            <div className="info">

                <h2 className="location"> 
                <i class="fa-solid fa-street-view"></i> pune   

                </h2>
                <h1 className = "temp"> 
                5.25 cel
                </h1>
                
            <h3 className="tempmin_max"> Min : 5.25 cel | Max : 5.25 cel </h3>   

                </div>

                <div className="wave1"></div>
                <div className="wave2"></div>
                <div className="wave3"></div>

        
                </div>
        </>
    )
}

export default Tempapp;