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
} from "spectacle";

function WhatsWebDev() {
  return (
    <Slide>
      <Heading>WebGL</Heading>
      <FlexBox flexDirection="row">
        <FlexBox>
          <Text>
            WebGL is a JavaScript API for rendering interactive 2D and 3D
            graphics within any compatible web browser without the use of
            plug-ins.
          </Text>
          <Text>
            WebGPU is the working name for a future web standard and JavaScript
            API for accelerated graphics and compute, aiming to provide "modern
            3D graphics and computation capabilities".
          </Text>
        </FlexBox>
        <FlexBox>
          
        </FlexBox>
      </FlexBox>
    </Slide>
  );
}

export default WhatsWebDev;
