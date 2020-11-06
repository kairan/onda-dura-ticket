import React, {Component} from 'react';

import logoActive from '../img/LOGO-OD.png';
import Columns, { Column } from './Columns';

class UserRegister extends Component {
  constructor(props){
    super(props);
    this.state = {
      formData: {
        id: 0,
        description: null,
        snap_date: null,
        snap_time_begin: null,
        snap_time_end: null
      },
      isAuthOK: true,
      decoded: {},
      isLoading: false,
      fileName: '',
      fileSelected: '',
      step: 0,
      stepEnd: 0,
    }
  }

  componentDidMount(){
    
  }

  render() {

    const {formData, isLoading, step, stepEnd} = this.state;
    console.log(step, stepEnd);
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
                      value={formData.name}
                      
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
                      value={formData.mail}   
                    />
                  </div>
                </div>
              </Column>
              <Column isSize={4}>
                <div className="field">
                  <div className="control">
                    <button className={`button is-yellow ${isLoading ? 'is-loading' : ''}`} type="submit" onClick={this.startUpload.bind(this)}>Cadastrar</button>
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