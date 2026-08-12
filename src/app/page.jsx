import Background from './components/Background'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <div className="main-container">
        <Background />
        <Content />
      </div>
      <Footer />
      <Header />
    </>
  )
}
