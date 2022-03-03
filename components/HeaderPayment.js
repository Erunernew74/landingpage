import React from 'react'
import Link from 'next/link'


const HeaderPayment = () => {
    return (
        <>
            <h1 className='paymentsTitle'>Our Payments Method</h1>
            <div className='paymentContainer'>
                <div className='paymentImage' data-aos="fade-right" data-aos-duration="3000">
                
                </div>
                <div className='paymentBox' data-aos="fade-left" data-aos-duration="3000" data-aos-delay="1000">
                    <h2>I nostri modi di pagare</h2>
                    <h4>Servizi veloci e precisi con garanzia</h4>
                    <Link href='/Payments'><a className='paymentDetails'>DETTAGLI</a></Link>
                </div>     
            </div>  
        </>
    )
}

export default HeaderPayment
