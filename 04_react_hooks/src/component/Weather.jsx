import React, { useState, useEffect } from 'react';  

const Weather = () => {  
  const [city, setCity] = useState('Nanjing'); // 默认城市  
  const [weatherData, setWeatherData] = useState(null);  
  const [error, setError] = useState(null);  

  // 获取天气数据  
  const fetchWeatherData = async () => {  
    try {  
      const response = await fetch(  
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=18eb49b8e8d489367dac71119066f234&units=metric`  
      );  

      if (!response.ok) {  
        throw new Error('城市未找到');  
      }  

      const data = await response.json();  
      setWeatherData(data);  
      setError(null); // 清除错误  
    } catch (err) {  
      setError(err.message);  
      setWeatherData(null); // 清空天气数据  
    }  
  };   

  const handleSearch = () => {  
    fetchWeatherData();  
  };  

  return (  
    <div style={{ textAlign: 'center', padding: '20px' }}>  
      <h1>Weather Finder</h1>  
      <input  
        type="text"  
        value={city}  
        onChange={(e) => setCity(e.target.value)}  
        placeholder="输入城市名称"  
      />  
      <button onClick={handleSearch}>查询</button>  

      {error && <p style={{ color: 'red' }}>{error}</p>}  

      {weatherData && (  
        <div>  
          <h2>{weatherData.name}</h2>  
          <h3>  
            {weatherData.main.temp}°C  
            <br />  
            感觉温度: {weatherData.main.feels_like}°C  
          </h3>  
          <p>{weatherData.weather[0].description}</p>  
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>  
            <div>  
              <strong>{weatherData.main.pressure} hPa</strong>  
              <p>气压</p>  
            </div>  
            <div>  
              <strong>{weatherData.main.humidity}%</strong>  
              <p>湿度</p>  
            </div>  
            <div>  
              <strong>{weatherData.wind.speed} m/s</strong>  
              <p>风速</p>  
            </div>  
            <div>  
              <strong>{new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</strong>  
              <p>日出</p>  
            </div>  
            <div>  
              <strong>{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</strong>  
              <p>日落</p>  
            </div>  
          </div>  
        </div>  
      )}  
    </div>  
  );  
};  

export default Weather;