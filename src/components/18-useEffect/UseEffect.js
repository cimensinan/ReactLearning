import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';

const UseEffect = ({id}) => {

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    console.log("Bu satır render ve re-render durumlarında ve alttaki return kısmı render edilmeden önce çalıştırılır")

    // const loadData = () => {

    //  }
    //  loadData();

    useEffect(() => {
        console.log(`
        MOUNTING: Bu satır sadece render durumunda çalışır. Ancak re-render'larda çalışmaz`)
        return() => {
            console.log(`
            UNMOUNTING: Bu bölüm component hafızadan atılmadan hemen önce çalıştırılır.`)
        }
    }, [])

    useEffect(() => {
        console.log(`
        UPDATING: Bu satır render ve re-render durumlarında ve alttaki return kısmı render edildikten sonra çalıştırılır. Bu useEffect özellikle alttaki elementlere useRef ile erişmek için kullanılır`)
    })

    useEffect(() => {
        console.log(`
        UPDATING: Bu bölümdeki kodlar alt taraftaki yazılan dependecy'lerin (message, id) değişmesi durumunda çalışır.`)
    }, [message, id])
    // hem state hem de prop değştiğinde render olduğunu görmek için prop da ekledik.

  return (
    <div>
        <div>{message} - {error}</div>
        <Button variant='info' onClick={()=>setMessage("Hello")}>Set Message</Button>
        <Button variant='danger' onClick={()=>setError("Some errors")}>Throw Error</Button>
    </div>
  )
}

export default UseEffect