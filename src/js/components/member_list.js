//@flow
import React, {Component} from "react";

type Props = any;
export default class MemberList extends Component<Props> {
  render() {
    const props = {
      name:"tinkogroups",
      title:"tinkogroups",
      src: "https://cuderia1917.github.io/tnkgroup/"
    };
    return (
      <div className="member-list">
        <iframe title="tinkogroups" {...props}/>
        <div>
          <br/>&copy;ちんこ系ドメイン勉強会
          <br/>last-update: 2017/08/26
        </div>
      </div>
    );
  }
}
