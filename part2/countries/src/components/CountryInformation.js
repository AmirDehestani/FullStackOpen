import { useEffect, useState } from 'react';
import CountryServices from '../services/CountryServices';

const CountryInformation = ({ country }) => {
  const [weather, setWeather] = useState(null);

  const [lat, lon] = country.capitalInfo.latlng;

  useEffect(() => {
    CountryServices.getWeather(lat, lon).then((response) =>
      setWeather({
        temperature: response.main.temp,
        imageSrc: response.weather[0].icon,
        windSpeed: response.wind.speed,
      })
    );
  }, []);

  if (weather) {
    return (
      <>
        <div>
          <h2>{country.name.common}</h2>
          <p>capital {country.capital}</p>
          <p>area {country.area}</p>
          <h3>languages</h3>
          <ul>
            {Object.values(country.languages).map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
          <img src={country.flags.png} alt={country.name.common} />
        </div>
        <div>
          <h2>Weather in {country.capital}</h2>
          <p>temperature {weather.temperature} Celcius</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.imageSrc}@2x.png`}
            alt="icon"
          />
          <p>wind {weather.windSpeed}m/s</p>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default CountryInformation;
