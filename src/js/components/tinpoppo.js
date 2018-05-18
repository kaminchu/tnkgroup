// @flow
/* eslint no-irregular-whitespace:0 */
import React from "react";
import styled from "styled-components";

const Styled = styled.pre`
  font-size: 16px;
  line-height: 18px;
  font-family: "ＭＳ Ｐゴシック", "MS P Gothic";
`;
const Tinpoppo = () => {
  const content = `    ∧　∧
  (*‘ω‘ *) 　ちんぽっぽ
   (　　　)
  　 v v 　　　
  　　　　  　　ぼいんっ
  　  川
  ( (　　) )`;
  return (
    <Styled>
      {content}
    </Styled>
  );
};

export default Tinpoppo;
