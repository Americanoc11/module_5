import React from "react"
 function EditService() {
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
                                                    <h3>Edit Service </h3>

                                                    <div className="user">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div>
                                                                    <label for="name" style={{ fontWeight: "bold" }}>Name Service<span
                                                                        className="spanRed">(*)</span>:</label>
                                                                    <input id="name" type="text" />
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div>
                                                                    <label for="area" style={{ fontWeight: "bold" }}>Area<span
                                                                        className="spanRed">(*)</span></label>
                                                                    <input id="area" type="text" />
                                                                    <span style={{ color: "red" }}></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div>
                                                                    <label for="cost" style={{ fontWeight: "bold" }}>Cost Price<span
                                                                        className="spanRed">(*)</span>:</label>
                                                                    <input id="cost" type="text" />
                                                                </div>
                                                            </div>
                                                            <div className="col-6">

                                                                <div>
                                                                    <label for="person" style={{ fontWeight: "bold" }}>Person<span
                                                                        className="spanRed">(*)</span></label>
                                                                    <input id="person" type="text" />
                                                                    <span style={{ color: "red" }}></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div>
                                                                    <label for="typeService" style={{ fontWeight: "bold" }}>Type Service<span
                                                                        className="spanRed">(*)</span></label><br></br>
                                                                    <select>
                                                                        <option>Vàng</option>
                                                                        <option>Bạch kim</option>
                                                                        <option>Kim cương</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div>
                                                                    <label for="pool" style={{ fontWeight: "bold" }}>Pool Area<span
                                                                        className="pool">(*)</span></label>
                                                                    <input id="phoneNumber" type="text" />
                                                                    <span style={{ color: "red" }}></span>
                                                                </div>
                                                            </div>
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
export default EditService