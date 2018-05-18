// @flow
import React from "react";
import styled, {keyframes} from "styled-components";

import Tinpoppo from "./tinpoppo";

const StyledTop = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Top = () => {
  return (
    <StyledTop>
      <div>
        <Title/>
        <WrappedTinpoppo/>
      </div>
    </StyledTop>
  );
};

// title
const StyledTitleSpan = styled.span`
  font-size: 4.0em;
`;
const Title = () => (
  <div>
    <StyledTitleSpan>
      tinko系ドメイン勉強会
    </StyledTitleSpan>
  </div>
);


// tinpoppo
const animation = keyframes`
  0%    { transform: translate(0px,150px);  }
  25%   { transform: translate(0px,0px);    }
  50%   { transform: translate(0px,150px);  }
  75%   { transform: translate(0px,0px);    }
  100%  { transform: translate(0px,150px);  }
`;
const AnimatedStyled = styled.div`
  animation: ${animation} 3s ;
  animation-iteration-count: infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const WrappedTinpoppo = () => (
  <AnimatedStyled>
    <Tinpoppo/>
  </AnimatedStyled>
);


export default Top;
