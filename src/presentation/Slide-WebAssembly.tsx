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

import WebAssemblyDemo from "../widgets/WebAssemblyDemo";

function SlideWebAssembly() {
  return (
    <Slide>
      <Heading>WebAssembly</Heading>
      <FlexBox flexDirection="row">
        <FlexBox flexDirection="column" width="50%">
          <Markdown componentProps={{ fontSize: "22pt" }}>
            {`
            - Wasm is designed as a portable compilation target for programming languages, 
            enabling deployment on the web for client and server applications.
            - The example on the left is a PNG image encoded by webplib in WebAssembly to WebP format.

            `}
          </Markdown>
        </FlexBox>
        <FlexBox flexDirection="column" width="50%">
          <WebAssemblyDemo />
        </FlexBox>
      </FlexBox>
    </Slide>
  );
}

export default SlideWebAssembly;
