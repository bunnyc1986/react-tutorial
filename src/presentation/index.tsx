import { Deck, FlexBox, AnimatedProgress, Box, FullScreen } from 'spectacle';
import SlideIntro from './Slide-Intro';
import SlideMisconcept1 from './Slide-Misconcept1';
import SlideMisconcept2 from './Slide-Misconcept2';
import SlideMisconcept3 from './Slide-Misconcept3';
import SlideWhatsWebDev from './Slide-WhatsWebDev';
import SlideGettingStarted from './Slide-GettingStarted';
import SlideReactConcept from './Slide-ReactConcept';

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <AnimatedProgress />
    </Box>
  </FlexBox>
);

function MyDeck() {
  return (
    <Deck template={template}>
      <SlideIntro />
      <SlideMisconcept1 />
      <SlideMisconcept2 />
      <SlideMisconcept3 />
      <SlideWhatsWebDev />
      <SlideGettingStarted />
      <SlideReactConcept />
    </Deck>
  );
}
export default MyDeck;