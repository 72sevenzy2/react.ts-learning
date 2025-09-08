import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { type JSX } from "react";

const api_key: string = "6750c0ebce9c78bc663046acca0f650b";

interface Weather { temp: number, description: string }

const MutateApp = (): JSX.Element => {

  const { data, isLoading, isError, error } = useQuery<Weather>({
    queryKey: ["blah1", "america"],
    queryFn: async (): Promise<Weather> => {
      const res = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          q: "London",
          id: api_key,
          units: "metric"
        }
      })
      return {
        temp: res.data.main.temp,
        description: res.data.weather[0].description
      }
    }
  })

  if (isLoading) { return <p>Loading..</p> }
  if (isError) { return <p>Error: {(error as Error).message}</p> }

  return (
    <div>
      <h1>weather stats london</h1>
      <p>{data?.temp}</p>
      <p>{data?.description}</p>
    </div>
  )
}

export default MutateApp;