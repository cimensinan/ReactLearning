import React, { useRef } from 'react'
import { Container } from 'react-bootstrap'

const UseRef = () => {

    // const val = "example@example.com"

    // const setFocus = () => { 
    //     const txtEmail = document.getElementById("txtEmail")
    //     txtEmail.focus()
    // }

    const emailRef = useRef(null)
    const btnRef = useRef(null)

    const setFocus = () => { 
        console.log(emailRef)
        console.log(btnRef)
        emailRef.current.focus()
        emailRef.current.style.backgroundColor = "red"
        // emailRef.current.classList.add("")
    }


  return (
    <Container className='mt-5'>
        {/* <input type="text" placeholder='Enter your email' value={val} id="txtEmail"/> */}
        <input type="text" placeholder='Enter your email' ref={emailRef}/>
        <button onClick={setFocus} ref={btnRef}>Set Focus</button>
    </Container>
  )
}

export default UseRef