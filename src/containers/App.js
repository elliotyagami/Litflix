import React, { Component } from 'react';
import Layout from './Layout';
import Landing from './Landing';
import { UserSession } from 'blockstack'

class App extends Component {

  constructor() {
    super()
    this.userSession = new UserSession()
  }

  componentWillMount() {
    const session = this.userSession
    if (!session.isUserSignedIn() && session.isSignInPending()) {
      console.log("componenetwill")
      session.handlePendingSignIn()
        .then((userData) => {
          if (!userData.username) {
            throw new Error('This app requires a username.')
          }
          window.location = `/kingdom/${userData.username}`
        })
    }
  }

  render() {
    return (
      <div>
      {this.userSession.isUserSignedIn() ?
        <Landing />
        :
        <Layout />
      }
      </div>
    )
  }
}

export default App;
