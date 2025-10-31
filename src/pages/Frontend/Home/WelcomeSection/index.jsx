import React from 'react';
import './welcome.css';
import pizza from '../../../../assets/Pizza-slice.jpg';
import restaurant from '../../../../assets/Pizza-slice.jpg';

const Welcome = () => {
  const images = [
    {
      id: 1,
      src: pizza,
      alt: 'Pizza',
      overlay: false,
    },
    {
      id: 2,
      src: restaurant,
      alt: 'Restaurant',
      overlay: true,
      title: 'Hours',
      lines: [
        'Monday - Saturday | 9AM - 1PM',
        'Saturday - Sunday | 9AM - 4AM',
      ],
    },
  ];

  return (
    <section className="welcome-section">
      <div className="welcome-text">
        <p className="subtitle">Country's Most Loved!</p>
        <h1>Welcome</h1>
        <h3>We Are Locally Crafted Food & Wine Serving Since 1978.</h3>
        <p className="desc">
          Congue, gravida. Placeat nibh sunt semper elementum anim! Integer lectus
          debitis auctor. Molestias vivamus eligendi ut, cupidatat nisl iaculis
          etiam! Laboris aenean.
        </p>
        <button className="about-btn">More About Us →</button>
      </div>

      <div className="welcome-images">
        {images.map((img) =>
          img.overlay ? (
            <div key={img.id} className="overlay-card">
              <img src={img.src} alt={img.alt} className="overlay-img" />
              <div className="overlay-text">
                <h2>{img.title}</h2>
                {img.lines.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          ) : (
            <img key={img.id} src={img.src} alt={img.alt} className="main-img" />
          )
        )}
      </div>
    </section>
  );
};

export default Welcome;
