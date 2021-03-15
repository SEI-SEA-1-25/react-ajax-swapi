import { BrowserRouter, Route, Link, Switch } from 'react-router'
import Starships from './components/Starships'
import StarshipPage from './components/StarshipPage'
import './App.css'

function App() {
  return (
    <div>
      <Router >
        <header>
          <h2>SWAPI</h2>

        <nav>
          <Link className="App-link" to="/starships">Starships</Link>
        </nav>
        </header>

        <main className="App">
          <Switch>
            <Route exact path="/starships" component={Starships} />

            <Route exact path="/starships/:ship" component={StarshipPage} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}
  
export default App;
