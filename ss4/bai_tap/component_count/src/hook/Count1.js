import React, { useState } from "react"
function Count1() {
    let [countOne, setCountOne] = useState(0);
    return (
        <>
            <div>
                <div>
                    <p>Count 1: {countOne}</p>
                    <button onClick={() => {
                        setCountOne((previousCount) => previousCount + 1)
                    }}>
                        Click Me
                    </button>
                </div>
            </div>
        </>
    )
}
export default Count1
