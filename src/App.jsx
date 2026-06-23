import { useState } from 'react'
// assets
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// components
import Background from './components/Background.jsx'
import Header from './components/Header.jsx'
import Content from './components/Content.jsx'
// css
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Background />
      <Content />
      <Header />
    </>
  )
}

export default App
