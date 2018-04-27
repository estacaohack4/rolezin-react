import React, { Component } from 'react';
import './CadastroEmail.css';

class CadastroEmail extends Component {
  render() {
    return (
      <div className="cadastro-email pagina">
        <div>
            <h2>Digite seu email:</h2>
            <input type="text"/>
            <button>Avançar</button>
        </div>
      </div>
    );
  }
}

export default CadastroEmail;
