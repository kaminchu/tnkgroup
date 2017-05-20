import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Tinkogroups from "./Tinkogroups";
import QR from "./QR";
import Container from "./Container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tinkogroups className="Tinkogroups"/>
        <QR className="QR"/>
        <Container className="Container"/>
      </div>
    );
  }
}

export default App;
