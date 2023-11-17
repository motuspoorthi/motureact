import React, { useState} from 'react'
const Body = () => {
    const [ count,setCount]=useState(0)
    return (
        <div>
            
            <button onClick={() =>setCount(count+1)}>like</button>
            <p> Likes:{count}</p>
        </div>
    )
}
export default Header
