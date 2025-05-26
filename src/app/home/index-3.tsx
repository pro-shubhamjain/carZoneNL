export default function Index3() {
  return (
    <main>
      <h1>Index 3</h1>
      <p>This is the index-3 page.</p>
      
        <div className="bnr-slider">
            <div className="slider-carousel owl-carousel owl-theme owl-none owl-dots">
				<div className="item">
					<div className="slider-item overlay-black-middle">
						<div className="dlab-content container">
							<h1 className="title">Koi Rio <span className="text-primary">z</span></h1>
							<h5 className="sub-title">For Rent $50 Per Day</h5>
							<a href="#" className="site-button button-md outline outline-2 white text-uppercase">reserve Now</a>
						</div>
					</div>
				</div>
				<div className="item">
					<div className="slider-item overlay-black-middle" >
						<div className="dlab-content container">
							<h1 className="title">Koi Rio <span className="text-primary">z</span></h1>
							<h5 className="sub-title">For Rent $50 Per Day</h5>
							<a href="#" className="site-button button-md outline outline-2 white text-uppercase">reserve Now</a>
						</div>
					</div>
				</div>
			</div>
			<div className="car-searching text-white">
				<div className="container">
					<div className="row">
						<div className="col-xs-12">
							<div className="section-head style-1">
								<div className="title-sm text-uppercase">120+ cars type and brands</div>
								<h3 className="h3 m-t10">Search Your <span className="text-primary font-weight-900">Best Cars</span></h3>
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
									<button type="submit" className="site-button">Search car now</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
    </main>
  );
}