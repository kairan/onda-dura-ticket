import React, {Component} from 'react';

import {handleForInputChangeOnForm, post} from '../utils';


import logoActive from '../img/LOGO-OD.png';
import Columns, { Column } from './Columns';
import notification from '../notification'

class UserRegister extends Component {
  constructor(props){
    super(props);
    this.state = {
      formData: {
        name: '',
        mail: ''
      },
      isLoading: false,
    }
  }

  onClick = () => {
    const {formData} = this.state;
    console.log(formData)
    post('users', formData).then(resp => {
      console.log(resp)
    })
  }
  render() {

    const {formData, isLoading } = this.state;
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center', padding: '5%', height: '100vh', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#25282a' }}>
        <div style={{  top: 30, width: 700, height: 500 }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={logoActive}
              alt="Logo"
              style={{ height: 65, marginBottom: 15 }}
            />
          </div>
          <div style={{ margin: 30 }}>
            <Columns isMultiline>
              <Column isSize={12}>
                <div className="field">
                  <label className="label has-text-yellow">Nome Completo</label>
                  <div className="control">
                    <input className="input" type="text" placeholder="Nome Completo"
                      id="name"
                      onChange={handleForInputChangeOnForm.bind(this)}
                      value={formData.description}
                      
                    />
                  </div>
                </div>
              </Column>
              <Column isSize={12}>
                <div className="field">
                  <label className="label  has-text-yellow">E-mail</label>
                  <div className="control">
                    <input className="input" type="email" name="mail" placeholder="E-mail"
                      id="mail"
                      onChange={handleForInputChangeOnForm.bind(this)}
                      value={formData.snap_date}   
                    />
                  </div>
                </div>
              </Column>
              <Column isSize={4}>
                <div className="field">
                  <div className="control">
                    <button className={`button is-yellow ${isLoading ? 'is-loading' : ''}`} type="submit" onClick={this.onClick}>Cadastrar</button>
                  </div>
                </div>
              </Column>
            </Columns>
          </div>  
        </div>
      </div>
    )
  }
}

export default UserRegister;