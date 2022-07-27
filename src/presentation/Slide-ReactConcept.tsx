import { useState } from "react";
import { FlexBox, Slide, Markdown, Text } from "spectacle";
import { Toggle } from "@fluentui/react";

import Clock from "../widgets/Clock";
import WeatherWidget from "../widgets/Weather";

function SlideReactConcept() {
  const [showWeather, setShowWeather] = useState(false);

  return (
    <Slide>
      <FlexBox flexDirection="row">
        <FlexBox width="50%">
          <Markdown componentProps={{ fontSize: "22pt" }}>
            {`
          # React Concept

          - Component (Class or _Function_)
          - Props
          - States 
          - Render
          - Hooks
        `}
          </Markdown>
        </FlexBox>
        <FlexBox width="50%" flexDirection="column">
          <Clock locale="en-US" />
          <Toggle title="Show weather" onChange={(_, checked) => {setShowWeather(checked!)}} />
          {showWeather ? <WeatherWidget /> : null}
        </FlexBox>
      </FlexBox>
    </Slide>
  );
}

export default SlideReactConcept;
