import InfoBox from "./InfoBox";
import Searchbox from "./SearchBox";
import { useState } from 'react';

export default function WeatherApp() {
    const [WeatherInfo , setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 24.85,
        temp: 26.85,
        tempMin: 24.85,
        tempMax: 28.85,
        humidity: 60,
        weather: "Clear Sky"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Narayan</h2>
            <Searchbox updateInfo={updateInfo} />
            <InfoBox Info={WeatherInfo} />
        </div>
    );
}