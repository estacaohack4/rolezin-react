import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './App.css';
import CadastroNome from './components/CadastroNome/CadastroNome';
import CadastroEmail from './components/CadastroEmail/CadastroEmail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={CadastroNome}/>
        <Route path="/email" component={CadastroEmail}/>
      </div>
    );
  }
}

export default App;
