import logo from './logo.svg';
import './App.css';
import Header from './component/Header.js'
import Style from './component/css/Style.css'
import Banner from './component/Banner.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DataJson from './component/DataJson';
import Offer from './component/Offer';
import List from './component/List';
import Footer from './component/Footer';
import Newsletter from './component/Newsletter';
import About from './component/About';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Navigation from './component/Navigation';
import Product from './component/Product';
import Contact from './component/Contact';
function App() {
  return (
    <div className="App">
  <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/List" component={List} />
            <Route exact path="/Contact" component={Contact} />
        </Switch>
    </Router>
      
    </div>
  );
}

export default App;
