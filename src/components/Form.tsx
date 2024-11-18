import {FormEvent, useState} from "react";

interface Props {
    getWeather: (city:string) => void
}

const Form = ({getWeather}:Props) => {
    const [city,setCity] = useState('');
    const getCity = (e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        getWeather(city);
        setCity('');

    }

    return (
        <form onSubmit={getCity}>
            <input onChange={e => setCity(e.target.value)}  type="text" value={city}/>
            <button  type={"submit"}>Get Weather</button>
        </form>
    );
};

export default Form;