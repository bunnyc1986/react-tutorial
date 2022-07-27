import {
  Appear, Heading, Link, ListItem, Quote, Slide, UnorderedList
} from "spectacle";

function SlideMisconcept2() {
  return (
    <Slide>
      <Heading>Misconcept #2</Heading>
      <Appear>
        <Quote>Frontend development is making web pages.</Quote>
      </Appear>
      <UnorderedList fontSize="22pt">
        <Appear>
          <ListItem>Yes and No.</ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Web is a cross platform technology that bridge the machine world and
            the hunman world. More and more applications are moving forwards
            using web technology.
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Many day to day tools are actually developed using web technologies,
            like: Gmail, Google docs, Slack, VSCode, Online games, D-Chat, Wechat micro-apps, Web monitor (webviz)
            and many mobile apps and smart home devices, e.g.{" "}
            <Link fontSize="22pt" href="https://homebridge.io/" target="_blank">
              homebridge.
            </Link>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Even space crafts! <br />
            <Link
              fontSize="22pt"
              href="https://www.theverge.com/2020/5/30/21275753/nasa-spacex-astronauts-fly-crew-dragon-touchscreen-controls"
              target="_blank"
            >
              SpaceX &amp; NASA used Chromium and JS in the Dragon Spaceship.
            </Link>
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  );
}

export default SlideMisconcept2;
