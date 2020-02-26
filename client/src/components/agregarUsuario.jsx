import React, { Component } from 'react';
import Lottie from 'react-lottie';
import axios from 'axios';
import anime from 'animejs';
import * as lightsLoader from './animations/7485-abstract-animation-for-apps.json';


export default class AdicionarUsuario extends Component {
    constructor(props){
        super(props);

        this.state = {
            nome: '',
            email: '',
            telefone: '',
            isStopped: false,
            isPaused: false
        };

    }

    componentDidMount(){
        this.animation();
      }
  
      animation = () =>{
        var cardWrapper = document.querySelector('.signupSection');
        var subtitleWrapper = document.querySelector('.adicionar-titulo');
        subtitleWrapper.innerHTML = subtitleWrapper.textContent.replace(/\S/g, "<span class='letter3'>$&</span>");
  
        anime.timeline({
          loop: false,
  
          })
          .add({
            targets: '.adicionar-titulo .letter3',
            opacity: [0,1],
            easing: "easeInOutQuart",
            duration: 350,
            delay: (el, i) => 30 * i
          })
          .add({
            targets: cardWrapper,
            opacity: [0,1],
            easing: "easeInCubic",
            duration: 800,
            delay: (el, i) => 3800 * i
          });
      };

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


        const contato = {
            nome: this.state.nome,
            email: this.state.email,
            telefone: this.state.telefone
        }

        axios.post('/dashboard/adicionar', contato)
            .then(res => {
                if(res.data === "Padrão de email inválido!"){
                    alert("Padrão de email inválido!")
                } else{
                    alert("Usuario adicionado")
                    window.location = '/usuarios'
                }
                })
            .catch(error => alert(error));
    }

    render(){

        const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: lightsLoader.default,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };

        return(
            <div className="adicionar-container">
            <div className="container">
             <h3 className="adicionar-titulo">Favor de preencher o formulário </h3>
             <div className="signupSection">
                <div className="info">
                    <div className="lottie-blue-animation">
                    <Lottie options={defaultOptions}
                        height={"auto"}
                        width={200}
                        style={{backgroundColor: 'transparent'}}
                         />
                    </div>
                </div>
                <form  onSubmit={this.onSubmit} className="signupForm" autoComplete="off">
                    <h2 className="sign-title">Novo Contato</h2>
                    <ul className="noBullet">
                    <li>
                        {/* <label for="username"></label> */}
                        <input type="text"
                         className="inputFields"
                         placeholder="Nome"
                         minLength="3"
                         maxLength="30"
                         pattern="[a-zA-Z]{3,30}"
                         value={this.state.nome}
                         onChange={this.onChangenome}
                         required
                         />
                    </li>
                    <li>
                        <label></label>
                        <input 
                        type="email"
                        className="inputFields"
                        placeholder="E-mail"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        required
                        />
                    </li>
                    <li>
                        <label></label>
                        <input type="tel"
                        className="inputFields"
                        placeholder="Telefone 9-11 dígitos"
                        minLength="9"
                        maxLength="11"
                        pattern="[0-9]{9,11}"
                        value={this.state.telefone}
                        onChange={this.onChangeTelefone}
                        required
                        />
                    </li>
                    <li id="center-btn">
                        <input type="submit" id="join-btn" name="adicionar" alt="Adicionar" value="Adicionar" />
                    </li>
                    </ul>
                </form>
                </div>
                </div>
            </div>
        )
    }
}