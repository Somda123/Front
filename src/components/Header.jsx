

// import React from "react";
// import { useNavigate} from 'react-router-dom';
// import '../App.css';
// // import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import BookingApp from "./BookingApp";
// function Main() {
// //   const [checkInDate, setCheckInDate] = useState(null);
// //   const [checkOutDate, setCheckOutDate] = useState(null);

// //   const handleSearch = () => {
// //     if (checkInDate && checkOutDate) {
// //       // Here you can perform the search or handle the data as needed
// //       console.log(`Searching for dates from ${checkInDate} to ${checkOutDate}`);
// //       alert(`Searching for available rooms from ${checkInDate.toLocaleDateString()} to ${checkOutDate.toLocaleDateString()}`);
// //     } else {
// //       alert("Please select both check-in and check-out dates.");
// //     }
// //   };

//   const navigator = useNavigate();

// //   function handleBook(){
// //     navigator("/loginpage")
// //   }

//   function handleBook(){
//     navigator("/signuppage")
//   }

//   return (
//     <div className="App">
//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="logo">
//           <img src="/images/logo.png" alt="Hotel Logo" className="logo-img" />
//         </div>
//         <ul className="nav-links">
//           <li>Home</li>
//           <li>About</li>
//           <li>Services</li>
//           <li>Explore</li>
//           <li>Contact</li>
//           <li>
//             <a href="https://www.google.com/maps">Map</a>
//           </li>
//         </ul>
//         <button onClick={handleBook} className="book-now-btn">Book Now</button>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero">
//         <div className="hero-content">
//           <h1>Welcome to Circuit House Dantewada <span className="highlight">Hotel</span>.</h1>
//           <p>Simple – Unique – Friendly</p>
//         </div>
//       </section>

      
//       <BookingApp/>
//     </div>
//     // <section>

//     // </section>
//   );
// }

// export default Main;













// import React from "react";
// import { useNavigate} from 'react-router-dom';
// import '../App.css';
// import "react-datepicker/dist/react-datepicker.css";
// import { NavLink } from "react-router-dom";
// // import BookingApp from "./BookingApp";
// function Main() {
//   const navigator = useNavigate();

//   function handleBook(){
//     navigator("/signuppage")
//   }

// //   function handleSlider(){
// //     navigator("/slider")
// //   }

//   return (
//     <div className="App">
//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="logo">
//           <img src="/images/logo.png" alt="Hotel Logo" className="logo-img" />
//         </div>
//         <ul className="nav-links">
//           <li>
//           <NavLink to={"/"}>Home</NavLink>

//           </li>
//           <li>
//             <NavLink to={"/aboutus"}>About</NavLink>
//           </li>
//           <li>
//             <NavLink to={"/service"}>Services</NavLink>
//           </li>
//           <li>
//             <NavLink to={"/slider"}>Explore</NavLink>
//           </li>
//           <li>
//             <NavLink to={"/contactform"}>Contact</NavLink>
//           </li>
//           <li>
//             <a href="https://www.google.com/maps">Map</a>
//           </li>
//         </ul>
//         <button onClick={handleBook} className="book-now-btn">Book Now</button>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero">
//         <div className="hero-content">
//           <h1>Welcome to Circuit House Dantewada <span className="highlight">Hotel</span> . . .</h1>
//           <p> where comfort meets luxury. Your perfect stay starts with just a click. Discover your home away from home!"</p>
//         </div>
//       </section>

      
//       {/* <BookingApp/> */}
//     </div>
    
//   );
// }

// export default Main;




























///...........


import React, { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import '../App.css';
// import './demo.css';
import "react-datepicker/dist/react-datepicker.css";
// import { NavLink } from "react-router-dom";


// import './App.css';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import BookingApp from "./BookingApp";
// import LoginPage from "./components/LoginPage";
// import SignupPage from "./components/SignupPage";
// import Main from "./components/Main";
import Footer from "./Footer";
// import Header from "./components/Header";
import Slider from "./Explore";
import ContactForm from "./ContactForm";
import AboutUs from "./AboutUs";



function Header() {
  const navigator = useNavigate();

  // Refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const exploreRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  function handleBook() {
    navigator("/signuppage");
  }

  // Scroll to specific section
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth", // Smooth scrolling
      block: "start", // Scroll to the top of the section
    });
  };

  return (



    
    <div className="App">


<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="/">Navbar</a> */}
    <img src="/images/logo.png" alt="Hotel Logo" className="navbar-brand logo-img" />

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft:'200px'}}>
        <li className="nav-item" >
          <button onClick={() => scrollToSection(homeRef)} className="nav-link active" aria-current="page" href="/">Home</button>
        </li>
        <li className="nav-item">
          <button onClick={() => scrollToSection(aboutRef)} className="nav-link active" aria-current="page" href="/">About</button>
        </li>
        <li className="nav-item">
          <button onClick={() => scrollToSection(servicesRef)} className="nav-link active" aria-current="page" href="/">Service</button>
        </li>
        <li className="nav-item">
          <button onClick={() => scrollToSection(exploreRef)} className="nav-link active" aria-current="page" href="/">Explore</button>
        </li>
        <li className="nav-item">
          <button onClick={() => scrollToSection(contactRef)} className="nav-link active" aria-current="page" href="/">Contact</button>
        </li>
        <li className="nav-item">
          <button onClick={() => scrollToSection(footerRef)} className="nav-link active" aria-current="page" href="/">Footer</button>
        </li>
        <li className="nav-item">
          <button  onClick={handleBook} className="nav-link active book-now-btn" aria-current="page" href="/">Book Now</button>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
{/* <button onClick={handleBook} className="book-now-btn">Book Now</button> */}


      {/* Navbar */}
      {/* <nav className="navbar">
        <div className="logo">
          <img src="/images/logo.png" alt="Hotel Logo" className="logo-img" />
        </div>
        <ul className="nav-links">
          <li>
            <button onClick={() => scrollToSection(homeRef)} className="nav-btn">Home</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(aboutRef)} className="nav-btn">About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(servicesRef)} className="nav-btn">Services</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(exploreRef)} className="nav-btn">Explore</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(contactRef)} className="nav-btn">Contact</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(footerRef)} className="nav-btn">Footer</button>
          </li>
        
        </ul>
        <button onClick={handleBook} className="book-now-btn">Book Now</button>
      </nav> */}

      {/* Hero Section */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section ref={homeRef} className="hero">
        <div>
        <div className="hero-content">
          <h1>Welcome to Circuit House Dantewada <span className="highlight">Hotel</span> . . .</h1>
          <p>Where comfort meets luxury. Your perfect stay starts with just a click. Discover your home away from home!</p>
          <BookingApp/>
        </div>
        </div>
        
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {/* Services Section */}
      <section ref={servicesRef} className="services">
        <h2>Our Services</h2>
        <p>Explore the luxurious services we provide for our guests.</p>
      </section>

      {/* Explore Section */}
      <section ref={exploreRef} className="explore">
        {/* <h2>Explore</h2> */}
        <Slider/>

      </section>
      <br></br>
      <br></br>
{/* About Section */}
<section ref={aboutRef} className="about">
        <AboutUs/>
      </section>
      <br></br>
      {/* Contact Section */}
      <section ref={contactRef} className="contact">
        <ContactForm/>
      </section>
      <br></br>
      <br></br>
       {/* Footer Section */}
       <section ref={footerRef} className="footer">
        {/* <h2>Contact </h2> */}
        <Footer/>
        {/* <p>Get in touch with us for any inquiries or bookings.</p> */}
      </section>
    </div>
  );
}

export default Header;
