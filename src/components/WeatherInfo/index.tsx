import { AxiosResponse } from "axios";


type Props = {
    weather: AxiosResponse<any, any> | undefined
}

function WheatherInfo({weather}: Props) {
    console.log(weather)
    return (
        <div>
            <h2>{weather?.data.name}</h2>
            <img src={`http://openweathermap.org/img/wn/${weather?.data.weather[0].icon}.png`}/>
        </div>
    )
}

export default WheatherInfo;