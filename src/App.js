import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Starships from './components/Starships'
import StarshipPage from './components/StarshipPage'
import './App.css';

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

        </main>
      </Router>
    </div>
  );
}

export default App;
