import { useState, useEffect } from "react";

import { Persona, PersonaSize, Spinner, Calendar } from "@fluentui/react";
import { FlexBox } from "spectacle";

const WEATHER_API_ID = "76c514b9625387e73cd20895225fafac";

interface LatLng {
  lat: number;
  lng: number;
}

interface Weather {
  temp: number;
  feelsLike: number;
  description: string;
  iconUrl: string;
}

async function fetchWeather(position: LatLng): Promise<Weather> {
  const { lat, lng } = position;
  const requestUrl =
    `/api/weather/data/2.5/weather?` +
    `lat=${lat}&lon=${lng}&units=metric&appid=${WEATHER_API_ID}`;
  const resp = await fetch(requestUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const {
    weather: [{ description, icon }],
    main: { temp, feels_like },
  } = await resp.json();
  return {
    temp,
    feelsLike: feels_like,
    description,
    iconUrl: `//openweathermap.org/img/wn/${icon}@2x.png`,
  };
}

function useCurrentWeather() {
  const [weather, setWeather] = useState<Weather>();

  const loadWeatherbyLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const {
        coords: { latitude: lat, longitude: lng },
      } = pos;
      const weather = await fetchWeather({ lat, lng });
      setWeather(weather);
    });
  };

  useEffect(() => {
    loadWeatherbyLocation();
  }, []);

  return weather;
}

function WeatherWidget() {
  const currentWeather = useCurrentWeather();
  if (!currentWeather) {
    return (
      <Spinner label="Loading..." />
    );
  }
  const { temp, feelsLike, description, iconUrl } = currentWeather;
  return (
    <FlexBox bg="white">
      <Persona
        size={PersonaSize.size72}
        imageUrl={iconUrl}
        text={description}
        secondaryText={`Temperature: ${temp} \u00b0C`}
        tertiaryText={`Feels like: ${feelsLike} \u00b0C`}
      />
      <Calendar showGoToToday/>
    </FlexBox>
  );
}

export default WeatherWidget;
