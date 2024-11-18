import {useState} from "react";
import {api_key, base_url} from "../utils/constants.ts";
import Form from "./Form.tsx";
import Weather from "./Weather.tsx";


export interface WeatherData {
    country: string;
    city: string;
    temp: number;
    pressure: number;
    sunset: number;
}

const Data = () => {
    const [weatherInfo, setWeatherInfo] = useState<WeatherData|null>(null);
    const [message,setMessage] = useState<string>('Enter city name');

    const getWeather = (city:string) => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(result => result.json())
            .then(data => {
                console.log(data)
                setWeatherInfo({
                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset:  data.sys.sunset
                })
                setMessage('')
            })
            .catch(error =>{
                console.log(error)
                setMessage("Enter correct city name")
            } );
    }
    return (
        <div>
            <Form getWeather={getWeather} />
            <Weather message={message} weather={weatherInfo} />
        </div>
    );
};

export default Data;