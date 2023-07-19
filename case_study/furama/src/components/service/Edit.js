export default function Edit() {
    return (
        <>
<div className="container">
    <div style="width: 600px;">
        <form>
            <h3 style={{textAlign: "center"}}>Edit Service</h3>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Name Service</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword2" className="form-label">Area</label>
                <input type="text" className="form-control" id="exampleInputPassword2"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword3" className="form-label">Price</label>
                <input type="text" className="form-control" id="exampleInputPassword3"/>
            </div>
            <button type="submit" className="btn btn-outline-primary">Update</button>
        </form>
    </div>
</div>
        </>
    )
}