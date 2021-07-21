import React from 'react';
import axios from "axios";

const Form = ({setWeather, city, setCity}) => {
    const getWeather = (e) => {
        e.preventDefault();
        let API_KEY = '5fc679a9dfbf921b5d63b8744835c4df';
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            .then(({data}) => setWeather(data))
            .catch(() => console.error('Введите город корректно'));
        setCity('')
    };
    const inputHandler = (e) => {
        setCity(e.target.value)
    };
    return (
        <form className='form' action="" onSubmit={getWeather}>
            <input className='input_text' type="text" onChange={inputHandler} value={city} placeholder='Введите город'/>
            <button className='form_btn' type='submit'>Поиск</button>
        </form>
    );
};

export default Form;
