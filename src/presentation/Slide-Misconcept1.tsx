import {
    Appear, Heading, ListItem,
    Quote, Slide, Text,
    UnorderedList
} from "spectacle";

function SlideMisconcept1() {
  return (
    <Slide>
      <Heading>Misconcept #1</Heading>
      <Appear>
        <Quote>Web development is easy.</Quote>
      </Appear>
      <Appear>
        <Quote>Frontend development doesn't need technical deepth.</Quote>
      </Appear>
      <Appear>
        <Text fontSize="20pt">
          A good frontend engineer needs solid CS fundamentals, PLUS:{" "}
        </Text>
        <UnorderedList fontSize="20pt">
          <Appear>
            <ListItem>
              HTML, CSS, Javascript, Frameworks, Testing, Protocals, Browser APIs
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>Security, UI/UX Design, Computer Graphics, Math</ListItem>
          </Appear>
          <Appear>
            <ListItem>Database, Design Pattern, Machine learning</ListItem>
          </Appear>
        </UnorderedList>
      </Appear>
    </Slide>
  );
}

export default SlideMisconcept1;
