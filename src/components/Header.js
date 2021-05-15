import React from 'react'
import logo from '../assets/images/logo.svg'
import '../assets/css/header.css'

export const Header = () => {
    return (
        <header>
            <img src={logo} alt="Logo" />
        </header>
    )
}
