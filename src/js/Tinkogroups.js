import React, {Component} from 'react';
import '../css/Tinkogroups.css';


class Tinkogroups extends Component {
  render() {
    const props = {
      src: "https://tinko.org/tinkogroups.html"
    }
    return (
      <div style={{position: "absolute",bottom: 0}}>
        <iframe {...props}/>
        <div className="Footer">
          <br/>&copy;ちんこ系ドメイン勉強会
          <br/>last-update: 2016/12/12
        </div>
      </div>
    );
  }
}

export default Tinkogroups;