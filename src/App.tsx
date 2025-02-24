import { useState, useRef } from 'react'
import './App.css'
import axios, { AxiosResponse } from 'axios'
import WheatherInfo from './components/WeatherInfo'
import { BaselineSearch, FaceInClouds } from './utils/icons'

function App() {
  const [weather, setweather] = useState<AxiosResponse<any, any>>()
  const inputRef = useRef<HTMLInputElement>(null)

  async function searchCity() {
     if (inputRef.current?.value.trim()) {
  
   
    const city = inputRef.current?.value;
    const key = import.meta.env.VITE_API_KEY

    const url: string = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiGetData = await axios.get(url);

    setweather(apiGetData);
    // console.log(weather)
    } else {
      alert('Por favor, insira uma cidade.')
    }
  }

  return (
    <div className='flex flex-col items-center px-8 min-w-screen min-h-screen w-full h-full gap-8 bg-linear-120 from-[#a1c4fd] to-[rgba(194,233,251,1)]'>
      <p className='md:text-4xl text-2xl my-8 font-semibold text-cyan-900 flex flex-row'>Previsão do tempo <span className='ml-1 rounded-[32px]'><FaceInClouds/></span></p>
      <div className='flex flex-row my-8 items-center gap-y-[4vh]'>
        <input className='md:w-[18rem] w-[12rem] h-[3rem] border-1 align-middle border-gray-400 rounded-l-sm p-1'
               ref={inputRef} type='text'
               placeholder='Digite a cidade' inputMode='search'
               onKeyDown={e => e.key === 'Enter' && searchCity()}/>
        <button className='w-[3rem] h-[3rem] flex justify-center items-center rounded-r-md rounded-se-lg text-cyan-50 font-semibold bg-cyan-600 hover:bg-cyan-700 hover:text-white active:bg-cyan-800'
          onClick={searchCity}
          type='submit'
          >
          <BaselineSearch />
        </button>
      
      </div>
      <div className='flex flex-col md:flex-row justify-around md:justify-center gap-x-[16vw] gap-y-[8vw]'>
        <div className=''>
          { weather && <WheatherInfo weather={weather}/> }
        </div>

        <div> 
          

          { weather && <WheatherInfo weather={weather}/> }

        </div>
      </div>
    </div>
  )
}

export default App
