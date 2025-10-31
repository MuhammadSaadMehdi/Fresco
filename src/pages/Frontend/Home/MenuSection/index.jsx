import React from 'react';
import './menu.css';
import burger from '../../../../assets/Menu-item-1.jpg';
import pizza from '../../../../assets/Menu-item-2.jpg';
import pasta from '../../../../assets/Menu-item-3.jpg';
import deco from '../../../../assets/parcelli.png';

const Menu = () => {
  const menuItems = [
    { id: 1, src: burger, name: 'Beef Burger' },
    { id: 2, src: pizza, name: 'Cheese Pizza' },
    { id: 3, src: pasta, name: 'Italian Pasta' },
    
  ];

  return (
    <section className="menu-section">
     
      <img src={deco} alt="decorative" className="deco-img" />
<br /><br />
   
      <div className="menu-header">
        <h2>Our Menu</h2>
        <h3>Quality Ingredients, Tasty Meals</h3>
        <p>
          Congue, gravida. Placeat nibh sunt semper elementum anim! Integer
          lectus debitis auctor. Molestias vivamus eligendi ut, cupidatat nisl
          iaculis etiam! Laboris aenean.
        </p>
      </div>

      {/* Food Images Grid */}
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-card">
            <img src={item.src} alt={item.name} />
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
