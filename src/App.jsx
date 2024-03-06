
import './App.css'
import Navbar from './components/header/Navbar'
import Product from './components/cards/Product'
import Footer from './components/footer/Footer'
import Feedback from './components/cards/Feedback'

function App() {

  return (
    <>
      <header className='bg-gray-200 p-3'>
        <Navbar/>
      </header>
      <main className='w-[90%] mx-auto'>
        <p className='mt-10 font-bold text-[32px]'>Product List</p>
        <Product/>
        <p className='mt-10 font-bold text-[32px]'>Feedback From Client</p>
        <Feedback/>
      </main>
      <footer className='bg-gray-200 mt-10'>
        <Footer/>
      </footer>
    </>
  )
}

export default App
