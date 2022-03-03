import React from 'react'
import { MdEmail, MdPassword } from 'react-icons/Md'

const Login = () => {
    return (
        <>
         <section className='loginContainer'>
            <div className='loginItemsContainer'>
                <h1>Login</h1>
                <form className='loginForm'>
                    <div className='items'>
                        <label>Email</label>
                        <div className='itemsInput'>
                            <MdEmail />
                            <input type='email' className='emailLogin' placeholder='enter your email'/><br />
                        </div>
                        
                    </div>
                    
                    <div className='items' id='itemsId'>
                        <label>Password</label>
                        <div className='itemsInput'>
                            <MdPassword />
                            <input type='password' className='passwordLogin' id='passwordLogin' placeholder='enter your password' /><br />
                        </div>
                        
                    </div>
                    <div className='itemForgot'>
                        <p>Forgot password?</p>
                    </div>
                    <button>SUBMIT</button>
                    
                </form>
            </div>
         </section>
            
        </>
    )
}

export default Login
