import ReactWordcloud from "react-wordcloud";
import {
  Appear, FlexBox, Heading, Link, ListItem, Quote, Slide, UnorderedList
} from "spectacle";

function SlideMisconcept2() {
  return (
    <Slide>
      <Heading>Misconcept #3</Heading>
      <Appear>
        <Quote>Web is less powerful</Quote>
      </Appear>
      <FlexBox flexDirection="row">
        <UnorderedList fontSize="20pt">
          <Appear>
            <ListItem>
              Javascript is faster than Python in many cases thanks to{" "}
              <Link fontSize="22pt" target="_blank" herf="https://v8.dev/">
                V8
              </Link>{" "}
              engine.{" "}
              <Link
                fontSize="22pt"
                target="_blank"
                href="https://neoteric.eu/blog/node-js-vs-python/#:~:text=The%20faster%20it%20is%20executed,fastest%20server%2Dside%20solutions%20around."
              >
                Node.js vs Python
              </Link>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <Link fontSize="22pt" target="_blank" href="https://bun.sh/">
                Bun.js
              </Link>{" "}
              is the newest Javascript engine which is 3x faster than Node.js
              powered by V8.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              In the 2020 StackOverflow developers survey, Javascript holds the
              top position with 67.7% out of 65,000 developers using it.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>Javascript and WebAPIs has many cool features.</ListItem>
          </Appear>
        </UnorderedList>
        <Appear>
          <ReactWordcloud
            words={[
              { text: "OOP", value: 9 },
              { text: "Dynamic Typing", value: 9 },
              { text: "Async", value: 9 },
              { text: "Funtional programming", value: 9 },
              { text: "Events", value: 9 },
              { text: "WebGL", value: 9 },
              { text: "WebRTC", value: 9 },
              { text: "Audio/Video APIs", value: 9 },
              { text: "Optional chaining", value: 9 },
              { text: "Design Pattern", value: 9 },
              { text: "React", value: 9 },
              { text: "Flutter", value: 9 },
              { text: "WebAssembly", value: 9 },
              { text: "Web workers", value: 9 },
              { text: "Local storage", value: 9 },
              { text: "Web Socket", value: 9 },
              { text: "Payment APIs", value: 9 },
              { text: "Typescript", value: 9 },
              { text: "Webpack", value: 9 },
              { text: "Babel", value: 9 },
              { text: "Jest", value: 9 },
              { text: "Node.js", value: 9 },
              { text: "Express.js", value: 9 },
              { text: "Microservice", value: 9 },
            ]}
            options={{
              rotations: 1,
              rotationAngles: [0, 60],
              fontSizes: [25, 30],
              padding: 4,
            }}
            size={[600, 300]}
          />
        </Appear>
      </FlexBox>
    </Slide>
  );
}

export default SlideMisconcept2;
