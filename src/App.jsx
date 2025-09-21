import Adventage from './Adventage'
import './App.css'
import Carusel from './Carusel'
import Footer from './Footer'
import Map from './Location'
import Navbar from './Navbar'
import Using from './Using'

function App() {

  return (
    <>
      <Navbar/>
    <div className='w-full h-full pt-30 px-10 space-y-20'>
    <Carusel/>
    <Using/>
    <Adventage/>
    <Map/>
    </div>
    <Footer/>   
    </>
  )
}

export default App
