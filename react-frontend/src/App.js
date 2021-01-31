import { Route, Link, Switch } from "react-router-dom";
import './App.css';
import Menu from './Components/Menu/Menu.jsx'
import Home from './Components/Home/Home.jsx'
import Cube from './Components/Visualizations/Cube.jsx'
import Hypercube from './Components/Visualizations/Hypercube.jsx'
import Favorites from './Components/Favorites/Favorites.jsx'

function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav-links">
          <Link className="nav-links-for-css" to ='/'>Home</Link>
          <Link className="nav-links-for-css" to ='/menu'>Visualization Menu</Link>
          <Link className="nav-links-for-css" to ='/favorites'>Favorites</Link>
        </div>
      </nav>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/menu' component={Menu} />
        <Route exact path='/cube' component={Cube} />
        <Route exact path='/hypercube' component={Hypercube} />
        <Route exact path='/favorites' component={Favorites} />
      </Switch>
    </div>
  );
}

export default App;
