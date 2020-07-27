import React from 'react';
import HomePage from './Pages/HomePage'
import Header from './Component/Header'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'
import Products from './Pages/Products'
import Extract  from './Pages/Extract'
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
        <Route path="/extract" >
          <Extract/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
