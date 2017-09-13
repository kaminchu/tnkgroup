// @flow

import React, {Component} from "react";
import "../../css/components/app.css";
import MemberList from "./member_list";
import QR from "./qr";
import Character from "./character";

type Props = any;
class App extends Component<Props>{ 
  render() {
    return (
      <div className="app">
        <MemberList/>
        <QR/>        
        <Character/>
      </div>
    );
  }
}

export default App;
