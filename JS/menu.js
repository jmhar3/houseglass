import React, { Component } from 'react';

export default class Menu extends Component {

  openMenu = () => {
    document.querySelector('#user-icon').classList.toggle('hidden')
    document.querySelector('#user-access').classList.toggle('hidden')
    document.querySelector('.navbar').classList.toggle('hidden')
  }

  render() {
    return (
      <header>
        <div id="menu-head">
          <img src="./images/NG.jpeg" id="user-icon" />

          <img src="./images/list.png" onClick={this.openMenu} id="menu-button" />

          <div id="user-access" className="hidden">
            <h5 className="user">You are not signed in.</h5>
            <p className="signup ">Sign Up Now</p>
          </div>
        </div>
          <ul className="navbar hidden">
            <li><a href="#index">Explore Swatches</a></li>
            <li>Your Creations</li>
            <li><a href="#palette">Make Your Own</a></li>
          </ul>
      </header>
    );
  }
}

// if (user !== loggedIn) {
  // .user.innerText = "You are not signed in."
  // .signup.innerText = "Sign Up Now"
// } else {
  // .user.innerText = `${user.name}`
  // .signup.innerText = "Logout"
// }