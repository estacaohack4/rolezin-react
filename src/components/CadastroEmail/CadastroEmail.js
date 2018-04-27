import React, { Component } from 'react';
import './CadastroEmail.css';
import {
  Link
} from 'react-router-dom';

class CadastroEmail extends Component {
  aoDigitar = (event) => {
    this.props.usuario.email = event.target.value;
    console.log(this.props);
  }

  render() {
    return (
      <div className="cadastro-email pagina">
        <div>
            <h2>Digite seu email:</h2>
            <input type="text" onChange={this.aoDigitar}/>
            <Link to="/resultado">
              <button>Avançar</button>
            </Link>
        </div>
      </div>
    );
  }
}

export default CadastroEmail;
