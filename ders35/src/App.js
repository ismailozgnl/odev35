import React, { useState } from 'react';
import './App.css';

import kadınGiyim from './images/kadin_giyim.jpg';
import kadınAyakkabi from './images/kadin_ayakkabi.jpg';
import erkekGiyim from './images/erkek_giyim.jpg';
import erkekAyakkabi from './images/erkek_ayakkabi.jpg';
import evMobilya from './images/ev_mobilya.jpg';
import dekorasyon from './images/dekorasyon.jpg';

const MenuItem = ({ title, image, subMenus }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="menu-item">
      <a href="#" onClick={handleClick}>
        <img src={image} alt={title} />
        <span>{title}</span>
      </a>
      {isOpen && subMenus && (
        <ul className="sub-menu">
          {subMenus.map((subMenu) => (
            <li key={subMenu.title} className="sub-menu-item">
              <a href="#">{subMenu.title}</a>
              {subMenu.subMenus && (
                <ul className="sub-sub-menu">
                  {subMenu.subMenus.map((subSubMenu) => (
                    <li key={subSubMenu} className="sub-sub-menu-item">
                      <a href="#">{subSubMenu}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const App = () => {
  const menuData = [
    {
      title: 'Kadın',
      image: kadınGiyim,
      subMenus: [
        {
          title: 'Giyim',
          subMenus: ['Elbiseler', 'Pantolonlar'],
        },
        {
          title: 'Ayakkabı & Çanta',
          image: kadınAyakkabi,
          subMenus: ['Topuklu Ayakkabılar', 'Sırt Çantaları'],
        },
      ],
    },
    {
      title: 'Erkek',
      image: erkekGiyim,
      subMenus: [
        {
          title: 'Giyim',
          subMenus: ['Gömlekler', 'Şortlar'],
        },
        {
          title: 'Ayakkabı & Aksesuar',
          image: erkekAyakkabi,
          subMenus: ['Spor Ayakkabılar', 'Cüzdanlar'],
        },
      ],
    },
    {
      title: 'Ev & Mobilya',
      image: evMobilya,
      subMenus: [
        {
          title: 'Mobilya',
          subMenus: ['Oturma Grupları', 'Yemek Masaları'],
        },
        {
          title: 'Dekorasyon',
          image: dekorasyon,
          subMenus: ['Tablolar', 'Vazolar'],
        },
      ],
    },
  ];

  return (
    <nav>
      <ul className="main-menu">
        {menuData.map((menuItem) => (
          <MenuItem
            key={menuItem.title}
            title={menuItem.title}
            image={menuItem.image}
            subMenus={menuItem.subMenus}
          />
        ))}
      </ul>
    </nav>
  );
};

export default App;

