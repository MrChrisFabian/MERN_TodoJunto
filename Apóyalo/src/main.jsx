import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import PersonCard from './components/PersonCard'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersonCard nombre='Christopher Mendoza' Edad={19} HairColor='Black' />
    <PersonCard nombre='Francisco Boiser' Edad={34} HairColor='Black' />
    <PersonCard nombre='Gabriela Ayala' Edad={19} HairColor='Yellow' />
    <PersonCard nombre='Iago Mendoza' Edad={16} HairColor='Black' />
  </React.StrictMode>,
)
