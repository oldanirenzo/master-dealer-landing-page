import React from 'react'
import '../assets/css/contact.css'
import axios from 'axios'
import { useForm } from '../hooks/useForm'

export const Contact = () => {

    const initialForm = {
        name: '',
        email: '',
        phone: ''
    }
    const [formValues, handleInputChange, reset] = useForm(initialForm)


    const handleSubmit = event => {
        event.preventDefault();

        let regExpresionEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!formValues.name || !formValues.email || !formValues.phone) {
            alert('You must enter your name, email and phone.')
            return;
        }

        if (formValues.phone.length < 7) {
            alert('Phone number must have at least 7 digits, please verify and try again.')
            return;
        }

        if (formValues.email.match(!regExpresionEmail)) {
            alert('Email invalid, please verify and try again.')
            return;
        }

        axios({
            method: 'post',
            url: 'https://hook.integromat.com/x42xpo92uru5m36kn3dt7qbdy7zl2u4z',
            data: {
                'name': formValues.name,
                'email': formValues.email,
                'phone': formValues.phone
            }
        });

        reset();
        alert("Thanks! We'll be in touch.")
    }


    return (
        <div className="contact">
            <div className="contact-info">

                <h1>CONTACT US</h1>
                <p>Please leave your contact information to provide you with all the information you need.</p>
            </div>
            <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
                <input type="text" name="name" value={formValues.name} placeholder="Full Name" onChange={handleInputChange} />
                <input type="email" name="email" value={formValues.email} placeholder="E-mail Address" onChange={handleInputChange} />
                <input type="number" name="phone" value={formValues.phone} placeholder="Phone" onChange={handleInputChange} />
                <input type="text" name="message" placeholder="Message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}
