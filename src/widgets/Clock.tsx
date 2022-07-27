import { useEffect, useState } from "react";
import styled from "styled-components";
import { Toggle } from "@fluentui/react";
import { FlexBox } from "spectacle";

const TimeDisplay = styled.span`
  font-size: 32pt;
`;

type ClockProps = {
  locale: string;
};

function useCurrentTime() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const handle = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => {
      clearInterval(handle);
    };
  }, []);

  return now;
}

function Clock(props: ClockProps) {
  const { locale } = props;
  const now = useCurrentTime();
  const [showDate, setShowDate] = useState(false);
  const dateDisplay = showDate ? now.toLocaleDateString(locale) : "";
  const timeDisplay = now.toLocaleTimeString(locale);
  return (
    <FlexBox flexDirection="column" bg="white" color="black" width="50%">
      <div>
        <TimeDisplay>{dateDisplay} {timeDisplay}</TimeDisplay>
      </div>
      <div>
        <Toggle label="Show Date" onChange={(_, checked) => setShowDate(checked!)} />
      </div>
    </FlexBox>
  );
}

export default Clock;
