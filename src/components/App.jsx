import React from 'react';
import '../App.css';
import SignIn from './signIn.jsx'
import SignUp from './signUp.jsx'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </div>
    </Router>
  );
}

export default App;
