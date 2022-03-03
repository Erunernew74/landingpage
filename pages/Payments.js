import React from 'react'
import Link from 'next/link'

const Payments = () => {
    return (
        <>
         <h1 className='paymentsTitle'>Our Payments Method</h1>
            <div className='paymentContainer'>
                <div className='paymentImage'>
                
                </div>
                <div className='paymentBox'>
                    <h2>I nostri modi di pagare online</h2>
                    <h4>Servizi veloci e precisi con garanzia</h4>
                    <Link href='/Payments'><a className='paymentDetails'>DETTAGLI</a></Link>
                </div>     
            </div> 
            <div className='parallaxPayment'>
                
            </div>   
        </>
    )
}

export default Payments
