import React from 'react';
// import { useTranslation } from "react-i18next";

const HomePage: React.FC = () => {
  //const { t } = useTranslation();

  return (
    <div className="page-content">
      {/* Hero Slider Section */}
      <div className="bnr-slider">
        <div className="slider-carousel owl-carousel owl-theme owl-none owl-dots">
          <div className="item">
            <div
              className="slider-item overlay-black-middle"
              style={{ backgroundImage: 'url(/images/main-slider/slide3.jpg)' }}
            >
              <div className="dlab-content container">
                <h1 className="title">
                  Koi Rio <span className="text-primary">z</span>
                </h1>
                <h5 className="sub-title">For Rent $50 Per Day</h5>
                <a
                  href="#"
                  className="site-button button-md outline outline-2 white text-uppercase"
                >
                  reserve Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="section-full p-t50 bg-white content-inner-2">
        <div className="container">
          <div className="row">
            {/* Left Column - About & Contact */}
            <div className="col-md-4 col-sm-6 col-xs-6">
              <div className="widget widget_about">
                <div className="logo-footer">
                  <img src="/images/logo-light.png" alt="" />
                </div>
                <p className="m-tb20">
                  <strong>CarZone</strong> is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been the industry's
                  standard...
                </p>
                <ul className="dlab-contact-info">
                  <li>
                    <i className="flaticon-placeholder"></i>Demo Address #8901
                    Marmora Road Chi Minh City, Vietnam
                  </li>
                  <li>
                    <i className="flaticon-customer-service"></i>Phone :
                    0800-123456 (24/7 Support Line)
                  </li>
                </ul>
              </div>
            </div>

            {/* Middle Column - Useful Links & Recent Posts */}
            <div className="col-md-4 col-sm-6 col-xs-6">
              <div className="widget widget_services">
                <h4 className="m-b15 text-uppercase">Useful Links</h4>
                <div className="dlab-separator bg-primary"></div>
                <ul>
                  <li>
                    <a href="/new-car-latest">Latest Cars</a>
                  </li>
                  <li>
                    <a href="/new-car-upcoming">Upcoming Cars</a>
                  </li>
                  <li>
                    <a href="/used-car-search">Search Used Car</a>
                  </li>
                  <li>
                    <a href="/used-car-sell">Car Sell</a>
                  </li>
                  <li>
                    <a href="/compare">Compare Car</a>
                  </li>
                  <li>
                    <a href="/car-review">Car Review</a>
                  </li>
                </ul>
              </div>

              <div className="widget recent-posts-entry">
                <h4 className="m-b15 text-uppercase">recent posts</h4>
                <div className="dlab-separator bg-primary"></div>
                <div className="widget-post-bx">
                  <div className="widget-post clearfix">
                    <div className="dlab-post-media">
                      <img
                        src="/images/blog/recent-blog/pic1.jpg"
                        alt=""
                        width="200"
                        height="143"
                      />
                    </div>
                    <div className="dlab-post-info">
                      <div className="dlab-post-header">
                        <h5>
                          <a href="/blog-single">Time to change...</a>
                        </h5>
                      </div>
                      <div className="dlab-post-meta">
                        <ul>
                          <li className="post-author">By Admin</li>
                          <li className="post-comment">
                            <i className="fa fa-comments"></i> 28
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Newsletter */}
            <div className="col-md-4 col-sm-6 col-xs-6">
              <div className="widget">
                <h4 className="m-b15 text-uppercase">Newsletter</h4>
                <div className="dlab-separator bg-primary"></div>
                <p className="m-tb20">
                  Keep up on our always evolving products features and
                  technology. Enter your e-mail and subscribe to our newsletter.
                </p>
                <form className="dlab-subscribe-form">
                  <div className="input-group m-b15">
                    <input
                      name="dzEmail"
                      required
                      type="email"
                      className="form-control"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="input-group">
                    <button type="submit" className="site-button btn-block">
                      SUBSCRIBE{' '}
                      <i className="fa fa-angle-right font-18 m-l10"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Car Search Section */}
      <div className="car-searching text-white">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="section-head style-1">
                <div className="title-sm text-uppercase">
                  120+ cars type and brands
                </div>
                <h3 className="h3 m-t10">
                  Search Your{' '}
                  <span className="text-primary font-weight-900">
                    Best Cars
                  </span>
                </h3>
                <div className="sep-line"></div>
              </div>
            </div>
          </div>
        </div>

        <form className="searching-form">
          <div className="container">
            <div className="row search-row">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                <div className="form-group">
                  <label>Car brands</label>
                  <select className="form-control">
                    <option>Any Brands</option>
                    <option>Brand 1</option>
                    <option>Brand 2</option>
                    <option>Brand 3</option>
                    <option>Brand 4</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                <div className="form-group">
                  <label>Car Type</label>
                  <select className="form-control">
                    <option>Any Type</option>
                    <option>Type 1</option>
                    <option>Type 2</option>
                    <option>Type 3</option>
                    <option>Type 4</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                <div className="form-group">
                  <label>Car Price</label>
                  <select className="form-control">
                    <option>Price low to high</option>
                    <option>Price high to low</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                <div className="form-group">
                  <button type="submit" className="site-button">
                    Search car now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
