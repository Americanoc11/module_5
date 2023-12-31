import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
        <div className="row" style={{height:"150px"}}>
            <div className="col-12">
            <div className="site-mobile-menu site-navbar-target">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close">
                        <span className="icofont-close js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>

            <nav className="site-nav" >
                <div className="container">
                    <div className="menu-bg-wrap" style={{backgroundColor:"#6998AB"}}>
                        <div className="site-navigation">
                            <a href="index.html" className="logo m-0 float-start">Property</a>

                            <ul
                                className="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end"
                            >
                                <li className="active"><Link to={`/`}>Home</Link></li>
                                <li className="has-children">
                                    <a href="properties.html">Properties</a>
                                    <ul className="dropdown">
                                        <li><a href="#">Buy Property</a></li>
                                        <li><a href="#">Sell Property</a></li>
                                        <li className="has-children">
                                            <a href="#">Dropdown</a>
                                            <ul className="dropdown">
                                                <li><NavLink to="/services/list">Service</NavLink></li>
                                                <li><NavLink to="/contracts/list">Contract</NavLink></li>
                                                <li><NavLink to="/customers/list">Customer</NavLink></li>

                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                            </ul>

                            <a
                                href="#"
                                className="burger light me-auto float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none"
                                data-toggle="collapse"
                                data-target="#main-navbar"
                            >
                                <span></span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            </div>
        </div>
            
        </>
    )
}