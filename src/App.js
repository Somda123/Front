

import React from "react";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import TermsAndConditions from './components/TermsAndConditions'; 
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Header from "./components/Header";
import BookingForm from "./components/BookingForm";

function App() {
  return (
      <Router>
      {/* <div> */}
      <Routes>
        <Route path='/' element={<Header/>} />
        <Route path='/loginpage' element={<LoginPage/>} />
         <Route path='/signuppage' element={<SignupPage/>} />
         <Route path='/bookingform' element={<BookingForm/>} />
        <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;


















// import React from "react";
// // import './App.css';
// // import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// // import DatePicker from "react-datepicker";
// // import "react-datepicker/dist/react-datepicker.css";
// // import BookingApp from "./components/BookingApp";
// import LoginPage from "./components/LoginPage";
// import SignupPage from "./components/SignupPage";
// // import Main from "./components/Main";
// // import Footer from "./components/Footer";
// import Header from "./components/Header";
// import BookingForm from "./components/BookingForm";
// // import Slider from "./components/Slider";
// // import ContactForm from "./components/ContactForm";
// // import AboutUs from "./components/AboutUs";

// function App() {
  

//   return (
//   <Router>
//     <Header/>
//     <Routes>
//       {/* <Route path='/' element={<Main/>} /> */}
//       <Route path='/loginpage' element={<LoginPage/>} />
//       <Route path='/signuppage' element={<SignupPage/>} />
//       {/* <Route path='/slider' element={<Slider/>} /> */}
//       {/* <Route path='/contactform' element={<ContactForm/>} /> */}
//       {/* <Route path='/aboutus' element={<AboutUs/>} /> */}
//     </Routes>
//     <br></br>
//     {/* <Footer/> */}
//   </Router>
//   );



// }

// export default App;












// return (
//   <Router>
//     <Header/>
//     <Routes>
//       {/* <Route path='/' element={<Main/>} /> */}
//       <Route path='/loginpage' element={<LoginPage/>} />
//       <Route path='/signuppage' element={<SignupPage/>} />
//       {/* <Route path='/slider' element={<Slider/>} /> */}
//       {/* <Route path='/contactform' element={<ContactForm/>} /> */}
//       {/* <Route path='/aboutus' element={<AboutUs/>} /> */}
//     </Routes>
//     <br></br>
//     {/* <Footer/> */}
//   </Router>
//   );



// }



// import { useRef } from "react";

// const App = () => {
//   // Create refs for each section
//   const homeRef = useRef(null);
//   const aboutRef = useRef(null);
//   const servicesRef = useRef(null);
//   const exploreRef = useRef(null);
//   const contactRef = useRef(null);

//   // Function to scroll to a specific section
//   const scrollToSection = (sectionRef) => {
//     sectionRef.current.scrollIntoView({
//       behavior: "smooth", // Smooth scroll
//       block: "start", // Align section to the top of the view
//     });
//   };

//   return (
//     <div>
//       {/* Navigation buttons */}
//       <nav style={{ position: "fixed", top: 0, width: "100%", backgroundColor: "#333", padding: "10px" }}>
//         <button onClick={() => scrollToSection(homeRef)}>Home</button>
//         <button onClick={() => scrollToSection(aboutRef)}>About</button>
//         <button onClick={() => scrollToSection(servicesRef)}>Services</button>
//         <button onClick={() => scrollToSection(exploreRef)}>Explore</button>
//         <button onClick={() => scrollToSection(contactRef)}>Contact</button>
//       </nav>

//       {/* Sections */}
//       <section ref={homeRef} style={{ height: "100vh", backgroundColor: "#f1f1f1", padding: "20px" }}>
//         <h1>Home</h1>
//         {/* <p>Welcome to our booking website!</p> */}
//         <Header />
//       </section>

//       <section ref={aboutRef} style={{ height: "100vh", backgroundColor: "#e1e1e1", padding: "20px" }}>
//         <h1>About</h1>
//         {/* <p>Learn more about our services and mission.</p> */}
//         <AboutUs />
//       </section>

//       <section ref={servicesRef} style={{ height: "100vh", backgroundColor: "#d1d1d1", padding: "20px" }}>
//         <h1>Services</h1>
//         <p>We offer a variety of booking services.</p>

//       </section>

//       <section ref={exploreRef} style={{ height: "100vh", backgroundColor: "#c1c1c1", padding: "20px" }}>
//         <h1>Explore</h1>
//         <Slider/>
//         {/* <p>Explore our different offerings and locations.</p> */}
//       </section>

//       <section ref={contactRef} style={{ height: "100vh", backgroundColor: "#b1b1b1", padding: "20px" }}>
//         <h1>Contact</h1>
//         <ContactForm/>
//         <p>Get in touch with us for inquiries or support.</p>
//       </section>


      
//       <section ref={contactRef} style={{ height: "100vh", backgroundColor: "#b1b1b1", padding: "20px" }}>
//         <h1>Contact</h1>
//         <Footer/>
//         {/* <p>Get in touch with us for inquiries or support.</p> */}
//       </section>
//     </div>
//   );
// };

// export default App;

