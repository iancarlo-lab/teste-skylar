import React, { Component } from 'react';
import {Card } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Lottie from 'react-lottie';
//import * as editLoader from './animations/11045-buildin-a-web-page.json';
import * as editLoader from './animations/7121-face-scanning.json';
import axios from 'axios';

export default class EditarUsuario extends Component {
    constructor(props){
        super(props);

        this.state = {
            nome: '',
            email: '',
            telefone: '',
            usuarios: []
        }

    }

    componentDidMount(){
        axios.get('/dashboard/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    nome: response.data.nome,
                    email: response.data.email,
                    telefone: response.data.telefone
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    onChangenome = (e) => {
        this.setState({
            nome: e.target.value,
        })
    }

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value,
        })
    }

    onChangeTelefone = (e) => {
        this.setState({
            telefone: e.target.value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        console.log(e);

        const contato = {
            nome: this.state.nome,
            email: this.state.email,
            telefone: this.state.telefone
        }

        console.log(contato)


        axios.put('/dashboard/editar/'+this.props.match.params.id, contato)
            .then(res => {
                if(res.data === "Padrão de email inválido!"){
                    console.log(res.data)
                    alert(res.data)
                } else{
                    alert("Editado correctamente" );
                    this.setState({
                        nome: '',
                        email: '',
                        telefone: ''
                     });
                }
            })
            .catch(error => {
                console.log(error)
                alert(error)
            });
    }

    render(){

        const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: editLoader.default,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };

        return(
            <div className="editar-container">
                <TransitionGroup>
                    <CSSTransition
                             in={true}
                            appear={true}
                            timeout={7000}
                            classNames="fade">
                    <Card className="card-editar-usuario" bg="dark">
                    <h2 className="editar-titulo">Editar informação</h2>

                        <Lottie options={defaultOptions}
                                height={200}
                                width={300}/>
                        <Card.Body>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label className="editar-label">Nome:</label>
                                <input ref="userInput"
                                    required
                                    minLength="3"
                                    maxLength="30"
                                    pattern="[a-zA-Z]{3,30}"
                                    className="form-control-editar"
                                    value={this.state.nome}
                                    onChange={this.onChangenome}>
                                    
                                </input>
                            </div>
                            <div className="form-group">
                                <label className="editar-label">E-mail:</label>
                                <input type="email"
                                    required
                                    className="form-control-editar"
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}
                                />
                            </div>
                            <div className="form-group">
                                <label className="editar-label">Telefone:</label>
                                <input type="tel"
                                    placeholder="De 9-11 digitos" 
                                    minLength="9"
                                    maxLength="11"
                                    pattern="[0-9]{9,11}"
                                    required
                                    className="form-control-editar"
                                    value={this.state.telefone}
                                    onChange={this.onChangeTelefone}/>
                            </div>
                            
                            <div className="form-group">
                                <input type="submit" value="Editar Usuário" className="btn btn-warning editar-button "/>
                            </div>
                        </form>
                        </Card.Body>
                    </Card>
                    </CSSTransition>
                    </TransitionGroup>
                 </div>
        )
    }
}