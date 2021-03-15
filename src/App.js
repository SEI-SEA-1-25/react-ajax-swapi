import Header from './components/Header.jsx'
import Starships from './components/Starships.jsx'
import StarshipLists from './components/StarshipLists.jsx'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {

  const [informations, setInformations] = useState([])

  async function fetchData () {
      const URL = "https://swapi.dev/api/starships/"
      const response = await fetch(URL)
      const json = await response.json()
      const datas = json.results
      setInformations(datas)
  }

  useEffect(() => {
      fetchData()
  }, [])
  
  return (
    <Router>
        <Header />
        <div>
          <Route exact path="/" render={() => {
            return <StarshipLists starshipInfos={informations} />
          }}/>

          <Route path="/starships/:id" render={(props) => {
            return <Starships location={props}/> //{...starshipsInfo} 
          }} />
          
        </div>
    </Router>
  );
}

export default App;