import { useEffect, useState } from "react";
import {link} from <div/>


export default StarshipPages;
import React, { Component } from "react";

   class App extends Component {


      constructor(props) {
         super(props);
         this.state = {
            name: [],
            model: []
         }

   return (
      <div className="App">
      starships.map(starship =>
         <Link
           to={{
             pathname: '/starship',
             state: starship
           }}
           key={starship.name}
         ><Route path='/starship' render={({location}) => 
         <StarshipPage location={location}/>
       }/>
       <Route path='/starship' render={({location}) => 
       <StarshipPage location={location}/>
     }/>
           {{starship.name}}
         </Link>   
      <div/>
   );
   

export default Starship;
