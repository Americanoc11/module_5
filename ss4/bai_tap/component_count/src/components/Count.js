import React, { useState } from "react"

function Counter() {

    let [countOne, setCountOne] = useState(0);
    let [countTwo, setCountTwo] = useState(0);

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
                <div>
                    <p>Count 1: {countTwo}</p>
                    <button onClick={() => {
                        setCountTwo((previousCount) => previousCount + 1)
                    }}>
                        Click Me
                    </button>
                </div>
            </div>
        </>
    )
}
export default Counter