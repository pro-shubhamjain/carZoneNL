import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="site-header header-transparent">
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="dlab-topbar-left">
              <ul>
                <li>
                  <Link to="/on-road-price">Get On Road Price</Link>
                </li>
                <li>
                  <Link to="/faq">Ask a Question</Link>
                </li>
              </ul>
            </div>
            <div className="dlab-topbar-right topbar-social">
              <ul>
                <li>
                  <a
                    className="site-button-link"
                    onClick={() => changeLanguage('en')}
                  >
                    EN
                  </a>
                </li>
                <li>
                  <a
                    className="site-button-link"
                    onClick={() => changeLanguage('nl')}
                  >
                    NL
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="site-button-link google-plus hover">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="site-button-link twitter hover">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="site-button-link linkedin hover">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky-header main-bar-wraper">
        <div className="main-bar clearfix">
          <div className="container clearfix">
            <div className="logo-header mostion">
              <Link to="/">
                <img src="/images/logo-light.png" className="logo" alt="" />
              </Link>
            </div>

            <button className="navbar-toggle collapsed" type="button">
              <i className="fa fa-bars"></i>
            </button>

            <div className="extra-nav">
              <div className="extra-cell">
                <button className="site-button-link">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>

            <div className="header-nav navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className="active">
                  <Link to="/">
                    {t('common.home')}
                    {/* <i className="fa fa-chevron-down"></i> */}
                  </Link>
                </li>
                <li>
                  <Link to="/compare">
                    {t('common.compare')}
                    {/* <i className="fa fa-chevron-down"></i> */}
                  </Link>
                </li>
                {/* <li>
                  <Link to="/new">
                    {t('common.new')}
                    <i className="fa fa-chevron-down"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/used">
                    {t('common.used')}
                    <i className="fa fa-chevron-down"></i>
                  </Link>
                </li>
              
                <li>
                  <Link to="/car-detail">
                    {t('common.carDetail')}
                    <i className="fa fa-chevron-down"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/pages">
                    {t('common.pages')}
                    <i className="fa fa-chevron-down"></i>
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
