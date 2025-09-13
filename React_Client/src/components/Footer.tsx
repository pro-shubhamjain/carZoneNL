import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-top">
          <div className="section-full p-t50 content-inner-2">
            <div className="container">
              <div className="row">
                {/* Left Column - About & Contact */}
                <div className="col-md-4 col-sm-6 col-xs-6">
                  <div className="widget widget_about">
                    <div className="logo-footer">
                      <img src="/images/logo-light.png" alt="" />
                    </div>
                    <p className="m-tb20">
                      <strong>CarZone</strong> is simply dummy text of the
                      printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard...
                    </p>
                    <ul className="dlab-contact-info">
                      <li>
                        <i className="flaticon-placeholder"></i>Demo Address
                        #8901 Marmora Road Chi Minh City, Vietnam
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
                      technology. Enter your e-mail and subscribe to our
                      newsletter.
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
        </div>
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
    </>
  );
};

export default Footer;
