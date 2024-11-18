import {WeatherData} from "./Data.tsx";


interface WeatherProps {
    message: string;
    weather: WeatherData | null,
}

const Weather = ({message,weather}: WeatherProps) => {

    if (!weather) {
        return <div className={"infoWeath"}>{message}</div>;
    }

    const formatSunset:Date = new Date(weather.sunset * 1000);
    const sunsetTime = formatSunset.toLocaleString();
    if (message) {
        return (
            <div className={'infoWeath'}>{message}</div>
        )

    } else {
        return (
            <div className={'infoWeath'}>
                <p>Location: {weather.country}, {weather.city}</p>
                <p>Temp: {weather.temp} </p>
                <p>Pressure: {weather.pressure}</p>
                <p>Sunset: {sunsetTime}</p>
            </div>
        );
    }
};

export default Weather;