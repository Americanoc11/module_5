import React from "react"
import useCount from "../hook/UseCount";
function Count2() {
    const { count, increment } = useCount(0, 2)
    return (
        <div>
            <p>Count 2: {count}</p>
            <button onClick={increment}>
                Click me
            </button>
        </div>
    );
}
export default Count2
