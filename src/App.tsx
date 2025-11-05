import Hero from './components/Hero'
import Education from './components/Education'
import About from './components/About'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import StructuredData from './components/StructuredData'

function App() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen overflow-x-hidden">
        <Hero />
        <Education />
        <About />
        <FAQ />
        <Footer />
      </div>
    </>
  )
}

export default App
