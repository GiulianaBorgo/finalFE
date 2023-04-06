import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './routes/_index'
import Footer from './components/Footer'
import Contact from './routes/contact'
import DetailDentist from './routes/detailDentist'
import Destacados from './routes/favs'
import { Context, ContextProvider } from './Context'

function App() {

  const contextValue = useContext(Context)

  return (
    <div  className={contextValue.theme ? "light-theme" : "dark-theme"}>
      
      <Header/>
      <Routes >
        <Route path='/' />
          <Route index element={<Home/>}/>
          <Route path='/dentist/:id' element={<DetailDentist/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/favs' element={<Destacados/>}/> 
          <Route path="*" element={<div> Disculpe, el sitio al que desea ingresar no existe.</div>} />
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
