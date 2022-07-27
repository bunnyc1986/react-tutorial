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
      <Heading>What's Web development?</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Let users read the information/data effectively.</ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Text>Allow users interact with the information intuitively.</Text>
            <UnorderedList>
              <ListItem>Knowing what is being looked at.</ListItem>
              <ListItem>Knowing what to do next.</ListItem>
            </UnorderedList>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>Keep the UX up-to-date with users' workflow changes.</ListItem>
        </Appear>
        <Appear>
          <ListItem>Iterate the design according to users' feedbacks.</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  );
}

export default WhatsWebDev;
