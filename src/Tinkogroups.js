import React, {Component} from 'react';
import Iframe from 'react-iframe'


class Tinkogroups extends Component {
  render() {
    const props = {
      url: "https://tinko.org/tinkogroups.html"
    }
    return (
      <div>
        <Iframe {...props}/>
        <div className="Footer">
          <br/>&copy;ちんこ系ドメイン勉強会
          <br/>last-update: 2016/12/12
        </div>
      </div>
    );
  }
}

export default Tinkogroups;