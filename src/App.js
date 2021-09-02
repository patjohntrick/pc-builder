import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Introduction from './components/Introduction';
import Case from './components/Case';
import Motherboard from './components/Motherboard';

function App() {
  const [item, setItem] = useState({case:"", board:""});

  function formSubmit(e){
    e.preventDefault();
    console.log(item);
  }
  
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/" exact component={Introduction} />

        <Route path="/case" exact>
          <Case item={item} setItem={setItem} formSubmit={formSubmit} />
        </Route>

        <Route path="/motherboard" exact><Motherboard /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
