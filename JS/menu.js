import React, { Component } from 'react';

export default class Menu extends Component {
  constructor(props) {
    super()
    this.state(
      this.props.name: 'name'
    )
  }

  openMenu = () => {
    document.querySelector('#user-icon').classList.toggle('hidden')
    document.querySelector('#user-access').classList.toggle('hidden')
    document.querySelector('.navbar').classList.toggle('hidden')
  }

  openModal = () => {
    document
  }

  render() {
    return (
      <header>
        <div id="menu-head">
          <img src="./images/NG.jpeg" id="user-icon" />

          <img src="./images/list.png" onClick={this.openMenu} id="menu-button" />

          <div id="user-access" className="hidden">
            <h5 className="user">{this.state.name}</h5>
            <p onClick={openModal} className="access">Sign Up Now</p>
          </div>
        </div>
          <div className="navbar hidden">
            <Link to="/">Explore Swatches</Link>
            <Link to="/creations">Your Creations</Link>
            <Link to="/palette">Make Your Own</Link>
          </div>
      </header>
    );
  }
}