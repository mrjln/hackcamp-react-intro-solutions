import logo from '../images/winc-round.png'
import React from 'react'

export class Header extends React.Component {
    render() {
      return (
        <header>
        <img src={logo} alt="logo"/>
      </header>
      )
    }
  }