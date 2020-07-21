import React from 'react';
import HomePage from './Pages/HomePage'
import Header from './Component/Header'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'
import Products from './Pages/Products'
function App() {
  return (
    <Router>
    <div>
      <header>
          <Header/>
      </header>
      <Switch>
        <Route exact path="/" >
          <HomePage/>
        </Route>
        <Route path="/products">
          <Products/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
