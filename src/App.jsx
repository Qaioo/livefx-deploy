import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Intro from './components/Intro/Intro.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import Gear from './components/Gear/Gear.jsx'
import Contact from './components/Contacts/Contact.jsx'

import CustomerSlider from './components/CustomerSlider/CustomerSlider'


function App() {

  return (
    <>
      <Navbar />
      <div className="content">
          <Intro />
          {/* <Customers /> */}
          <CustomerSlider />
          <Gallery />
          <Gear />
          <Contact />
        </div>
    </>
  )
}

export default App
