import React, { useState } from "react"
function Count2() {
    let [countTwo, setCountTwo] = useState(0);
    return (
        <>
            <div>
                <div>
                    <p>Count 2: {countTwo}</p>
                    <button onClick={() => {
                        setCountTwo((previousCount) => previousCount + 2)
                    }}>
                        Click Me
                    </button>
                </div>
            </div>
        </>
    )
}
export default Count2