export default function Section() {
    return (
        <>
            <div>
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-0 gx-5 align-items-end">
                            <div className="col-lg-6">
                                <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                                    <h1 className="mb-3">Property Listing</h1>
                                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                                <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                                    <li className="nav-item me-2">
                                        <a className="btn btn-outline-primary active" data-bs-toggle="pill" href="#tab-1">Featured</a>
                                    </li>
                                    <li className="nav-item me-2">
                                        <a className="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-2">For Sell</a>
                                    </li>
                                    <li className="nav-item me-0">
                                        <a className="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-3">For Rent</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href=""><img className="img-fluid" src="D:\codegym\module_5\case_study\furama\public\images\property-1.jpg" alt="" /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href=""><img className="img-fluid" src="img/property-2.jpg" alt="" /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Villa</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href=""><img className="img-fluid" src="img/property-3.jpg" alt="" /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Office</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href=""><img className="img-fluid" src="img/property-4.jpg" alt="" /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Building</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href=""><img className="img-fluid" src="img/property-5.jpg" alt="" /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Home</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href=""><img className="img-fluid" src="img/property-6.jpg" alt="" /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Shop</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                                        <a className="btn btn-primary py-3 px-5" href="">Browse More Property</a>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-2" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href=""><img className="img-fluid" src="img/property-1.jpg" alt="" /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href=""><img className="img-fluid" src="img/property-2.jpg" alt="" /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Villa</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href=""><img className="img-fluid" src="img/property-3.jpg" alt="" /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Office</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href=""><img className="img-fluid" src="img/property-4.jpg" alt="" /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Building</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href=""><img className="img-fluid" src="img/property-5.jpg" alt="" /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Home</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href=""><img className="img-fluid" src="img/property-6.jpg" alt="" /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Shop</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <a className="btn btn-primary py-3 px-5" href="">Browse More Property</a>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-3" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href=""><img className="img-fluid" src="img/property-1.jpg" alt="" /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href=""><img className="img-fluid" src="img/property-2.jpg" alt="" /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Villa</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href=""><img className="img-fluid" src="img/property-3.jpg" alt="" /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Office</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href=""><img className="img-fluid" src="img/property-4.jpg" alt="" /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Building</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href=""><img className="img-fluid" src="img/property-5.jpg" alt="" /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Home</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href=""><img className="img-fluid" src="img/property-6.jpg" alt="" /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Shop</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <a className="btn btn-primary py-3 px-5" href="">Browse More Property</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <section className="features-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
                                <div className="box-feature">
                                    <span className="flaticon-house"></span>
                                    <h3 className="mb-3">Our Properties</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Voluptates, accusamus.
                                    </p>
                                    <p><a href="#" className="learn-more">Learn More</a></p>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="500">
                                <div className="box-feature">
                                    <span className="flaticon-building"></span>
                                    <h3 className="mb-3">Property for Sale</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Voluptates, accusamus.
                                    </p>
                                    <p><a href="#" className="learn-more">Learn More</a></p>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
                                <div className="box-feature">
                                    <span className="flaticon-house-3"></span>
                                    <h3 className="mb-3">Real Estate Agent</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Voluptates, accusamus.
                                    </p>
                                    <p><a href="#" className="learn-more">Learn More</a></p>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="600">
                                <div className="box-feature">
                                    <span className="flaticon-house-1"></span>
                                    <h3 className="mb-3">House for Sale</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Voluptates, accusamus.
                                    </p>
                                    <p><a href="#" className="learn-more">Learn More</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="container">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Area</th>
                            <th>Price</th>
                        </tr>

                    </thead>
                    <tbody >
                        <tr>
                            <td>1</td>
                            <td>House</td>
                            <td>200m x 200m</td>
                            <td>1000$</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Villa</td>
                            <td>200m x 200m</td>
                            <td>800$</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Room</td>
                            <td>200m x 200m</td>
                            <td>100$</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>House</td>
                            <td>100m x 100m</td>
                            <td>1000$</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}