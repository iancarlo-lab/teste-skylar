import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import { Button, Col, Row, Container} from 'react-bootstrap';
import anime from 'animejs';
import './animations/animation.scss';
import AnimacionOndas from './animacionOndas';

class General extends Component {

  // componentDidMount() {
  //   // === THREE.JS CODE START ===
  //   var scene = new THREE.Scene();
  //   var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
  //   var renderer = new THREE.WebGLRenderer();
  //   renderer.setSize( window.innerWidth, window.innerHeight );
  //   document.body.appendChild( renderer.domElement );
  //   var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  //   var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  //   var cube = new THREE.Mesh( geometry, material );
  //   scene.add( cube );
  //   camera.position.z = 5;
  //   var animate = function () {
  //     requestAnimationFrame( animate );
  //     cube.rotation.x += 0.01;
  //     cube.rotation.y += 0.01;
  //     renderer.render( scene, camera );
  //   };
  //   animate();
  //   // === THREE.JS EXAMPLE CODE END ===
  // }

    componentDidMount(){
      this.animation();
    }

    animation = () =>{
      var textWrapper = document.querySelector('.welcome-title');
      var subtitleWrapper = document.querySelector('.welcome-subtitle');
      var buttonAnim = document.querySelector('.ver-button');
      var buttonAnim2 = document.querySelector('.adicionar-button');
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      subtitleWrapper.innerHTML = subtitleWrapper.textContent.replace(/\S/g, "<span class='letter2'>$&</span>");

      anime.timeline({
        loop: false,

        })
        .add({
          targets: '.welcome-title .letter',
          opacity: [0,1],
          easing: "easeInOutQuad",
          duration: 2250,
          delay: (el, i) => 150 * (i+1)
        }).add({
          targets: '.welcome-subtitle .letter2',
          scale: [4,1],
          opacity: [0,1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 950,
          delay: (el, i) => 70*i
        },"-=1000").add({
          targets: buttonAnim, buttonAnim2,
          opacity: [0,1],
          easing: "easeInOutQuad",
          duration: 2250,
          delay: (el, i) => 150 * (i+1)
        }, "-=950").add({
          targets: buttonAnim2,
          opacity: [0,1],
          easing: "easeInOutQuad",
          duration: 2250,
          delay: (el, i) => 150 * (i+1)
        },"-=2250")
    };

  render(){

    return(
      <div className="welcome-background">
              <AnimacionOndas />
              <Container>
            <Row>
                <Col lg={true}>
                </Col>
                <Col lg={true} >
                <h1 className="welcome-title">Skylar IA</h1>
                 <h3 className="welcome-subtitle">Dashboard </h3>
                  
                    <p>
                    <Link to="/usuarios"><Button variant="outline-light" className="ver-button">
                                Ver Contatos</Button></Link>
                                &nbsp;
                    <Link to="/adicionar"><Button variant="light" className="adicionar-button">
                                Adicionar Usuário</Button></Link>
                    </p>
                </Col>
            </Row>
        </Container>
      </div>
              
  )
}
}


export default General;