import { AxiosResponse } from "axios";
import './styles.css'

type Props = {
    weather: AxiosResponse<any, any> | undefined
}

function WheatherInfo({weather}: Props) {
    const city = weather?.data.name;
    const icon = weather?.data.weather[0].icon;
    const temp = Math.round(weather?.data.main.temp);
    const description = weather?.data.weather[0].description;
    const feelsLike  = Math.round(weather?.data.main.feels_like);
    const humidity = weather?.data.main.humidity;
    const pressure = weather?.data.main.pressure;


    return (
        <div >
            <h2>{city}</h2>
            <div className="w-24">
                <img src={`http://openweathermap.org/img/wn/${icon}.png`}/>
                <p>
                {temp}°C
                </p>
            </div>
            <p>
                {description}
            </p>
            <div>
                <p>Sensação térmica: {feelsLike}°C</p>
                <p>Umidade: {humidity}%</p>
                <p>Pressão: {pressure}</p>
            </div>
        </div>
    )
}

export default WheatherInfo;