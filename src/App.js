import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './App.css';
import CadastroNome from './components/CadastroNome/CadastroNome';
import CadastroEmail from './components/CadastroEmail/CadastroEmail';
import Resultado from './components/Resultado/Resultado';

class App extends Component {
  componentWillMount(){
    this.usuario = {};
  }

  render() {
    return (
      <div className="App">
        <Route path="/" exact component={() => <CadastroNome usuario={this.usuario} />} />
        <Route path="/email" exact component={() => <CadastroEmail usuario={this.usuario} />}/>
        <Route path="/resultado" exact component={() => <Resultado usuario={this.usuario} />}/>
      </div>
    );
  }
}

export default App;
