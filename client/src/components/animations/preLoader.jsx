import React from 'react'
import Lottie from 'react-lottie';
import * as searching from './8197-pulsar.json'

export default class PreLoaderPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        isStopped: false,
        isPaused: false
    };
  }

  render() {

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: searching.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (
        <div style={{ backgroundColor: "black"}}>
          <Lottie options={defaultOptions}
              height={"50%"}
              width={"50%"}
              style={{backgroundColor: "transparent"}}
               />
        </div>
        )
  }
}