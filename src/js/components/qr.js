//@flow
import React, {Component} from "react";
import QRCode from "qrcode.react";

type Props=any;
export default class QR extends Component<Props> {
  render() {    
    return (
      <div className="qr">
        <QRCode value="ちんぽっぽ(´・ω・｀)ぼいん" />
      </div>
    );
  }
}
