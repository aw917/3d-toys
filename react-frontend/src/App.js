import { Route, Link, Switch } from "react-router-dom";
import './App.css';
import Menu from './Components/Menu/Menu.jsx'
import Home from './Components/Home/Home.jsx'
import Cube from './Components/Visualizations/Cube.jsx'
import Diamond from './Components/Visualizations/Diamond.jsx'

function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav-links">
          <Link className="nav-links-for-css" to ='/'>Home</Link>
          <Link className="nav-links-for-css" to ='/menu'>Visualization Menu</Link>
        </div>
      </nav>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/menu' component={Menu} />
        <Route exact path='/cube' component={Cube} />
        <Route exact path='/diamond' component={Diamond} />
      </Switch>
    </div>
  );
}

export default App;
