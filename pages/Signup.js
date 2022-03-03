import React from 'react'
import { AiFillGoogleCircle, AiFillTwitterCircle, AiFillFacebook } from 'react-icons/Ai'
import Link from 'next/link'

const Signup = () => {
    return (
        <>
            <section className='containerRegister'>
                <h1>Signup</h1>
                <div className='registerContainer'>
                    
                    
                    <div className='containerImage'>

                    </div>
                    <div className='containerItems'>
                        <div className='itemsTitle'>
                            <h3>Signup for our services</h3>
                            <p id='member'>I am already a member! <Link href='/Login'><a>Sign in</a></Link></p>
                            <div className='iconsContainer'>
                                <AiFillGoogleCircle className='icon'/>
                                <AiFillFacebook className='icon' />
                                <AiFillTwitterCircle className='icon' />
                            </div>
                        </div>
                        
                        <div className='itemsContactForm'>
                            <div className='itemInputRegister'>
                                <label>Nome</label>
                                <input type='text' placeholder='Your name' />
                            </div>
                            <div className='itemInputRegister'>
                                <label>Cognome</label>
                                <input type='email' placeholder='Your surname' />
                            </div>
                            <div className='itemInputRegister'>
                                <label>Email</label>
                                <input type='email' placeholder='Your email' />
                            </div>
                            <div className='itemInputRegister'>
                                <label>Password</label>
                                <input type='password' placeholder='Your password' />
                            </div>
                            <div className='submitRegister'>
                            <button className='submitRegisterForm'>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
        </>
    )
}

export default Signup
