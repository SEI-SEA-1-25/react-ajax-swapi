import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import StarshipPage from './components/pages/StarshipPage'

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Route exact path='/' component={Home} />
          <Route path='/starship' render={({location}) => 
              <StarshipPage location={location}/>
          }/>
        </main>
      </Router>
    </div>
  );
}

export default App;
