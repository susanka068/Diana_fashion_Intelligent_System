import React from 'react';
import HomePage from './Pages/HomePage'
import Header from './Component/Header'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'
import Products from './Pages/Products'
import Extract  from './Pages/Extract'
import ProductDetails from './Pages/ProductDetails'
function App() {
  return (
    <Router>
    <div>
      <header>
          <Header/>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products" component={Products}/>
        <Route path="/extract" component={Extract} />
        <Route path="/details" component={ProductDetails} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
