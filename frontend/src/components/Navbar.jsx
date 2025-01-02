import React from 'react';
import { TbHomeFilled } from 'react-icons/tb';
import { IoLibrary, IoMailOpen } from 'react-icons/io5';
import { FaRegWindowClose } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const Navbar = ({ containerStyles, toggleMenu, menuOpened }) => {
  const navItems = [
    {
      to: '/',
      label: 'Home',
      icon: <TbHomeFilled />,
    },
    {
      to: '/shop',
      label: 'Shop',
      icon: <IoLibrary />,
    },
    {
      to: '/contact',
      label: 'Contact',
      icon: <IoMailOpen />,
    },
  ];
  return (
    <nav className={containerStyles}>
      {navItems.map(({ to, label, icon }) => (
        <div key={label} className="inline-flex relative top-1">
          <NavLink>
            <span>{icon}</span>
            <span>{label}</span>
          </NavLink>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
