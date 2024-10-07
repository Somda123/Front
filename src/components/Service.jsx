// import React from 'react';
// import './Service.css';

// const services = [
//   {
//     id: 1,
//     title: 'Web Development',
//     description: 'Building responsive and modern websites.',
//     icon: '🌐',
//   },
//   {
//     id: 2,
//     title: 'App Development',
//     description: 'Creating mobile applications for Android and iOS.',
//     icon: '📱',
//   },
//   {
//     id: 3,
//     title: 'SEO Optimization',
//     description: 'Improving search engine rankings and visibility.',
//     icon: '🔍',
//   },
//   {
//     id: 4,
//     title: 'UI/UX Design',
//     description: 'Designing user-friendly and aesthetic interfaces.',
//     icon: '🎨',
//   },
// ];

// const Service = () => {
//   return (
//     <div className="service-page">
//       <h1 className="service-title">Our Services</h1>
//       <div className="service-list">
//         {services.map((service) => (
//           <div className="service-card" key={service.id}>
//             <div className="service-icon">{service.icon}</div>
//             <h2 className="service-name">{service.title}</h2>
//             <p className="service-description">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Service;




// import React from "react";
// import "./Service.css";

// const Service = () => {
//   return (
//     <div className="service-container">
//       <h1 className="service-title">Our Services</h1>
//       <div className="services-grid">
//         <div className="service-card">
//           <div className="icon-container">
//             <i className="fas fa-bed"></i>
//           </div>
//           <h2>Room Booking</h2>
//           <p>
//             Enjoy luxurious rooms with a view. Fully furnished and equipped with
//             modern amenities.
//           </p>
//         </div>
//         <div className="service-card">
//           <div className="icon-container">
//             <i className="fas fa-utensils"></i>
//           </div>
//           <h2>Dining</h2>
//           <p>
//             Relish gourmet dishes at our in-house restaurants offering a variety
//             of cuisines.
//           </p>
//         </div>
//         <div className="service-card">
//           <div className="icon-container">
//             <i className="fas fa-spa"></i>
//           </div>
//           <h2>Spa & Wellness</h2>
//           <p>
//             Relax and rejuvenate with our spa and wellness services tailored for
//             you.
//           </p>
//         </div>
//         <div className="service-card">
//           <div className="icon-container">
//             <i className="fas fa-swimmer"></i>
//           </div>
//           <h2>Pool & Gym</h2>
//           <p>
//             Stay active during your stay with our modern gym and swimming pool
//             facilities.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Service;






import React from "react";
import "./Service.css";

const ServicePage = () => {
  const services = [
    {
      title: "Room Booking",
      description: "Enjoy luxurious rooms with a view. Fully furnished and equipped with modern amenities.",
      img: "/images/bg12.avif", // Replace with the actual path to your image
      icon: "fas fa-bed"
    },
    {
      title: "Dining",
      description: "Relish gourmet dishes at our in-house restaurants offering a variety of cuisines.",
      img: "/images/Image5.jpeg", // Replace with the actual path to your image
      icon: "fas fa-utensils"
    },
    {
      title: "Spa & Wellness",
      description: "Relax and rejuvenate with our spa and wellness services tailored for you.",
      img: "/images/Image3.jpeg", // Replace with the actual path to your image
      icon: "fas fa-spa"
    },
    {
      title: "Gardening",
      description: "Stay active during your stay with our modern gym and swimming pool facilities.",
      img: "/images/Image6.jpeg", // Replace with the actual path to your image
      icon: "fas fa-swimmer"
    }
  ];

  return (
    <div className="service-container">
      <h1 className="service-title">Our Services</h1>
      <p>Explore the luxurious services we provide for our guests.</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="image-container">
              <img src={service.img} alt={service.title} className="service-image" />
              <div className="icon-container">
                <i className={service.icon}></i>
              </div>
            </div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
