import propTypes from 'prop-types'

import './person.css'


const PersonCard = ({ nombre, Edad, HairColor }) => {

    return (
        <div className='card'>
            <h1>{nombre}</h1>
            <p>Age: {Edad}</p>
            <p>Hair Color: {HairColor}</p>
        </div>
    )
}

PersonCard.propTypes = {
    nombre: propTypes.string.isRequired,
    Edad: propTypes.number.isRequired,
    HairColor: propTypes.string.isRequired,
    setEdad: propTypes.func.isRequired,
}


export default PersonCard