import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Introduction from './components/Introduction';
import Case from './components/Case';
import Motherboard from './components/Motherboard';
import Cpu from './components/Cpu';
import Gpu from './components/Gpu';
import Ram from './components/Ram';
import Storage from './components/Storage';
import Cooling from './components/Cooling';
import Psu from './components/Psu';
import Monitor from './components/Monitor';
import Keyboard from './components/Keyboard';
import Mouse from './components/Mouse';
import Headset from './components/Headset';
import Chair from './components/Chair';
import Output from './components/Output';

function App() {
  const [ccase, setCcase] = useState({case:""});
  const [board, setBoard] = useState({motherboard:""});
  const [cpu, setCpu] = useState({cpu:""});
  const [gpu, setGpu] = useState({gpu:""});
  const [ram, setRam] = useState({ram:""});
  const [storage, setStorage] = useState({storage:""});
  const [cooling, setCooling] = useState({cooling:""});
  const [psu, setPsu] = useState({psu:""});
  const [monitor, setMonitor] = useState({monitor:""});
  const [keyboard, setKeyboard] = useState({keyboard:""});
  const [mouse, setMouse] = useState({mouse:""});
  const [headset, setHeadset] = useState({headset:""});
  const [chair, setChair] = useState({chair:""});

  const build = {computer: {...ccase, ...board, ...cpu, ...gpu, ...ram, ...storage, ...cooling, ...psu, ...monitor, ...keyboard, ...mouse, ...headset, ...chair}};

  function formSubmit(e){
    e.preventDefault();
    console.log(build);
  }

  function caseHandle(e){
    setCcase({case:e.target.value});
  }

  function boardHandle(e){
    setBoard({motherboard:e.target.value});
  }

  function cpuHandle(e){
    setCpu({cpu:e.target.value});
  }

  function gpuHandle(e){
    setGpu({gpu: e.target.value});
  }
  
  function ramHandle(e){
    setRam({ram: e.target.value});
  }

  function storageHandle(e){
    setStorage({storage:e.target.value});
  }

  function coolingHandle(e){
    setCooling({cooling:e.target.value});
  }

  function psuHandle(e){
    setPsu({psu:e.target.value})
  }

  function monitorHandle(e){
    setMonitor({monitor:e.target.value});
  }

  function keyboardHandle(e){
    setKeyboard({keyboard:e.target.value});
  }

  function mouseHandle(e){
    setMouse({mouse:e.target.value});
  }

  function headsetHandle(e){
    setHeadset({headset:e.target.value});
  }

  function chairHandle(e){
    setChair({chair:e.target.value});
  }
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/pc-builder" exact component={Introduction} />

        <Route path="/case" exact>
          <Case formSubmit={formSubmit} handleChange={caseHandle} />
        </Route>

        <Route path="/motherboard" exact>
          <Motherboard formSubmit={formSubmit} handleChange={boardHandle} />
        </Route>

        <Route path="/cpu" exact>
          <Cpu formSubmit={formSubmit} handleChange={cpuHandle} />
        </Route>

        <Route path="/gpu" exact>
          <Gpu formSubmit={formSubmit} handleChange={gpuHandle} />
        </Route>

        <Route path="/ram" exact>
          <Ram formSubmit={formSubmit} handleChange={ramHandle} />
        </Route>

        <Route path="/storage" exact>
          <Storage formSubmit={formSubmit} handleChange={storageHandle} />
        </Route>

        <Route path="/cooling" exact>
          <Cooling formSubmit={formSubmit} handleChange={coolingHandle} />
        </Route>

        <Route path="/psu" exact>
          <Psu formSubmit={formSubmit} handleChange={psuHandle} />
        </Route>

        <Route path="/monitor" exact>
          <Monitor formSubmit={formSubmit} handleChange={monitorHandle} />
        </Route>

        <Route path="/keyboard" exact>
          <Keyboard formSubmit={formSubmit} handleChange={keyboardHandle} />
        </Route>

        <Route path="/mouse" exact>
          <Mouse formSubmit={formSubmit} handleChange={mouseHandle} />
        </Route>

        <Route path="/headset" exact>
          <Headset formSubmit={formSubmit} handleChange={headsetHandle} />
        </Route>

        <Route path="/chair" exact>
          <Chair formSubmit={formSubmit} handleChange={chairHandle} />
        </Route>

        <Route path="/output" exact>
          <Output formSubmit={formSubmit} build={build}/>
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
