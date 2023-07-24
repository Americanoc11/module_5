import React from "react"
import useCount from "../hook/UseCount";
function Count1() {
    const { count, increment } = useCount(0, 1)
    return (
        <div>
            <p>Count 1: {count}</p>
            <button onClick={increment}>
                Click me
            </button>
        </div>
    );
}
export default Count1
