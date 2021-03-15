import { BrowserRouter, Route, Switch } from 'react-router-dom'
import StarshipPage from './components/StarshipPage'
import Home from './components/Home'

const App = () => {
  return(
    <div>
      <BrowserRouter>
            <Route exact path="/" render={Home} />
            <Route 
              path="/starship" 
              render={({location}) => <StarshipPage location={location}/> 
            }/>
      </BrowserRouter>
  </div>
  )
}



export default App