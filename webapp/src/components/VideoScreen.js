import React, {Component} from 'react';

import ReactPlayer from "react-player";
import * as jwtToken from 'jsonwebtoken';
import {put} from '../utils'

class VideoScreen extends Component{

  constructor(props) {
    super(props);
    this.state ={
      decoded: {},
      isAuthOK: true
    }
  }

  componentDidMount(){
    const {jwt } = this.props;

    const decoded = jwtToken.decode(jwt, "OndaDuraJaragua")
    console.log(decoded)
    if(decoded === null){
      this.setState({isAuthOK: false})
    }else{
      this.setState({decoded, isAuthOK: true}, () => {
        put(`users/${decoded.userId}/video-watched`, {order: decoded.order}).then(resp => {
          console.log(resp.data)
        })
      })
      console.log(decoded)
    }
  }

  render() {
    const {decoded, isAuthOK} = this.state;
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center', padding: '5%', height: '100vh', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#25282a' }}>
        {isAuthOK && <ReactPlayer
          controls
          width = "896px"
          height = "504px"
          url={decoded.url}
        />}

        {!isAuthOK && <div>
            <h1 className="title has-text-centered has-text-yellow" style={{ verticalAlign: 'centered' }}>
              Dados de acesso invalido!
            </h1>
            <h1 className="title has-text-centered has-text-yellow" style={{ verticalAlign: 'centered' }}>
              Utilize o Link enviado em seu e-mail.
            </h1>
          </div>}
      </div>
    )
  }

}

export default VideoScreen;