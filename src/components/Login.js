import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
          <div className="meme-login-wrapper">
            <form>
              <div>
                <input type="text" placeholder="Username" />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="meme-login-buttons">
                <button className="btn" >
                  Login
                </button>
                <button className="btn" >
                  Reset
                </button>
              </div>
            </form>
          </div>
        );
}
}