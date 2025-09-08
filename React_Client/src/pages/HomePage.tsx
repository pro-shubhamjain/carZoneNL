// import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from 'react';
import rawData from '../data.json';

interface Car {
  id: number;
  name: string;
  price?: number;
  year?: number;
  mileage?: string;
  fuel?: string;
  transmission?: string;
  owner?: string;
  seller?: string;
  location?: string;
  views?: number;
  updated?: string;
  images?: string[];
  specifications?: {
    economy?: {
      mileage?: string;
      serviceCost?: string;
      fuelType?: string;
      fuelTank?: string;
      overDrive?: string;
      steeringType?: string;
      turningRadius?: string;
      alloyWheelSize?: string;
      noOfDoors?: string;
    };
    presentation?: {
      engine?: string;
      bhp?: string;
      cylinders?: string;
      gears?: string;
    };
    features?: {
      cruiseControl?: string;
      sunRoof?: string;
      seatingCapacity?: string;
      bootSpace?: string;
    };
    safety?: {
      parkingSensor?: string;
      airbags?: string;
    };
  };
}

const HomePage: React.FC = () => {
  //const { t } = useTranslation();

  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const data = rawData as unknown as { cars?: Car[] };

    if (data && Array.isArray(data.cars)) {
      setCars(data.cars);
    } else {
      console.warn('No cars array found in JSON');
    }
  }, []);

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

      <div>
        <ul>
          {cars.length === 0 && <li>No cars available</li>}
          {cars.map((car) => (
            <li key={car.id}>
              <h2>{car.name}</h2>
              <p>
                {car.year ?? 'Year N/A'} • {car.fuel ?? 'Fuel N/A'} •{' '}
                {car.transmission ?? 'Trans N/A'}
              </p>
              <p>Price: {car.price !== undefined ? `$${car.price}` : 'N/A'}</p>
              {car.images && car.images.length > 0 && (
                <img
                  src={car.images[0]}
                  alt={car.name}
                  style={{ width: 150, borderRadius: 8 }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
