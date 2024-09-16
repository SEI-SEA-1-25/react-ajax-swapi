import React, {useEffect, useState } from 'react';

//Declaring Variables
const Ship_API = 'https://swapi.dev/api/starships/';


function Starship(props) {
    const [ship, setShip ] = useState([]);

    useEffect(() => {
        try{

            fetch(Ship_API)
            .then((res)=> res.json())
            .then((data) => {
                setShip(data.results);
            });

        } catch (err) {
            console.log(err);

        }
        
        }, []);

        const shiip = ship.map((ele)=> {
            console.log(ele.name) //MAP TO A COMPONENT
        })

    return(
        <div>
            <div>
                {shiip}
            </div>
        </div>
    );
}

export default Starship;