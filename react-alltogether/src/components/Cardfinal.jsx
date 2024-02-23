import React, { useState } from 'react'
import PersonCard from './personCard'
import Birthday from './Birthday'
const cardfinal = () => {
  const [Edad, setEdad] = useState(19)
  const [Edad0, setEdad0] = useState(19)
  const [Edad1, setEdad1] = useState(7)
  return (
    <>
      <PersonCard nombre='Gabriela Ayala' Edad={Edad} HairColor='Yellow' />
      <Birthday setEdad={setEdad} Edad={Edad} />

      <PersonCard nombre='Christopher Mendoza' Edad={Edad0} HairColor='Black' />
      <Birthday setEdad={setEdad0} Edad={Edad0} />

      <PersonCard nombre='Katherine Mendoza' Edad={Edad1} HairColor='Black' />
      <Birthday setEdad={setEdad1} Edad={Edad1} />


    </>
  )
}

export default cardfinal