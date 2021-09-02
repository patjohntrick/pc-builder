import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Introduction from './components/Introduction';
import Case from './components/Case';
import Motherboard from './components/Motherboard';

function App() {
  const [ccase, setCcase] = useState({case:""});
  const [board, setBoard] = useState({board:""});

  const build = {...ccase, ...board};

  function formSubmit(e){
    e.preventDefault();
    console.log(build);
  }

  function caseHandle(e){
    setCcase({case:e.target.value});
  }

  function boardHandle(e){
    setBoard({board:e.target.value});
  }
  
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/" exact component={Introduction} />

        <Route path="/case" exact>
          <Case formSubmit={formSubmit} handleChange={caseHandle} />
        </Route>

        <Route path="/motherboard" exact>
          <Motherboard formSubmit={formSubmit} handleChange={boardHandle} />
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
