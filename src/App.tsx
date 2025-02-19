import { useState, useRef } from 'react'
import './App.css'
import axios, { AxiosResponse } from 'axios'
import WheatherInfo from './components/WeatherInfo'

function App() {
  const [weather, setweather] = useState<AxiosResponse<any, any>>()
  const inputRef = useRef<HTMLInputElement>(null)

  async function searchCity() {
     if (inputRef.current?.value.trim()) {
  
   
    const city = inputRef.current?.value;
    const key = import.meta.env.VITE_API_KEY

    const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiGetData = await axios.get(url);

    setweather(apiGetData);
    // console.log(weather)
    } else {
      alert('Por favor, insira uma cidade.')
    }
  }

  return (
    <div className='mx-7 my-7 gap-8 '>
      <h1>Previsão do tempo</h1>
      <input ref={inputRef} type='text' placeholder='Digite a cidade'/>
      <button className='w-32 h-8 rounded-bl-md rounded-se-lg text-cyan-50 font-semibold bg-cyan-600 hover:bg-cyan-700 hover:text-white active:bg-cyan-800'
        onClick={searchCity}
        type='button'
        >
        Buscar
      </button>

      { weather && <WheatherInfo weather={weather}/>
      }
    </div>
  )
}

export default App
