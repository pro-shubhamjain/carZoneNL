// import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
          {cars.map((car) => (
            <div className="item">
              {car.images && car.images.length > 0 && (
                <div
                  className="slider-item overlay-black-middle"
                  style={{ backgroundImage: `url(${car.images[0]})` }}
                >
                  <div className="dlab-content container">
                    <h1 className="title">
                      {car.name} <span className="text-primary">..</span>
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
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Section */}

      {/* Our Products Section */}

      <div className="section-full content-inner bg-white">
        <div className="container">
          <div className="row">
            {/* <!-- left part start --> */}
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="row">
                <div className="p-lr15 clearfix m-b15">
                  <h2 className="h2 m-t0">LATEST CARS</h2>
                </div>
                {/* <!-- blog grid  --> */}
                <div id="masonry" className="dlab-blog-grid-3 used-car-info">
                  {cars.length === 0 && <li>No cars available</li>}
                  {cars.map((car) => (
                    <div className="post card-container col-lg-4 col-md-6 col-sm-6 col-xs-12">
                      <div className="dlab-feed-list m-b30 text-left">
                        <div className="dlab-media">
                          <a href="car-details-overview.html">
                            {car.images && car.images.length > 0 && (
                              <img
                                src={car.images[0]}
                                alt={car.name}
                                style={{
                                  width: '100%',
                                  height: '200px',
                                  borderRadius: 8,
                                }}
                              />
                            )}
                          </a>
                        </div>
                        <div className="dlab-info text-left">
                          <h4 className="dlab-title">
                            <a href="car-details-overview.html">{car.name} </a>
                          </h4>
                          <p className="dlab-price">
                            <span className="text-black">
                              Price :{' '}
                              {car.price !== undefined
                                ? `$${car.price}`
                                : 'N/A'}
                            </span>
                          </p>
                          <div className="icon-box-btn text-center m-tb20">
                            <ul className="clearfix">
                              <li>{car.specifications?.economy?.mileage}</li>
                              <li>
                                {car.specifications?.presentation?.engine}
                              </li>
                              <li>
                                {car.specifications?.features?.seatingCapacity}{' '}
                              </li>
                            </ul>
                          </div>
                          <div className="view-seller-dtl">
                            <Link
                              className="site-button btn-block"
                              title="READ MORE"
                              data-target="#car-details"
                              to={`/car-details/${car.id}`}
                            >
                              {' '}
                              Car Details
                            </Link>{' '}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <!-- blog grid END -->
                            <!-- Pagination  --> */}
                {/* <div className="pagination-bx col-lg-12 clearfix ">
                  <ul className="pagination">
                    <li className="previous">
                      <a href="#">
                        <i className="fa fa-angle-double-left"></i>
                      </a>
                    </li>
                    <li className="active">
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li className="next">
                      <a href="#">
                        <i className="fa fa-angle-double-right"></i>
                      </a>
                    </li>
                  </ul>
                </div> */}
                {/* <!-- Pagination END --> */}
              </div>
              <div
                className="modal fade lead-form-modal"
                id="car-details"
                role="dialog"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="modal-body clearfix">
                      <div className="pull-letf max-width-300"></div>
                      <div className="lead-form">
                        <form>
                          <h3 className="m-t0">Personal Details</h3>
                          <div className="form-group">
                            <input
                              value=""
                              className="form-control"
                              placeholder="Name"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              value=""
                              className="form-control"
                              placeholder="Mobile Number"
                            />
                          </div>
                          <div className="clearfix">
                            <button
                              type="button"
                              className="btn-primary site-button btn-block"
                            >
                              Submit{' '}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- left part END --> */}
            {/* <!-- Side bar start --> */}
            {/* <div className="col-sm-4 col-md-4 col-lg-3 sticky-top">
              <aside className="side-bar">
                <div className="widget recent-posts-entry">
                  <h4 className="widget-title">Popular Cars</h4>
                  <div className="widget-post-bx">
                    <div className="widget-post clearfix">
                      <div className="dlab-post-media">
                        {' '}
                        <img
                          src="images/blog/recent-blog/pic1.jpg"
                          alt=""
                          width="200"
                          height="143"
                        />{' '}
                      </div>
                      <div className="dlab-post-info">
                        <div className="dlab-post-header">
                          <h5>
                            <a href="new-car-popular.html">
                              Maruti Swift Dzire
                            </a>
                          </h5>
                        </div>
                        <div className="dlab-post-meta">
                          <ul>
                            <li className="post-author open-sans">
                              <b>$7247 - $8139</b>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="widget-post clearfix">
                      <div className="dlab-post-media">
                        {' '}
                        <img
                          src="images/blog/recent-blog/pic2.jpg"
                          alt=""
                          width="200"
                          height="160"
                        />{' '}
                      </div>
                      <div className="dlab-post-info">
                        <div className="dlab-post-header">
                          <h5>
                            <a href="new-car-popular.html">Maruti Baleno</a>
                          </h5>
                        </div>
                        <div className="dlab-post-meta">
                          <ul>
                            <li className="post-author open-sans">
                              <b>$8043 - $9039</b>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="widget-post clearfix">
                      <div className="dlab-post-media">
                        {' '}
                        <img
                          src="images/blog/recent-blog/pic3.jpg"
                          alt=""
                          width="200"
                          height="160"
                        />{' '}
                      </div>
                      <div className="dlab-post-info">
                        <div className="dlab-post-header">
                          <h5>
                            <a href="new-car-popular.html">Renault KWID</a>
                          </h5>
                        </div>
                        <div className="dlab-post-meta">
                          <ul>
                            <li className="post-author open-sans">
                              <b>$2147 - $8137</b>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="widget-post clearfix">
                      <div className="dlab-post-media">
                        {' '}
                        <img
                          src="images/blog/recent-blog/pic1.jpg"
                          alt=""
                          width="200"
                          height="143"
                        />{' '}
                      </div>
                      <div className="dlab-post-info">
                        <div className="dlab-post-header">
                          <h5>
                            <a href="new-car-popular.html">
                              Maruti Swift Dzire
                            </a>
                          </h5>
                        </div>
                        <div className="dlab-post-meta">
                          <ul>
                            <li className="post-author open-sans">
                              <b>$7247 - $8139</b>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="widget-post clearfix">
                      <div className="dlab-post-media">
                        {' '}
                        <img
                          src="images/blog/recent-blog/pic2.jpg"
                          alt=""
                          width="200"
                          height="160"
                        />{' '}
                      </div>
                      <div className="dlab-post-info">
                        <div className="dlab-post-header">
                          <h5>
                            <a href="new-car-popular.html">Maruti Baleno</a>
                          </h5>
                        </div>
                        <div className="dlab-post-meta">
                          <ul>
                            <li className="post-author open-sans">
                              <b>$8043 - $9039</b>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <a
                      href="new-car-popular.html"
                      className="site-button btn-block text-center"
                    >
                      View All Popular Cars
                    </a>
                  </div>
                </div>
                <div className="widget ads">
                  <img src="images/ads/img2.jpg" alt="" />
                </div>
                <div className="widget client-logo-wg clearfix">
                  <h4 className="widget-title">Popular Cars By Brand</h4>
                  <ul>
                    <li className="brand-logo">
                      <a href="new-car-popular.html">
                        <img src="images/client-logo/logo1.jpg" alt="" />
                      </a>
                    </li>
                    <li className="brand-logo">
                      <a href="new-car-popular.html">
                        <img src="images/client-logo/logo2.jpg" alt="" />
                      </a>
                    </li>
                    <li className="brand-logo">
                      <a href="new-car-popular.html">
                        <img src="images/client-logo/logo3.jpg" alt="" />
                      </a>
                    </li>
                    <li className="brand-logo">
                      <a href="new-car-popular.html">
                        <img src="images/client-logo/logo4.jpg" alt="" />
                      </a>
                    </li>
                    <li className="brand-logo">
                      <a href="new-car-popular.html">
                        <img src="images/client-logo/logo5.jpg" alt="" />
                      </a>
                    </li>
                    <li className="brand-logo">
                      <a href="new-car-popular.html">
                        <img src="images/client-logo/logo6.jpg" alt="" />
                      </a>
                    </li>
                    <li className="brand-logo">
                      <a href="new-car-popular.html">
                        <img src="images/client-logo/logo7.jpg" alt="" />
                      </a>
                    </li>
                    <li className="brand-logo">
                      <a href="new-car-popular.html">
                        <img src="images/client-logo/logo8.jpg" alt="" />
                      </a>
                    </li>
                    <li className="brand-logo">
                      <a href="new-car-popular.html">
                        <img src="images/client-logo/logo9.jpg" alt="" />
                      </a>
                    </li>
                    <li className="brand-logo">
                      <a href="new-car-popular.html">
                        <img src="images/client-logo/logo10.jpg" alt="" />
                      </a>
                    </li>
                    <li className="brand-logo">
                      <a href="new-car-popular.html">
                        <img src="images/client-logo/logo11.jpg" alt="" />
                      </a>
                    </li>
                    <li className="brand-logo">
                      <a href="new-car-popular.html">
                        <img src="images/client-logo/logo12.jpg" alt="" />
                      </a>
                    </li>
                    <li className="brand-logo">
                      <a href="new-car-popular.html">
                        <img src="images/client-logo/logo13.jpg" alt="" />
                      </a>
                    </li>
                    <li className="brand-logo">
                      <a href="new-car-popular.html">
                        <img src="images/client-logo/logo14.jpg" alt="" />
                      </a>
                    </li>
                    <li className="brand-logo">
                      <a href="new-car-popular.html">
                        <img src="images/client-logo/logo15.jpg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div> */}
            {/* <!-- Side bar END --> */}
          </div>
        </div>
      </div>
      {/* <!-- Our Products End--> */}
    </div>
  );
};

export default HomePage;
