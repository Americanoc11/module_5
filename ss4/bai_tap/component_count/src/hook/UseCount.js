import React, { useState } from "react";

const useCount = (initial = 0, step = 1) => {
    const [count, setCount] = useState(initial)
    const increment = () => {
        setCount((previousCount) => previousCount + step)
    }
    return { count, increment }
}
export default useCount;