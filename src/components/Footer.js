import React from 'react'
import '../assets/css/footer.css'

export const Footer = () => {
    return (
        <footer>
            <div className="container">

                <div className="footer-left">
                    <h2>
                        Why choose M+S Electric
                    </h2>
                    <ul>
                        <li>24 Hour a day emergency service</li>
                        <li>Certified Experience</li>
                        <li>Competitive Pricing</li>
                        <li>Lifetime Guarantee</li>
                        <li>20+ Years Experience</li>
                        <li>Solar Contractor</li>
                    </ul>
                </div>
                <hr />
                <div className="footer-mid">
                    <h2>Our office</h2>
                    <ul>
                        <li>Address: 6430 Sunset Corporate <br />
                        Dr. Las Vegas, NV 89120</li>
                        <li>Phone: (725) 2289649</li>
                        <li>Email: mail@example.com</li>
                    </ul>


                </div>
                <hr />
                <div className="footer-right">
                    <h2>Business Hours</h2>
                    <ul>
                        <li>M-F: 9:00-5:00</li>

                        <li>Saturday: 11:00-7:00</li>

                        <li>Sunday - Closed</li>
                    </ul>
                </div>
            </div>

        </footer>
    )
}
