import '../styles/globals.css'
import '../styles/Nav.css'
import '../styles/index.css'
import '../styles/Timing.css'
import '../styles/Payment.css'
import '../styles/Login.css'
import '../styles/Contact.css'
import '../styles/Signup.css'
import { Layouts } from '../components/Layouts'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true
    })
  }, [])
  return(
    
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  ) 
}

export default MyApp
