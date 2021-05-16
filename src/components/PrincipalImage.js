import React from 'react'
// import roof from '../assets/images/roof.svg'
import principalImage from '../assets/images/principal-image.svg'
import '../assets/css/image.css'

export const PrincipalImage = () => {
    return (
        <div className="principal-image">
            <img src={principalImage} alt='Roof' />
        </div>
    )
}
