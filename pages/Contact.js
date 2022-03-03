import React from 'react'
import { MdMapsHomeWork, MdPhone, MdAlternateEmail, MdWebStories } from 'react-icons/Md'

const Contact = () => {
    return (
        <>
            <section className='contactContainer'>
                <div className='containerContact'>
                    <h1>Contct us</h1>
                    <div className='contactItems'>
                        <div className='contactAdressContainer'>
                            <div className='contactAdress'>
                                <MdMapsHomeWork className='icon'/>
                                <div id='adress'>
                                    <h2>ADRESS</h2>
                                    <p>198 west 21th Streen, Suite 721 New York NY</p>
                                    <p>10016</p>
                                </div>
                            </div>
                            <div className='contactAdress'>
                                <MdPhone className='icon'/>
                                <div id='phone'>
                                    <h2>PHONE</h2>
                                    <p>+ 1235 2355 98</p>
                                    <p>+ 1235 2355 98</p>
                                </div>
                            </div>
                            <div className='contactAdress'>
                                <MdAlternateEmail className='icon'/>
                                <div id='email'>
                                    <h2>EMAIL</h2>
                                    <p>info@yoursite.com</p>
                                </div>
                            </div>
                            <div className='contactAdress'>
                                <MdWebStories className='icon'/>
                                <div id='website'>
                                    <h2>WEBSITE</h2>
                                    <p>yoursite.com</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='contactForm'>
                            <div className='formTitle'>
                                <h3>Get in touch</h3>
                            </div>
                            <div className='formContact'>
                                <input type='text' placeholder='Your name' />
                                <input type='email' placeholder='Your email' />
                                <input type='text' placeholder='Subject' />
                                <textarea placeholder='Your message'></textarea>
                                <button className='submitContactForm'>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>   
        </>
    )
}

export default Contact
