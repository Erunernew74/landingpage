import Link from "next/link";
import HeaderPayment from "./components/HeaderPayment";


export default function Home() {
  
  return (
    <>
      <div className="homeContent">
        <div className="homeText" data-aos="fade-down" data-aos-duration="3000">
          <h1>Website design</h1>
          <p>Website design collection. You will get all type of website</p>
          {/* login btn */}
          <Link href="/Login">
            <a className="mainLogin">Log in</a>
          </Link>
        </div>
        <div className="homeImg" data-aos="fade-left" data-aos-duration="3000"></div>
      </div>

    {/* ------------OUR SERVICES-------- */}

      <h1 className="titleServices" data-aos="zoom-in">Our Services</h1>
      <div className="containerBox">
        <div className="box1" data-aos="fade-up" data-aos-delay="250" data-aos-duration="2000">
          <div className="boxImage1">

          </div>
          <div className="boxTitle">
            <h3>LOREM IPSUM</h3>
          </div>
          <div className="boxParag">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel eleifend orci, eget sodales purus. Mauris magna mi, dictum condimentum molestie non, fringilla lacinia nunc. Proin tincidunt, felis ut rutrum laoreet, dolor purus venenatis mauris, sed semper urna risus eu orci.</p>
          </div>
          <Link href="/Login">
            <a className="servicesbtn">DETTAGLI</a>
          </Link>
        </div>

        <div className="box2" data-aos="fade-up" data-aos-delay="500" data-aos-duration="2000">
          <div className="boxImage2">

          </div>
          <div className="boxTitle">
            <h3>LOREM IPSUM</h3>
          </div>
          <div className="boxParag">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel eleifend orci, eget sodales purus. Mauris magna mi, dictum condimentum molestie non, fringilla lacinia nunc. Proin tincidunt, felis ut rutrum laoreet, dolor purus venenatis mauris, sed semper urna risus eu orci.</p>
          </div>
          <Link href="/Login">
            <a className="servicesbtn">DETTAGLI</a>
          </Link>
        </div>

        <div className="box3" data-aos="fade-up" data-aos-delay="750" data-aos-duration="2000">
          <div className="boxImage3">

          </div>
          <div className="boxTitle">
            <h3>LOREM IPSUM</h3>
          </div>
          <div className="boxParag">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel eleifend orci, eget sodales purus. Mauris magna mi, dictum condimentum molestie non, fringilla lacinia nunc. Proin tincidunt, felis ut rutrum laoreet, dolor purus venenatis mauris, sed semper urna risus eu orci.</p>
          </div>
          <Link href="/Login">
            <a className="servicesbtn">DETTAGLI</a>
          </Link>
        </div>
      </div>
      {/* ------------FINE OUR SERVICES-------- */}
      <HeaderPayment />
    </>
  );
}
