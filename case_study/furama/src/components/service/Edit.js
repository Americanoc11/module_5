import React from "react"
export function Edit() {
    return (
        <>
            <div id="customerCss">
                <section className="vh-100" style={{background: "rgb(243, 242, 236)"}}>
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col col-xl-10">
                                <div className="card" style={{borderRadius:"1rem"}}>
                                    <div className="row g-0">
                                        <div className="col-md-6 col-lg-5 d-none d-md-block">
                                            <img src="..\images\property-2.jpg"
                                                alt="login form" className="img-fluid" style={{borderRadius: "1rem 0 0 1rem",height:"100%"}}  />
                                        </div>
                                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                            <div className="card-body p-4 p-lg-5 text-black">
                                                <form >
                                                    <h3>Edit Form</h3>

                                                    <div className="user">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div>
                                                                    <label for="name" style={{fontWeight: "bold"}}>Name Service<span
                                                                        className="spanRed">(*)</span>:</label>
                                                                    <input id="name" type="text" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div>
                                                                    <label for="name" style={{fontWeight: "bold"}}>Area<span
                                                                        className="spanRed">(*)</span>:</label>
                                                                    <input id="address" type="text"/ >
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div>
                                                                    <label for="phoneNumber" style={{fontWeight: "bold"}}>Price<span
                                                                        className="spanRed">(*)</span></label>
                                                                    <input id="phoneNumber" type="text"
                                                                        pattern="^0[0-9]{9}$"
                                                                        required oninput="checkPhoneNumber()"
                                                                        placeholder="ex:0123456789" />
                                                                 
                                                                    <span style={{color: "red"}}></span>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="mt-4 pt-2">
                                                            <input type="submit" value="Submit" className="mt-4"
                                                                style={{backgroundColor: "#DAA55A"}} />
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