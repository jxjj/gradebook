import React from 'react';
import './Footer.css';

function getYear() {
  return (new Date()).getFullYear();
}

const Footer = () => (
  <footer className="page-footer">
    &copy; {getYear()} MuchMake
  </footer>
);

export default Footer;
