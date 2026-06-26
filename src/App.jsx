import { useState } from 'react'
// components
import Background from './components/Background.jsx'
import Header from './components/Header.jsx'
import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Background />
      <Content />
      <Footer />
      <Header />
    </>
  )
}

export default App
