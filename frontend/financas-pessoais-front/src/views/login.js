import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import { withRouter } from "react-router-dom";

import axios from "axios";

class Login extends React.Component {
  state = {
    email: "",
    senha: "",
    mensagemErro: null,
  };

  prepareCadastrar = () => {
    this.props.history.push("/cadastro-usuarios");
  };

  entrar = () => {
    axios
      .post("http://localhost:8080/api/usuarios/autenticar", {
        email: this.state.email,
        senha: this.state.senha,
      })
      .then(response => {
        console.log(response);
      })
      .catch(erro => {
        this.setState({ mensagemErro: erro.response.data });
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <span>{this.state.mensagemErro}</span>
          <div
            className="col-md-6"
            style={{ position: "relative", left: "300px" }}
          >
            <div className="bs-docs-section">
              <Card title="Login">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="bs-component">
                      <fieldset>
                        <FormGroup label="Email: *" htmlFor="exampleInputEmail">
                          <input
                            type="email"
                            value={this.state.email}
                            onChange={(e) =>
                              this.setState({ email: e.target.value })
                            }
                            className="form-control"
                            id="exampleInputEmail"
                            placeholder="Digite o E-mail"
                          />
                        </FormGroup>
                        <FormGroup
                          label="Senha: *"
                          htmlFor="exampleInputPassword"
                        >
                          <input
                            type="password"
                            value={this.state.senha}
                            onChange={(e) =>
                              this.setState({ senha: e.target.value })
                            }
                            className="form-control"
                            id="exampleInputPassword"
                            placeholder="Digite a Senha"
                          />
                        </FormGroup>
                        <button
                          onClick={this.entrar}
                          className="btn btn-success"
                        >
                          Entrar
                        </button>
                        <button
                          onClick={this.prepareCadastrar}
                          className="btn btn-danger"
                        >
                          Cadastrar
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
