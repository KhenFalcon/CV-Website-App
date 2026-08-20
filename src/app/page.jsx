'use client';
// Context Components
import { LocalizationProvider } from './components/LocalizedContext';
// Content Components
import Background from './components/Background'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import LanguageSwitch from './components/LanguageSwitch';

export default function Home() {
  return (
    <LocalizationProvider>
      <div className="main-container">
        <Background />
        <Content />
      </div>
      <Footer />
      <Header />
      <LanguageSwitch />
    </LocalizationProvider>
  )
}
