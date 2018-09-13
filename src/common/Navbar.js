import React from 'react';
import logo from './../logo.svg';
import Logo from './Logo';
import './style.css';

const Navbar = () => (
  <header className="App-header">
    <Logo ruta={logo} alt="Logo de React"/>
    <h1 className="App-title">Welcome to React</h1>
  </header>
);

export default Navbar;