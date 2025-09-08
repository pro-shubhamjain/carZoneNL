import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 text-left">
              Copyright 2021 Car Dealer Developed By{' '}
              <a
                href="http://dexignlab.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                DexignLab
              </a>
            </div>
            <div className="col-md-6 col-sm-6 text-right">
              <Link to="/page-about">About Us</Link> |
              <Link to="/page-privacy-policy">Contact Us</Link> |
              <Link to="/page-about">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
