import React, { Component } from 'react';

//import * as dat from 'dat.gui'; //Activar panei de control para usuario


class AnimacionOndas extends Component  {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
      }

    componentDidMount(){
        // const gui = new dat.GUI();
        const canvas = this.canvasRef.current;
        const c = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        //Objeto criado para salvar dados iniciais de las sinais de onda.
        const wave = {
            y: canvas.height / 1.5,
            length:  0.01,
            amplitude: 100,
            frequency: 0.01
        }
        //Objeto criado para salvar dados de cores
        const strokeColor = {
            h: 200,
            s: 50,
            l: 50
        }

        const backgroundColor = {
            r: 0,
            g: 0,
            b: 0,
            a: 0.01, 
        }

        //Variais criadas para indicar dados iniciais en paneil de control.
        // E modificar as ondas
        // const waveFolder = gui.addFolder('wave');
        // waveFolder.add(wave, 'y', 0, canvas.height);
        // waveFolder.add(wave, 'length',-0.01, 0.01);
        // waveFolder.add(wave, 'amplitude', -300, 300);
        // waveFolder.add(wave, 'frequency', -0.01, 1);
        // //Varias criadas para modificar as cores nas ondas.
        // const colorsFolder = gui.addFolder('strokeColor');
        // colorsFolder.add(strokeColor, 'h',0 , 255);
        // colorsFolder.add(strokeColor, 's',0 , 100);
        // colorsFolder.add(strokeColor, 'l',0 , 100);
        // //Varias criadas para modificar as cores na background
        // const backgroundFolder = gui.addFolder('backgroundColor');
        // backgroundFolder.add(backgroundColor, "r" , 0 , 255);
        // backgroundFolder.add(backgroundColor, "g" , 0 , 255);
        // backgroundFolder.add(backgroundColor, "b" , 0 , 255);
        // backgroundFolder.add(backgroundColor, "a" , 0 , 1);

        let increment = wave.frequency;
        //Funcion feita para iterar por cada valor, cuando seja modificado.
        function animate() {
            requestAnimationFrame(animate)
            c.fillStyle = `rgba(${backgroundColor.r}, ${backgroundColor.g} ,${backgroundColor.b},${backgroundColor.a})`;
            c.fillRect(0, 0, canvas.width, canvas.height);

            c.beginPath();
            c.moveTo(0, canvas.height / 2)

            //Loop para definir la longitud de onda y la inclinacion de pixeles afectados
            for(let i=0; i<canvas.width; i++){
                c.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.amplitude * Math.sin(increment)/ i * 1000)
            }
            c.strokeStyle = `hsl(${Math.abs(strokeColor.h) * Math.sin(increment)}, ${strokeColor.s}%, ${strokeColor.l}%)`
            c.stroke();
            increment += wave.frequency;
        }
        animate()

    }
    componentWillUnmount(){

    }
    render(){
        return(
        <div>
        <canvas  ref={this.canvasRef} className="canvas-wrapper"></canvas>
        </div>
        )
    }

}


export default AnimacionOndas;

