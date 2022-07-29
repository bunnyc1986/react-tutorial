import {
  Appear,
  FlexBox,
  Heading,
  Link,
  ListItem,
  Quote,
  Text,
  Slide,
  UnorderedList,
  Markdown,
} from "spectacle";

import WebGLDemo from "../widgets/WebGLDemo";

function SlideWebGL() {
  return (
    <Slide>
      <Heading>WebGL</Heading>
      <FlexBox flexDirection="row">
        <FlexBox flexDirection="column" width="50%">
          <Markdown componentProps={{fontSize:"22pt"}}>
            {`
            - WebGL is a JavaScript API for rendering interactive 2D and 3D
            graphics within any compatible web browser without the use of
            plug-ins.
            - WebGPU is the working name for a future web standard and JavaScript
            API for accelerated graphics and compute, aiming to provide "modern
            3D graphics and computation capabilities".
            `}
          </Markdown>
        </FlexBox>
        <FlexBox width="50%">
          <WebGLDemo />
        </FlexBox>
      </FlexBox>
    </Slide>
  );
}

export default SlideWebGL;
