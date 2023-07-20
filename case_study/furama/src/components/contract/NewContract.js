import React from "react"
export function NewContract() {
  return (
    <>
      <div id="contractCss">
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
                          <h3>Form Contract Furama </h3>

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
                                  <label for="area" style={{ fontWeight: "bold" }}>Day Start<span
                                    className="spanRed">(*)</span></label>
                                  <input id="area" type="text" />
                                  <span style={{ color: "red" }}></span>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-6">
                                <div>
                                  <label for="cost" style={{ fontWeight: "bold" }}>Name Customer<span
                                    className="spanRed">(*)</span>:</label>
                                  <input id="cost" type="text" />
                                </div>
                              </div>
                              <div className="col-6">

                                <div>
                                  <label for="person" style={{ fontWeight: "bold" }}>Day End<span
                                    className="spanRed">(*)</span></label>
                                  <input id="person" type="text" />
                                  <span style={{ color: "red" }}></span>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-6">
                                <div>
                                  <label for="pool" style={{ fontWeight: "bold" }}>Deposil<span
                                    className="pool">(*)</span></label>
                                  <input id="phoneNumber" type="text" />
                                  <span style={{ color: "red" }}></span>
                                </div>
                              </div>
                              <div className="col-6">
                                <div>
                                  <label for="pool" style={{ fontWeight: "bold" }}>Id Contract<span
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