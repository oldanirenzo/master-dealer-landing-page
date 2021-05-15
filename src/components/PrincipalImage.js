import React from 'react'
import roof from '../assets/images/roof.svg'
import '../assets/css/image.css'

export const PrincipalImage = () => {
    return (
        <div className="principal-image">
            <img src={roof} alt='Roof' />
        </div>
    )
}
