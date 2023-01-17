import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [email, setEmail] = useState("");
 
    // Step 1 create method that does something
    const emailHandler = (email) => {
       setEmail(email);
    }
 
    return (
       <div>
          // Step 2 pass the method as props to child
          <Child onEmail={emailHandler} />
       </div>  
    )
 }

export default Parent