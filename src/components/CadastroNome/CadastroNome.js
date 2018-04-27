import React, { Component } from 'react';
import './CadastroNome.css';
import {
  Link
} from 'react-router-dom';

class CadastroNome extends Component {
  render() {
    return (
      <div className="cadastro-nome pagina">
        <div>
            <h2>Digite seu nome:</h2>
            <input type="text"/>
            
            <Link to="/email">
              <button>Avançar</button>
            </Link>
        </div>
      </div>
    );
  }
}

export default CadastroNome;
