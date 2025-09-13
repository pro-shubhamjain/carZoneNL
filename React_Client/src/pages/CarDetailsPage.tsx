import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import rawData from '../data.json';
import type { Car } from '../types/car';

const CarDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const data = rawData as unknown as { cars?: Car[] };

    if (data && Array.isArray(data.cars)) {
      setCars([]);
      const findOne = data.cars.filter((car) => car.id == Number(id));
      if (findOne?.length > 0) {
        setCars(findOne);
      }
    } else {
      console.warn('No cars array found in JSON');
    }
  }, [id]);

  return (
    <div className="page-content">
      {/* <!-- inner page banner --> */}
      <div
        className="dlab-bnr-inr overlay-black-middle"
        style={{ backgroundImage: `url(${cars[0]?.images[0]})` }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-white">Car Details</h1>
          </div>
        </div>
      </div>
      {/* <!-- inner page banner END --> */}
      {/* <!-- Breadcrumb row --> */}
      <div className="breadcrumb-row">
        <div className="container">
          <ul className="list-inline">
            <li>
              <a href="#">Home</a>
            </li>
            <li>Car Details</li>
          </ul>
        </div>
      </div>
      {/* <!-- Breadcrumb row END --> */}
      <div className="car-details-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="nav">
                <ul>
                  <li className="active">
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>Specifications</a>
                  </li>
                  <li>
                    <a>Price</a>
                  </li>
                  <li>
                    <a>Compare</a>
                  </li>
                  <li>
                    <a>Pictures</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-full p-t50 bg-white content-inner-2">
        <div className="container">
          <div className="row">
            {/* <!-- Side bar start --> */}
            <div className="col-md-8">
              <div className="m-b30">
                <h3 className="h3 m-t0">{cars[0]?.name ?? '-'}</h3>
                <ul className="used-car-dl-info">
                  <li>
                    <i className="fa fa-map-marker"></i>{' '}
                    {cars[0]?.location ?? '-'}
                  </li>
                  <li>
                    <i className="fa fa-calendar"></i> Updated on{' '}
                    {cars[0]?.updated ?? '-'}
                  </li>
                  <li>
                    <i className="fa fa-eye"></i> {cars[0]?.views ?? '-'} Views
                  </li>
                </ul>
              </div>

              <div>
                <div className="item">
                  <div className="dlab-thum-bx">
                    <img
                      src={cars[0]?.images?.[0] ?? ''}
                      alt={cars[0]?.name ?? 'car image'}
                    />
                  </div>
                </div>
              </div>

              <div className="clearfix m-t30">
                <ul className="nav theme-tabs m-b10">
                  <li className="active">
                    <a
                      data-toggle="tab"
                      aria-controls="economy"
                      href="#economy"
                    >
                      <i className="fa fa-usd"></i> Economy
                    </a>
                  </li>
                  <li>
                    <a
                      data-toggle="tab"
                      aria-controls="presentation"
                      href="#presentation"
                    >
                      <i className="fa fa-tachometer"></i> Presentation
                    </a>
                  </li>
                  <li>
                    <a
                      data-toggle="tab"
                      aria-controls="features"
                      href="#features"
                    >
                      <i className="fa fa-star"></i> Features
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" aria-controls="safety" href="#safety">
                      <i className="fa fa-automobile"></i> Safety
                    </a>
                  </li>
                </ul>

                <div className="dlab-tabs">
                  <div className="tab-content">
                    {/* Economy */}
                    <div
                      id="economy"
                      className="tab-pane active clearfix city-list"
                    >
                      <div className="icon-bx-wraper bx-style-1 p-a30">
                        <ul className="table-dl clearfix">
                          <li>
                            <div className="leftview">Mileage</div>
                            <div className="rightview">
                              {cars[0]?.specifications?.economy?.mileage ?? '-'}
                            </div>
                          </li>
                          <li>
                            <div className="leftview">Service Cost</div>
                            <div className="rightview">-</div>
                          </li>
                          <li>
                            <div className="leftview">Fuel Type</div>
                            <div className="rightview">
                              {cars[0]?.specifications?.economy?.fuelType ??
                                '-'}
                            </div>
                          </li>
                          <li>
                            <div className="leftview">Fuel Tank</div>
                            <div className="rightview">
                              {cars[0]?.specifications?.economy?.fuelTank ??
                                '-'}
                            </div>
                          </li>
                          <li>
                            <div className="leftview">Over Drive</div>
                            <div className="rightview">
                              {cars[0]?.specifications?.economy?.overDrive ??
                                '-'}
                            </div>
                          </li>
                          <li>
                            <div className="leftview">Steering Type</div>
                            <div className="rightview">
                              {cars[0]?.specifications?.economy?.steeringType ??
                                '-'}
                            </div>
                          </li>
                          <li>
                            <div className="leftview">Turning Radius</div>
                            <div className="rightview">
                              {cars[0]?.specifications?.economy
                                ?.turningRadius ?? '-'}
                            </div>
                          </li>
                          <li>
                            <div className="leftview">Alloy Wheel Size</div>
                            <div className="rightview">
                              {cars[0]?.specifications?.economy
                                ?.alloyWheelSize ?? '-'}
                            </div>
                          </li>
                          <li>
                            <div className="leftview">No Of Doors</div>
                            <div className="rightview">
                              {cars[0]?.specifications?.economy?.noOfDoors ??
                                '-'}
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Presentation */}
                    <div
                      id="presentation"
                      className="tab-pane clearfix city-list"
                    >
                      <div className="icon-bx-wraper bx-style-1 p-a30">
                        <ul className="table-dl clearfix">
                          <li>
                            <div className="leftview">Engine</div>
                            <div className="rightview">
                              {cars[0]?.specifications?.presentation?.engine ??
                                '-'}
                            </div>
                          </li>
                          <li>
                            <div className="leftview">BHP</div>
                            <div className="rightview">
                              {cars[0]?.specifications?.presentation?.bhp ??
                                '-'}
                            </div>
                          </li>
                          <li>
                            <div className="leftview">No. of Cylinders</div>
                            <div className="rightview">
                              {cars[0]?.specifications?.presentation
                                ?.cylinders ?? '-'}
                            </div>
                          </li>
                          <li>
                            <div className="leftview">No. of Gears</div>
                            <div className="rightview">
                              {cars[0]?.specifications?.presentation?.gears ??
                                '-'}
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Features */}
                    <div id="features" className="tab-pane clearfix city-list">
                      <div className="icon-bx-wraper bx-style-1 p-a30">
                        <ul className="table-dl clearfix">
                          <li>
                            <div className="leftview">Cruise Control</div>
                            <div className="rightview">
                              {cars[0]?.specifications?.features
                                ?.cruiseControl ?? '-'}
                            </div>
                          </li>
                          <li>
                            <div className="leftview">Sun roof</div>
                            <div className="rightview">
                              {cars[0]?.specifications?.features?.sunRoof ??
                                '-'}
                            </div>
                          </li>
                          <li>
                            <div className="leftview">Seating Capacity</div>
                            <div className="rightview">
                              {cars[0]?.specifications?.features
                                ?.seatingCapacity ?? '-'}
                            </div>
                          </li>
                          <li>
                            <div className="leftview">Boot Space</div>
                            <div className="rightview">
                              {cars[0]?.specifications?.features?.bootSpace ??
                                '-'}
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Safety */}
                    <div id="safety" className="tab-pane clearfix city-list">
                      <div className="icon-bx-wraper bx-style-1 p-a30">
                        <ul className="table-dl clearfix">
                          <li>
                            <div className="leftview">Parking Sensor</div>
                            <div className="rightview">
                              {cars[0]?.specifications?.safety?.parkingSensor ??
                                '-'}
                            </div>
                          </li>
                          <li>
                            <div className="leftview">Airbags</div>
                            <div className="rightview">
                              {cars[0]?.specifications?.safety?.airbags ?? '-'}
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal */}
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
                      <div className="pull-left max-width-300"></div>
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
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Side bar END --> */}
            <div className="col-md-4">
              <div className="car-dl-info m-b30">
                <div className="price">
                  <h2 className="m-t0 m-b5">Price {cars[0]?.price}</h2>
                  <span> {cars[0]?.name}</span>
                </div>

                {/* <p className="m-t0 m-b5">Ex-showroom Price</p>
                  <div className="form-group">
                    <select>
                      <option>Mumbai</option>
                      <option>Chandigarh </option>
                      <option>Rajasthan</option>
                    </select>
                  </div> */}
                <div className="clearfix">
                  <button
                    type="button"
                    className="btn-primary site-button btn-block"
                    title="READ MORE"
                    rel="bookmark"
                    data-toggle="modal"
                    data-target="#car-details"
                  >
                    View On Road Price{' '}
                  </button>
                </div>
              </div>
              <div className="used-car-features clearfix m-b30">
                <div className="car-features">
                  <i className="flaticon-calendar"></i>
                  <h5>{cars[0]?.year}</h5>
                  <span>Model</span>
                </div>
                <div className="car-features">
                  <i className="flaticon-dashboard"></i>
                  <h5>-</h5>
                  <span>Driven</span>
                </div>
                <div className="car-features">
                  <i className="flaticon-gas-station"></i>
                  <h5>{cars[0]?.fuel}</h5>
                  <span>Fuel</span>
                </div>
                <div className="car-features">
                  <i className="flaticon-mechanic"></i>
                  <h5>{cars[0]?.seller}</h5>
                  <span>Seller</span>
                </div>
                <div className="car-features">
                  <i className="flaticon-calendar"></i>
                  <h5>{cars[0]?.transmission}</h5>
                  <span>Transmission</span>
                </div>
                <div className="car-features">
                  <i className="flaticon-car-key"></i>
                  <h5>{cars[0]?.owner}</h5>
                  <span>Owner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
