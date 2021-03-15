import { Route, BrowserRouter} from 'react-router-dom'
import Header from './components/partials/Header'
import Starships from './components/Starships/Starships'
import StarshipData from './components/Starships/StarshipData'
import People from './components/People/People'
import PeopleData from './components/People/PeopleData'
import Planets from './components/Planets/Planets'
import PlanetData from './components/Planets/PlanetsData'
import Home from './components/Home'


const App = () => {

 


  return (
    <BrowserRouter>

    <div>
      <Header/>
       <main>
        <Route path="/starships" component ={Starships}/>
        <Route path="/starshipData" component ={StarshipData}/>
        <Route path="/People" component ={People}/>
        <Route path="/peopleData" component ={PeopleData}/>
        <Route path="/Planets" component ={Planets}/>
        <Route path="/planetData" component ={PlanetData}/>
        <Route path="/" component ={Home}/>
       
        

       </main>

    

    </div>

    </BrowserRouter>
  )


}

export default App;