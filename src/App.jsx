import './App.css'
import Banner from './components/Banner'
import Events from './components/Events'
import Navbar from './components/Navbar'
import Shows from './components/Shows'

function App() {
  

  return (
    <>
    <div className='mx-10 my-5 max-[480px]:mx-2'>
      <Navbar/>
    </div>
    <div className='mx-10 '>
        <Banner />
    </div>
    <div className="mt-10 mx-20">
        <Shows />
      </div>
    <div className="mt-10 mx-20">
      <Events />
    </div>
    </>
  )
}

export default App
