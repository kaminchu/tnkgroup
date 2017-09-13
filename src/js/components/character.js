// @flow
/*eslint no-irregular-whitespace:0 */
import React, {Component} from "react";

type Props = any;
export default class Character extends Component<Props> {
  render() {
    const props = {
      onClick: ()=> alert("クリック禁止です！"),
      className:"animation",
    };

    const empji = `
  ∧　∧
(*‘ω‘ *) 　ちんぽっぽ
 (　　　)
　 v v 　　　
　　　　  　　ぼいんっ
　  川
( (　　) )
        `;
    return (
      <div className="character">
        <div {...props}>
          <a href="https://tinko.org/whatsthis" style={{textAlign: "center", margin: 4}}>
            これはなにか
          </a>
          <pre>
            {empji}
          </pre>
        </div>
      </div>
    );
  }
}
