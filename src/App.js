import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Introduction from './components/Introduction';
import Case from './components/Case';
import Motherboard from './components/Motherboard';

function App() {
  const [item, setItem] = useState([]);
  console.log(item);
  
  function handleSubmit(e) {
    setItem(e.target.value);
  }

  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/" exact component={Introduction} />
        <Route path="/case" exact component={Case} setItem={handleSubmit} item={item} />
        <Route path="/motherboard" exact component={Motherboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
