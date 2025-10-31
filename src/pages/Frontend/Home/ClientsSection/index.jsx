import React from 'react';
import './Clients.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import client1 from '../../../../assets/client1.png'
import client2 from '../../../../assets/client2.png'
import client3 from '../../../../assets/client3.png'
import decorative from '../../../../assets/parcelli.png'


const Clients = () => {
  const testimonials = [
    {
      id: 1,
      name: "Shamika Smith",
      text: "Aliquip habitant ea suscipit ea varius cras habitasse ligula doloremque cepteur vehicula iste nibh, mattis assumenda massa",
      image: client1
    },
    {
      id: 2,
      name: "Jose Hatts",
      text: "Aliquip habitant ea suscipit ea varius cras habitasse ligula doloremque. Fuga reprehenderit quis unde soluta.",
      image: client2
    },
    {
      id: 3,
      name: "Monica Tata",
      text: "Aliquip habitant ea suscipit ea varius cras habitasse ligula doloremque",
      image: client3
    }
  ];

  // ✅ Updated social links
  const socialLinks = [
    { name: "Facebook", icon: "fab fa-facebook-f", url: "https://www.facebook.com" },
    { name: "Instagram", icon: "fab fa-instagram", url: "https://www.instagram.com" },
    { name: "YouTube", icon: "fab fa-youtube", url: "https://www.youtube.com" },
    { name: "TikTok", icon: "fab fa-tiktok", url: "https://www.tiktok.com" }
  ];

  return (
    <section className="clients-section">
      <div className="container">
      
        <div className="clients-header">
          <img
            src={decorative}
            alt="Parcelli Decoration"
            className="decorative-icon"
          />
          <h2>Happy Customers!</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="client-image">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  onError={(e) => (e.target.style.display = 'none')}
                />
              </div>
              <div className="testimonial-content">
                <h5 className="testimonial-text">"{testimonial.text}"</h5>
                <p className="client-name">- {testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Social Media Section */}
        <div className="social-section">
          <h5 className="social-title">Follow Us On</h5>
          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="social-icon"
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
