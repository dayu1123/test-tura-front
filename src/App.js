import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Flickr from './components/flickr'
import Palindrome from './components/palindrome'
import Navbar from './components/navbar'
function App() {

  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/palindrome" component={Palindrome}></Route>
          <Route path="/" component={Flickr}></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
