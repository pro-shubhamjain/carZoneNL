export default function CarDetails() {
  return (
    <main>
      <div className="page-content">
        <div className="dlab-bnr-inr overlay-black-middle">
            <div className="container">
                <div className="dlab-bnr-inr-entry">
                    <h1 className="text-white">Car Details</h1>
				</div>
            </div>
        </div>
        <div className="breadcrumb-row">
            <div className="container">
                <ul className="list-inline">
                    <li><a href="#">Home</a></li>
                    <li>Car Details</li>
                </ul>
            </div>
        </div>
		<div className="car-details-info">
			<div className="container">
				<div className="row">
					<div className="col-md-12 ">
						<div className="nav">
							<ul>
								<li className="active"><a href="car-details-overview.html">Overview</a></li>
								<li><a href="car-detail-specifications.html">Specifications</a></li>
								<li><a href="car-detail-price.html">Price</a></li>
								<li><a href="car-detail-compare.html">Compare</a></li>
								<li><a href="car-detail-pictures.html">Pictures</a></li>
							</ul>
						</div>
					</div>
				</div>	
			</div>
		</div>
		
        <div className="section-full p-t50 bg-white content-inner-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
						<div className="m-b30">
							<h3 className="h3 m-t0">Hyundai EON LPG Magna Plus </h3>
							<ul className="used-car-dl-info">
								<li><i className="fa fa-map-marker"></i> UK London</li>
								<li><i className="fa fa-calendar"></i> Updated on Nov 11</li>
								<li><i className="fa fa-eye"></i> 14 Views</li>
							</ul>
						</div>
						<div className="owl-fade-one owl-carousel owl-btn-center-lr">
							<div className="item">
								<div className="dlab-thum-bx"> <img src="images/blog/default/thum1.jpg" alt=""/> </div>
							</div>
							<div className="item">
								<div className="dlab-thum-bx"> <img src="images/blog/default/thum2.jpg" alt=""/> </div>
							</div>
							<div className="item">
								<div className="dlab-thum-bx"> <img src="images/blog/default/thum3.jpg" alt=""/> </div>
							</div>
							<div className="item">
								<div className="dlab-thum-bx"> <img src="images/blog/default/thum4.jpg" alt=""/> </div>
							</div>
						</div>
						
						<div className="clearfix m-t30">
							<ul className="nav theme-tabs m-b10">
								<li className="active">
									<a data-toggle="tab" aria-controls="economy"  href="#economy">
										<i className="fa fa-usd"></i> 
										Economy
									</a>
								</li>
								<li>
									<a data-toggle="tab" aria-controls="presentation" href="#presentation">
										<i className="fa fa-tachometer"></i>
										presentation
									</a>
								</li>
								<li>
									<a data-toggle="tab" aria-controls="features" href="#features">
										<i className="fa fa-star"></i>
										Features
									</a>
								</li>
								<li>
									<a data-toggle="tab" aria-controls="safety" href="#safety">
										<i className="fa fa-automobile"></i>
										Safety
									</a>
								</li>
							</ul>
							<div className="dlab-tabs">
								<div className="tab-content">
									<div id="economy"  className="tab-pane active clearfix city-list">
										<div className="icon-bx-wraper bx-style-1 p-a30">
											<ul className="table-dl clearfix">
												<li>
													<div className="leftview">Mileage</div>
													<div className="rightview">17.20 kmpl</div>
												</li>
												<li>
													<div className="leftview">Service Cost</div>
													<div className="rightview">-</div>
												</li>
												<li>
													<div className="leftview">Fuel Type</div>
													<div className="rightview">Diesel</div>
												</li>
												<li>
													<div className="leftview">Fuel Tank</div>
													<div className="rightview">58 Litres</div>
												</li>
												
												<li>
													<div className="leftview">Mileage</div>
													<div className="rightview">17.20 kmpl</div>
												</li>
												<li>
													<div className="leftview">Over Drive</div>
													<div className="rightview">4 Motion</div>
												</li>
												<li>
													<div className="leftview">Steering Type</div>
													<div className="rightview">Electric</div>
												</li>
												<li>
													<div className="leftview">Turning Radius</div>
													<div className="rightview">5.75meters</div>
												</li>
												<li>
													<div className="leftview">Alloy Wheel Size</div>
													<div className="rightview">18 Inch</div>
												</li>
												<li>
													<div className="leftview">No Of Doors</div>
													<div className="rightview">5</div>
												</li>
											  </ul>
										</div>
									</div>
									<div id="presentation"  className="tab-pane clearfix city-list">
										<div className="icon-bx-wraper bx-style-1 p-a30">
											<ul className="table-dl clearfix">
												<li>
													<div className="leftview">Engine</div>
													<div className="rightview">1989 cc </div>
												</li>
												<li>
													<div className="leftview">BHP</div>
													<div className="rightview">188</div>
												</li>
												<li>
													<div className="leftview">No. of Cylinders</div>
													<div className="rightview">4</div>
												</li>
												<li>
													<div className="leftview">No. of Gears</div>
													<div className="rightview">Spped 7</div>
												</li>
											  </ul>
										</div>
									</div>
									<div id="features"  className="tab-pane clearfix city-list">
										<div className="icon-bx-wraper bx-style-1 p-a30">
											<ul className="table-dl clearfix">
												<li>
													<div className="leftview">Cruise Control</div>
													<div className="rightview">Yes</div>
												</li>
												<li>
													<div className="leftview">Sun roof</div>
													<div className="rightview">No </div>
												</li>
												<li>
													<div className="leftview">Seating Capacity</div>
													<div className="rightview">4</div>
												</li>
												<li>
													<div className="leftview">Boot Space</div>
													<div className="rightview">480 litres</div>
												</li>
											  </ul>
										</div>
									</div>
									<div id="safety"  className="tab-pane clearfix city-list">
										<div className="icon-bx-wraper bx-style-1 p-a30">
											<ul className="table-dl clearfix">
												<li>
													<div className="leftview">Parking Sensor</div>
													<div className="rightview">Yes </div>
												</li>
												<li>
													<div className="leftview">Airbags</div>
													<div className="rightview">Yes</div>
												</li>
											  </ul>
										</div>
									</div>
								</div>
							</div>
							
						</div>
						
						<div className="modal fade lead-form-modal" id="car-details" role="dialog" >
							<div className="modal-dialog" role="document">
								<div className="modal-content">
									<button type="button" className="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
									<div className="modal-body clearfix">
										<div className="pull-letf max-width-300"></div>
										<div className="lead-form">
											<form>
												<h3 className="m-t0">Personal Details</h3>
												<div className="form-group">
													<input className="form-control" placeholder="Name"/>
												</div>	
												<div className="form-group">
													<input className="form-control" placeholder="Mobile Number"/>
												</div>
												<div className="clearfix">
													<button type="button" className="btn-primary site-button btn-block">Submit </button>
												</div>
											</form>
										</div>
									</div>	
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="car-dl-info m-b30">
							<div className="price">
								<h2 className="m-t0 m-b5">Price $5890</h2>
								<span>Hyundai EON LPG Magna Plus</span>	
							</div>			
							<form>
								<p className="m-t0 m-b5">Ex-showroom Price</p>
								<div className="form-group">
									<select>
										<option>Mumbai</option>
										<option>Chandigarh </option>
										<option>Rajasthan</option>
									</select>
								</div>	
								<div className="clearfix">
									<button type="button" className="btn-primary site-button btn-block" title="READ MORE" rel="bookmark" data-toggle="modal" data-target="#car-details">View On Road Price </button>
								</div>
							</form>
						</div>
						<div className="used-car-features clearfix m-b30">
							<div className="car-features">
								<i className="flaticon-calendar"></i>
								<h5>2019</h5>
								<span>Model</span>	
							</div>
							<div className="car-features">
								<i className="flaticon-dashboard"></i>
								<h5>6,900 km</h5>
								<span>Driven</span>	
							</div>
							<div className="car-features">
								<i className="flaticon-gas-station"></i>
								<h5>Diesel</h5>
								<span>Fuel</span>	
							</div>
							<div className="car-features">
								<i className="flaticon-mechanic"></i>
								<h5>Individual</h5>
								<span>Seller</span>	
							</div>
							<div className="car-features">
								<i className="flaticon-calendar"></i>
								<h5>Automatic</h5>
								<span>Transmission</span>	
							</div>
							<div className="car-features">
								<i className="flaticon-car-key"></i>
								<h5>First</h5>
								<span>Owner</span>	
							</div>
						</div>
						
						<div className="widget client-logo-wg">
							<h4 className="widget-title">Popular Cars By Brand</h4>
							<ul>
								<li className="brand-logo">
									<a href="new-car-popular.html"><img src="images/client-logo/logo1.jpg" alt=""/></a>
								</li>
								<li className="brand-logo">
									<a href="new-car-popular.html"><img src="images/client-logo/logo2.jpg" alt=""/></a>
								</li>
								<li className="brand-logo">
									<a href="new-car-popular.html"><img src="images/client-logo/logo3.jpg" alt=""/></a>
								</li>
								<li className="brand-logo">
									<a href="new-car-popular.html"><img src="images/client-logo/logo4.jpg" alt=""/></a>
								</li>
								<li className="brand-logo">
									<a href="new-car-popular.html"><img src="images/client-logo/logo5.jpg" alt=""/></a>
								</li>
								<li className="brand-logo">
									<a href="new-car-popular.html"><img src="images/client-logo/logo6.jpg" alt=""/></a>
								</li>
								<li className="brand-logo">
									<a href="new-car-popular.html"><img src="images/client-logo/logo7.jpg" alt=""/></a>
								</li>
								<li className="brand-logo">
									<a href="new-car-popular.html"><img src="images/client-logo/logo8.jpg" alt=""/></a>
								</li>
								<li className="brand-logo">
									<a href="new-car-popular.html"><img src="images/client-logo/logo9.jpg" alt=""/></a>
								</li>
								<li className="brand-logo">
									<a href="new-car-popular.html"><img src="images/client-logo/logo10.jpg" alt=""/></a>
								</li>
								<li className="brand-logo">
									<a href="new-car-popular.html"><img src="images/client-logo/logo11.jpg" alt=""/></a>
								</li>
								<li className="brand-logo">
									<a href="new-car-popular.html"><img src="images/client-logo/logo12.jpg" alt=""/></a>
								</li>
							</ul>	
						</div>
					</div>
                </div>
            </div>
        </div>
		<div className="section-full bg-white  p-t40 p-b70">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="section-head">
							<h3 className="h4 text-uppercase">For your quick look</h3>
							
						</div>
						<div className="clearfix owl-carousel owl-btn-style-2 quick-look">
							<div className="item">
								<div className="dlab-feed-list">
									<div className="dlab-media"> 
										<a href="new-car-search-result-column.html"><img src="images/our-work/work/pic1.jpg" alt=""/></a> 
									</div>
									<div className="dlab-info">
										<h4 className="dlab-title"><a href="new-car-search-result-column.html">Hyundai santa fe sport </a></h4>
										<div className="dlab-separator bg-black"></div>
										<p className="dlab-price"><del>$40,152</del> <span className="text-primary">$26,598</span></p>
									</div>
									<div className="icon-box-btn text-center">
										<ul className="clearfix">
											<li>2019</li>
											<li>Manual</li>
											<li>210 hp </li>
										</ul>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="dlab-feed-list">
									<div className="dlab-media"> 
										<a href="new-car-search-result-column.html"><img src="images/our-work/work/pic2.jpg" alt=""/></a> 
									</div>
									<div className="dlab-info">
										<h4 className="dlab-title"><a href="new-car-search-result-column.html">Hyundai santa fe sport </a></h4>
										<div className="dlab-separator bg-black"></div>
										<p className="dlab-price"><del>$40,152</del> <span className="text-primary">$26,598</span></p>
									</div>
									<div className="icon-box-btn text-center">
										<ul className="clearfix">
											<li>2019</li>
											<li>Manual</li>
											<li>210 hp </li>
										</ul>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="dlab-feed-list">
									<div className="dlab-media"> 
										<a href="new-car-search-result-column.html"><img src="images/our-work/work/pic3.jpg" alt=""/></a> 
									</div>
									<div className="dlab-info">
										<h4 className="dlab-title"><a href="new-car-search-result-column.html">Hyundai santa fe sport </a></h4>
										<div className="dlab-separator bg-black"></div>
										<p className="dlab-price"><del>$40,152</del> <span className="text-primary">$26,598</span></p>
									</div>
									<div className="icon-box-btn text-center">
										<ul className="clearfix">
											<li>2019</li>
											<li>Manual</li>
											<li>210 hp </li>
										</ul>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="dlab-feed-list">
									<div className="dlab-media"> 
										<a href="new-car-search-result-column.html"><img src="images/our-work/work/pic4.jpg" alt=""/></a> 
									</div>
									<div className="dlab-info">
										<h4 className="dlab-title"><a href="new-car-search-result-column.html">Hyundai santa fe sport </a></h4>
										<div className="dlab-separator bg-black"></div>
										<p className="dlab-price"><del>$40,152</del> <span className="text-primary">$26,598</span></p>
									</div>
									<div className="icon-box-btn text-center">
										<ul className="clearfix">
											<li>2019</li>
											<li>Manual</li>
											<li>210 hp </li>
										</ul>
									</div>
								</div>
							</div>
						</div>	
					</div>
				</div>
		
			</div>
		</div>
	</div>
    </main>
  );
}