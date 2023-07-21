import React from "react"
export default function CreateCustomer() {
    return (
        <>
            <div id="customerCss">
                <section className="vh-100" style={{}}>
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col col-xl-10">
                                <div className="card" style={{ borderRadius: "1rem" }}>
                                    <div className="row g-0">
                                        <div className="col-md-6 col-lg-5 d-none d-md-block">
                                            <img src="..\images\property-2.jpg"
                                                alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem", height: "100%" }} />
                                        </div>
                                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                            <div className="card-body p-4 p-lg-5 text-black">
                                                <form >
                                                    <h3>Add New Customer </h3>

                                                    <div className="user">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div>
                                                                    <label for="fullName" style={{ fontWeight: "bold" }}>Full name<span
                                                                        className="spanRed">(*)</span>:</label>
                                                                    <input id="fullName" type="text" />
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div>
                                                                    <label for="Identity" style={{ fontWeight: "bold" }}>Identity Card<span
                                                                        className="spanRed">(*)</span></label>
                                                                    <input id="Identity" type="text" />
                                                                    <span style={{ color: "red" }}></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div>
                                                                    <label for="addressCustomer" style={{ fontWeight: "bold" }}>Address<span
                                                                        className="spanRed">(*)</span>:</label>
                                                                    <input id="addressCustomer" type="text" />
                                                                </div>
                                                            </div>
                                                            <div className="col-6">

                                                                <div>
                                                                    <label for="emailCustomer" style={{ fontWeight: "bold" }}>Email<span
                                                                        className="spanRed">(*)</span></label>
                                                                    <input id="emailCustomer" type="text" />
                                                                    <span style={{ color: "red" }}></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div>
                                                                    <label for="phoneNumber" style={{ fontWeight: "bold" }}>Phone<span
                                                                        className="spanRed">(*)</span></label>
                                                                    <input id="phoneNumber" type="text" />
                                                                    <span style={{ color: "red" }}></span>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div>
                                                                    <label className="mb-3" style={{ fontWeight: "bold" }}>Gender<span
                                                                        className="spanRed">(*)</span>:</label><br></br>
                                                                    <input type="radio" id="male" />Male
                                                                    <input type="radio" id="female" />Female
                                                                    <input type="radio" id="other" />Other
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="div1" style={{ marginBottom: "10px" }}>
                                                                    <label for="myDate" className="mb-3"
                                                                        style={{ display: "block", fontWeight: "bold" }}>Date of birth<span
                                                                            className="spanRed">(*)</span>:</label>
                                                                    <input style={{ width: "100%", padding: "5px" }} type="date" id="myDate" />
                                                                </div>
                                                            </div>
                                                            <div className="col-6"></div>
                                                        </div>
                                                        <div className="mt-4 pt-2">
                                                            <input type="submit" value="Submit" className="mt-4"
                                                                style={{ backgroundColor: "#DAA55A" }} />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>




        </>
    )
}