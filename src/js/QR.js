import React, {Component} from 'react';
import QRCode from 'qrcode.react';

class QR extends Component {
  render() {
    const width = window.outerWidth;
    const leftPx = (width/2) - 64;
    
    console.log(width);
    return (
    <div style={{position: "absolute",left: leftPx, top: 10}}>
      <QRCode value="ちんぽっぽ(´・ω・｀)ぼいん" />
    </div>
    );
  }
}

export default QR;