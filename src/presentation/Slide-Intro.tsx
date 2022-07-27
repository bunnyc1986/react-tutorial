import { Slide, FlexBox, Heading } from 'spectacle';
import styled from 'styled-components';

import logo from '../logo.svg';

const SpiningImg = styled.img`
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: App-logo-spin infinite 10s linear;
  height: 35vmin;
  pointer-events: none;
`

function SlideIntro() {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading>Web Development 101</Heading>
        <SpiningImg src={logo} />
      </FlexBox>
    </Slide>
  )
}

export default SlideIntro;