import React, {useState} from 'react'
// Burada useState defaultsuz import edilmiş oluyor.
import { Button } from 'react-bootstrap'

const State = () => {

    const [mode, setMode] = useState("light") // State'ler render olmaz buranın aşağısında kalan kısım render olur.

    // mode = "dark" // Bu şekilde değişkeni değiştirmemize izin vermez.
    // Değişkeni değiştimek için setMode kullanmamız gerekir.

    // let mode = "light"; // Yukarıdaki ifade aslında bunun özeti gibi 
    // const setMode = (m) => {
    //     mode = m
    // }

    let classNames = "bg-light text-dark p-5"; // Yukarıda verdiğimiz ilk değerin classNames'i burann içindekiler oldu. // Bu değişkenin karşılığını yazmazsak aşağıda bunu else kısmına eklemek gerekir.

    if(mode === "dark"){
        classNames = "bg-dark text-light p-5"
    }

    return (
        <div className={classNames}>
            <h1 className='text-center'>Dark/Light Mode Switcher</h1>
            <div className='d-flex justify-content-evenly mt-5'>
            <Button onClick={() => setMode("dark")}>Dark Mode</Button>
            <Button onClick={() => setMode("light")}>Light Mode</Button>
            </div>
        </div>
      )
}

export default State

// Kullanıcı tarafında buttonlardan birine basıldığında ekranda meydana gelen bir değişiklik ile 17. satırdan itibaren fonksiyon tekrar render ediliyor.