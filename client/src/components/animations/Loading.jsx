import React from 'react'
import Lottie from 'react-lottie';
import * as searching from './6059-wavy.json'

export default class LottieControl extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        isStopped: false,
        isPaused: false};
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
        <div style={{marginTop: '5px'}}>
          <Lottie options={defaultOptions}
              height={"300px"}
              width={"auto"}
              style={{backgroundColor: 'transparent'}} />
        </div>
        )
  }
}