import React, { Component } from 'react';
import './CadastroNome.css';
import {
  Link
} from 'react-router-dom';

class CadastroNome extends Component {
  aoDigitar = (event) => {
    this.props.usuario.nome = event.target.value;
    console.log(this.props);
  }

  render() {
    return (
      <div className="cadastro-nome pagina">
        <div>
            <h2>Si cadastri ai, tiw:</h2>
            <input type="text" onChange={this.aoDigitar}/>
            
            <Link to="/email">
              <button>Avançar</button>
            </Link>
        </div>
      </div>
    );
  }
}

export default CadastroNome;
