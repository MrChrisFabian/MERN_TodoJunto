import React from 'react'
import propTypes from 'prop-types'
import './person.css'

const Birthday = ({ setEdad, Edad }) => {
    return (
        <button onClick={() => { setEdad(Edad + 1) }}>Add Birthday</button>
    )
}
Birthday.propTypes = {
    setEdad: propTypes.func.isRequired,
    Edad: propTypes.number.isRequired,
}
export default Birthday