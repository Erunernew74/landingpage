import React from 'react'
import Link from 'next/link'


const Nav = ({ children }) => {
    return (
        <>
        <section className='main'>
            <nav>
                <Link href='/'><a className='logo'><img src='images/logo.png' /></a></Link>
                {/* -----Menu btn------- */}
                <input className='menuInput' type='checkbox' id='menuBtn' />
                <label className='menuIcon' htmlFor='menuBtn'>
                    <span className='navicon'></span>
                </label>
                <ul className='menu'>
                    <li><Link href='/'><a>Home</a></Link></li>
                    <li><Link href='/Payments'><a>Payment</a></Link></li>
                    <li><Link href='/Plan'><a>Plan</a></Link></li>
                    <li><Link href='/Team'><a>Team</a></Link></li>
                    <li><Link href='/Contact'><a>Contact</a></Link></li>       
                    <li><Link href='/Login'><a id='loginLink'>Login</a></Link></li>       
                    <li><Link href='/Signup'><a id='registerLink'>Signup</a></Link></li>       
                </ul>
            </nav>
        </section>





         <div>{children}</div>   
        </>
    )
}

export default Nav
