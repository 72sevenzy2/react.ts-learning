// src/components/WeatherDashboard.tsx
import React, { useReducer, useEffect } from "react";

interface WeatherData {
    name: string; main: { temp: number; humidity: number; };
    weather: { description: string; icon: string; }[];
}
interface ForecastItem { dt_txt: string; main: { temp: number; }; weather: { description: string; icon: string; }[]; }
interface ForecastData { list: ForecastItem[]; }
type State = {
    city: string; weather: WeatherData | null; forecast: ForecastData | null; error: string | null; loading: boolean;
};

type Action =
    | { type: "SET_CITY"; payload: string }
    | { type: "FETCH_START" }
    | { type: "FETCH_SUCCESS"; payload: { weather: WeatherData; forecast: ForecastData } }
    | { type: "FETCH_ERROR"; payload: string };

const initialState: State = { city: "", weather: null, forecast: null, error: null, loading: false, };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "SET_CITY":
            return { ...state, city: action.payload };

        case "FETCH_START":
            return { ...state, loading: true, error: null };

        case "FETCH_SUCCESS":
            return {
                ...state,
                loading: false,
                weather: action.payload.weather,
                forecast: action.payload.forecast,
            };

        case "FETCH_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload,
                weather: null,
                forecast: null,
            };

        default: return state;
    }
}

// ---------------- Component ----------------
const API_KEY = "YOUR_API_KEY_HERE";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const WeatherDashboard: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchWeather = async (cityName: string) => {
        try {
            dispatch({ type: "FETCH_START" });

            // Current weather
            const weatherRes = await fetch(
                `${BASE_URL}/weather?q=${cityName}&units=metric&appid=${API_KEY}`
            );
            if (!weatherRes.ok) throw new Error("City not found");
            const weatherData: WeatherData = await weatherRes.json();

            // Forecast
            const forecastRes = await fetch(
                `${BASE_URL}/forecast?q=${cityName}&units=metric&appid=${API_KEY}`
            );
            if (!forecastRes.ok) throw new Error("Forecast not found");
            const forecastData: ForecastData = await forecastRes.json();

            dispatch({ type: "FETCH_SUCCESS", payload: { weather: weatherData, forecast: forecastData } });
            localStorage.setItem("lastCity", cityName);
        } catch (err: any) {
            dispatch({ type: "FETCH_ERROR", payload: err.message });
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void | undefined => {
        e.preventDefault();
        if (!state.city) return;
        fetchWeather(state.city);
    };

    useEffect((): void => {
        const lastCity = localStorage.getItem("lastCity");
        if (lastCity) {
            dispatch({ type: "SET_CITY", payload: lastCity });
            fetchWeather(lastCity);
        }
    }, []);

    return (
        <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
            <h1>Weather Dashboard 🌦️</h1>

            {/* Search Form */}
            <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    value={state.city}
                    onChange={(e) => dispatch({ type: "SET_CITY", payload: e.target.value })}
                    placeholder="Enter city"
                    style={{ padding: "8px", width: "70%" }}
                />
                <button type="submit" style={{ padding: "8px" }}>
                    Search
                </button>
            </form>

            {/* Loading */}
            {state.loading && <p>Loading...</p>}

            {/* Error */}
            {state.error && <p style={{ color: "red" }}>{state.error}</p>}

            {/* Current Weather */}
            {state.weather && (
                <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "20px" }}>
                    <h2>{state.weather.name}</h2>
                    <p>{state.weather.main.temp}°C</p>
                    <p>{state.weather.weather[0].description}</p>
                    <p>Humidity: {state.weather.main.humidity}%</p>
                    <img
                        src={`https://openweathermap.org/img/wn/${state.weather.weather[0].icon}@2x.png`}
                        alt={state.weather.weather[0].description}
                    />
                </div>
            )}

            {/* Forecast */}
            {state.forecast && (
                <div>
                    <h3>5-Day Forecast</h3>
                    {state.forecast.list.slice(0, 5).map((item, idx) => (
                        <div
                            key={idx}
                            style={{ border: "1px solid #eee", padding: "5px", marginBottom: "5px" }}
                        >
                            <p>{item.dt_txt}</p>
                            <p>{item.main.temp}°C</p>
                            <p>{item.weather[0].description}</p>
                            <img
                                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                alt={item.weather[0].description}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WeatherDashboard;