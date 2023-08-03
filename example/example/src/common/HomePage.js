import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import CustomerList from "../components/CustomerList";

export default function HomePage() {
    return (
        <>
            <div >
                <carousel>
                    <div className="container-fluid px-0 mb-5">
                        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="w-100" src="../img/carousel-1.jpg" alt="Image" />
                                    <div className="carousel-caption">
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <div className="col-lg-7 text-center">
                                                    <p className="fs-4 text-white animated zoomIn">Welcome to <strong className="text-dark">TEA House</strong></p>
                                                    <h1 className="display-1 text-dark mb-4 animated zoomIn">Organic & Quality Tea Production</h1>
                                                    <a href="" className="btn btn-light rounded-pill py-3 px-5 animated zoomIn">Explore More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="w-100" src="../img/carousel-2.jpg" alt="Image" />
                                    <div className="carousel-caption">
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <div className="col-lg-7 text-center">
                                                    <p className="fs-4 text-white animated zoomIn">Welcome to <strong className="text-dark">TEA House</strong></p>
                                                    <h1 className="display-1 text-dark mb-4 animated zoomIn">Organic & Quality Tea Production</h1>
                                                    <a href="" className="btn btn-light rounded-pill py-3 px-5 animated zoomIn">Explore More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </carousel>
                <section>
                    <div className="container-xxl py-5">
                        <div className="container">
                            <div className="row g-5">
                                <div className="col-lg-6">
                                    <div className="row g-3">
                                        <div className="col-6 text-end">
                                            <img className="img-fluid bg-white w-100 mb-3 wow fadeIn" data-wow-delay="0.1s" src="../img/about-1.jpg" alt="" />
                                            <img className="img-fluid bg-white w-50 wow fadeIn" data-wow-delay="0.2s" src="../img/about-3.jpg" alt="" />
                                        </div>
                                        <div className="col-6">
                                            <img className="img-fluid bg-white w-50 mb-3 wow fadeIn" data-wow-delay="0.3s" src="../img/about-4.jpg" alt="" />
                                            <img className="img-fluid bg-white w-100 wow fadeIn" data-wow-delay="0.4s" src="../img/about-2.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                    <div className="section-title">
                                        <p className="fs-5 fw-medium fst-italic text-primary">About Us</p>
                                        <h1 className="display-6">The success history of TEA House in 25 years</h1>
                                    </div>
                                    <div className="row g-3 mb-4">
                                        <div className="col-sm-4">
                                            <img className="img-fluid bg-white w-100" src="img/about-5.jpg" alt="" />
                                        </div>
                                        <div className="col-sm-8">
                                            <h5>Our tea is one of the most popular drinks in the world</h5>
                                            <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit</p>
                                        </div>
                                    </div>
                                    <div className="border-top mb-4"></div>
                                    <div className="row g-3">
                                        <div className="col-sm-8">
                                            <h5>Daily use of a cup of tea is good for your health</h5>
                                            <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit</p>
                                        </div>
                                        <div className="col-sm-4">
                                            <img className="img-fluid bg-white w-100" src="img/about-6.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <CustomerList />
                </section>
                <section>
                    <div class="m-4">
                        <form action="/examples/actions/confirmation.php" method="post">
                            <h3>Thêm mới</h3>

                            <div class="row align-items-center g-3 mb-3">
                                <div class="col-auto">
                                    <label for="inputEmail">Họ tên</label>
                                    <input type="email" class="form-control" id="inputEmail" placeholder="Email" required />
                                </div>
                                <div class="col-auto">
                                    <div >
                                        <label for="inputEmail">Giới tính</label>
                                        <div>
                                            <div class="form-check form-check-inline">
                                                <input type="radio" class="form-check-input" name="gender" id="radioMale" checked />
                                                <label class="form-check-label" for="radioMale">Male</label>
                                            </div>
                                            <div class="form-check form-check-inline ms-3">
                                                <input type="radio" class="form-check-input" name="gender" id="radioFemale" />
                                                <label class="form-check-label" for="radioFemale">Female</label>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="row align-items-center g-3 mb-3">
                                <div class="col-auto">
                                    <label for="inputEmail">Số điện thoại</label>
                                    <input type="email" class="form-control" id="inputEmail" placeholder="Email" required />
                                </div>
                                <div class="col-auto">
                                    <div>
                                        <label for="inputEmail">Sở thích</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input type="checkbox" class="form-check-input" name="hobbies" id="checkMusic" />
                                        <label class="form-check-label" for="checkMusic">Music</label>
                                    </div>
                                    <div class="form-check form-check-inline ms-3">
                                        <input type="checkbox" class="form-check-input" name="hobbies" id="checkTravel" checked />
                                        <label class="form-check-label" for="checkTravel">Travel</label>
                                    </div>
                                    <div class="form-check form-check-inline ms-3">
                                        <input type="checkbox" class="form-check-input" name="hobbies" id="checkReading" checked />
                                        <label class="form-check-label" for="checkReading">Reading</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row align-items-center g-3 mb-3">
                                <div class="col-auto">
                                    <label for="inputEmail">Email</label>
                                    <input type="email" class="form-control" id="inputEmail" placeholder="Email" required />
                                </div>
                                <div class="col-auto">
                                    <label for="inputEmail">Chức vụ</label>

                                    <select class="form-select ">
                                        <option>Default select</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row align-items-center g-3 mb-3">
                                <div class="col-auto">
                                    <label for="inputEmail">Địa chỉ</label>
                                    <input type="email" class="form-control" id="inputEmail" placeholder="Email" required />
                                </div>
                            </div>
                            <div class="row align-items-center g-3 mb-3">
                                <div class="col-auto">
                                    <button type="submit" class="btn btn-primary">Sign in</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>

        </>
    )
}