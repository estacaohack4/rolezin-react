import React, { Component } from 'react';
import './Resultado.css';
import {
  Link
} from 'react-router-dom';

class Resultado extends Component {

  render() {
    return (
      <div className="resultado pagina">
        <div>
          <h2>Valeu zika, eh noix</h2>
          <p>{this.props.usuario.nome}</p>
          <p>{this.props.usuario.email}</p>
        </div>
      </div>
    );
  }
}

export default Resultado;
