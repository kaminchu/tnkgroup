import React, {Component} from 'react';
import '../css/App.css';
import Tinkogroups from "./Tinkogroups";
import QR from "./QR";
import Container from "./Container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <QR className="QR"/>
        <Tinkogroups className="Tinkogroups"/>
        <Container className="Container"/>
      </div>
    );
  }
}

export default App;
