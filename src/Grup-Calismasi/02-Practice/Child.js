import React from 'react'

const Child = (props) => {

        const {email} = props

       // Step 3 pass the email you got from the input to the parent's method
       const emailChangeHandler = () => {
          props.onEmail(email);
       }
    
       return (
          <div>
             <input onChange={emailChangeHandler} />
          </div>  
       )
    }

export default Child