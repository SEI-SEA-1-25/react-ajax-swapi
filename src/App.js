import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Starships from './components/pages/Starships'
import StarshipPage from './components/pages/StarshipPage'

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h2>SWAPI</h2>
          <nav>
          <Link 
                to='/starships'
            >Starships</Link>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path='/starships' component={Starships} />
            <Route path='/starship' render={({location}) => 
                <StarshipPage location={location}/>
            }/>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
