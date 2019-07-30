import React, { Component } from 'react'
import { UserSession, AppConfig } from 'blockstack'
// import { appConfig } from './constants'
// import './Landing.css'
import BlockStackLogo from '../static/images/logo.png'



class Landing extends Component {

  constructor() {
    super()
    this.userSession = new UserSession({ appConfig: new AppConfig(['store_write', 'publish_data']) })
  }

  signIn(e) {
    e.preventDefault()
    this.userSession.redirectToSignIn()
  }

  render() {
    return (
    //   <div className="Landing">
    //     <div className="form-signin">
    //       <h1 className="h1 mb-3 font-weight-normal">Animal Kingdom</h1>
    //       <button
    //         className="btn btn-lg btn-primary btn-block"
    //         onClick={this.signIn.bind(this)}>Sign in with Blockstack
    //       </button>
    //     </div>
    //   </div>
                  <div className="login">
                  <button className="modal__btn" onClick={this.signIn.bind(this)}>
                      {/* <AddIcon className="modal__btn--icon" /> */}
                      <img className="navigation__container--logo" src={BlockStackLogo} alt="" />
                      Sign in with Blockstack
                  </button>
              </div>
    );
  }
}

export default Landing
