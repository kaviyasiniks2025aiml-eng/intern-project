import { useState } from 'react'
import heroImg from './assets/hero.png'


function App() {
  return (
    <div className = "min-h-screen flex flex-col items-center justify-centre p-4">
      <h1 className="text-3xl font-bold text-center">
        Welcome to React
      </h1>
  <p className="text-gray-500 text-lg text-center">
    Learn react step by step.
  </p>
  <button className="bg-blue-500 text-white px-5 py-2 rounded md m-1 cursor-pointer">
    submit
  </button>
    </div>
  )
}

export default App