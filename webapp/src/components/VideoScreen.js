import React, {Component} from 'react';

import ReactPlayer from "react-player";
import * as jwtToken from 'jsonwebtoken';
import Columns, { Column } from './Columns';
import {put,get} from '../utils'
import notification from '../notification'

class VideoScreen extends Component{

  constructor(props) {
    super(props);
    this.state ={
      decoded: {},
      isAuthOK: true,
      user: null,
      isLoading: false
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
        put(`users/${decoded.userId}/video-watched`, {order: decoded.order}).then(resp => 
          get(`users/${decoded.userId}`).then(res =>{
            this.setState({user: res.data.data, isLoading: true})
          })
        )
      })
    }
  }

  openTest = (canDoTest) => {
    const {user} = this.state;

    let msg = []
    if(!user.watchedVideo1){
      msg.push(1)
    }
    if(!user.watchedVideo2){
      msg.push(2)
    }
    if(!user.watchedVideo3){
      msg.push(3)
    }
    if(!user.watchedVideo4){
      msg.push(4)
    }

    if(canDoTest) {
      window.open('https://docs.google.com/forms/d/e/1FAIpQLSem3ByAgQDCIMLopOs_FxY3_oYuxGpud5xMcKCY9fQHfTI3sw/viewform')
    }else{
      notification.warn(`Questionário bloqueado! Por favor verifique seu e-mail e assista os dias ${msg.join(', ')} do familiarizando para ter acesso.`)
    }
  }

  render() {
    const {decoded, isAuthOK, user, isLoading} = this.state;
    console.log(user, isLoading)
    let isLast = false
    if(decoded.order === 4){
      isLast = true
    }
    let canDoTest = isLast && user !== null && user.watchedVideo1 && user.watchedVideo2 && user.watchedVideo3 && user.watchedVideo4;
    console.log(canDoTest)
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center', padding: '5%', height: '100vh', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#25282a' }}>
        {isAuthOK && <Columns isMultiline>
          <Column isSize={12}>
            <ReactPlayer
              controls
              width = "896px"
              height = "504px"
              url={decoded.url}
            /> 
          </Column>
          {isLast &&<Column isSize={12}>
            <button className="button is-yellow " type="button" onClick={() => this.openTest(canDoTest)}> Fazer Questionário</button> 
          </Column>}
        </Columns>}


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