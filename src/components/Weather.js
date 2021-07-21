import React from 'react';

const Weather = ({weather}) => {
    const getTime = (times) => {
        let time = new Date(times);
        let hours = time.getHours();
        let minutes = time.getMinutes();
        if (minutes < 10) {
            minutes = ` 0${minutes}`
        }
        return `${hours} :${minutes}`
    };
    return (
        <div>
            <div className='top'>
                <p className='time'>{getTime(weather.dt * 1000)}</p>

                <p>Ветер: {weather.wind.speed} м/с </p>
            </div>
            <p className='city'>{weather.name}</p>

            <div className='weather_info'>
                <p className='temp'>{Math.round(weather.main.temp - 273.15)} °</p>
                <p><img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="weather"/></p>
            </div>


            <p className='feels_like'>Ощущается как: {Math.ceil(weather.main.feels_like - 273.15)} ° </p>

            <p className='pressure'>Давление: {weather.main.pressure} мм рт.ст.</p>

            <p className='humidity'>Влажность: {weather.main.humidity} % </p>


            <p className='sunrise'>Рассвет: {getTime(weather.sys.sunrise * 1000)}</p>

            <p className='sunset'>Закат: {getTime(weather.sys.sunset * 1000)}</p>
        </div>

    );
};

export default Weather;
