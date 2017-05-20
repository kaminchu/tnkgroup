import React, {Component} from 'react';
import './Container.css';

class Container extends Component {
  render() {
    const props = {
      onClick: ()=> alert('クリック禁止です！'),
      className:"Container"
    };

    const empji = `
  ∧　∧
             (*‘ω‘ *) 　ちんぽっぽ
 (　　　 )
　  v v 　　　
　　　　  　　ぼいんっ
　  川
( (　　) )

        `;
    return (
      <div {...props}>
        <a href="https://tinko.org/whatsthis">これはなにか</a>
        <pre>
          {empji}
        </pre>
      </div>
    );
  }
}

export default Container;