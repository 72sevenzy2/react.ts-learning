import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { type JSX } from "react";

interface Weather { 
  temp: number; 
  description: string; 
}

const MutateApp = (): JSX.Element => {
  const api_key: string = "6750c0ebce9c78bc663046acca0f650b";

  const { data, isLoading, error, isError } = useQuery<Weather>({
    queryKey: ["weather", "london"],
    queryFn: async (): Promise<Weather> => {
      const res = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          q: "London",
          appid: api_key,
          units: "imperial"
        }
      });

      return {
        temp: res.data.main.temp,
        description: res.data.weather[0].description
      };
    }
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {(error as Error).message}</p>;

  return (
    <div>
      <h2>Weather in London</h2>
      <p>Temperature: {data?.temp}°F</p>
      <p>Condition: {data?.description}</p>
    </div>
  );
};

export default MutateApp;