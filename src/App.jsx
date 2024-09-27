import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cards from './assets/componentes/Cards'
import './App.css'
import YouTubePlayer from './assets/componentes/YoutubePlayer'

function App() {
  const [count, setCount] = useState(0)
  const videoUrl = "https://www.youtube.com/embed/OH7svIhd3a4?si=T7bsg0DLhq3IeXJK";

  return (
    <>
     <Cards/>
   
      <h1>Vite + React</h1>
   
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <YouTubePlayer url={videoUrl} />
      
    </>
  )
}

export default App
