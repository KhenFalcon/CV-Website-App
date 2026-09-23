'use client';
// Context Components
import { LocalizationProvider } from '../components/LocalizedContext';
// Content Components
import Background from '../components/Background';
import Footer from '../components/Footer';
import LanguageSwitch from '../components/LanguageSwitch';
// Project-Specific Components
import Header from './components/Header';
import Content from './components/Content';

export default function Home() {
  return (
    <LocalizationProvider>
      <div className="main-container">
        <Background />
        <Content />
      <Footer />
      </div>
      <Header />
      <LanguageSwitch />
    </LocalizationProvider>
  )
}