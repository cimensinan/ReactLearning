import React, { useRef } from 'react'
import { Container } from 'react-bootstrap'

const UseRef = () => {
    // İlgili elemana erişip, elemanın özelliklerinde değişiklik yapmak için react'ta useRef yöntemi kullanılması gerekir. Bu zamana kadar elemana ulaşıp özelliklerinde değişiklik yapmamıştık.
    // Bu arada useRef bir render veya re-render işlemi uygulamaz. Sadece virtual DOM'a aracılığıyla DOM'u değiştirmek için kullanılan bir yapıdır..

    // const val = "example@example.com"

    // Aşağıda input elemanına id vererek core java'da yaptığımız gibi dom üzerinden input'a ulaşabiliyoruz ve istediğimiz değişikliği yaptırabiliyoruz. Ancak react bu yöntemden pek hoşlanmıyor, herhangi bir sorunla karşılaşabileceğimizi belirtiyor.
    /* const setFocus = () => { 
        const txtEmail = document.getElementById("txtEmail")
        txtEmail.focus()
    } */

    // input'a erişmek için bir tane referans değer tanımladık ve default değer olan null ifadesini parametre olarak ekledik ve aşağıda input ile ilişkilendirdik.
    const emailRef = useRef(null)
    // button'a erişmek için bir tane referans değer tanımladık ve default değer olan null ifadesini parametre olarak ekledik ve aşağıda button ile ilişkilendirdik.
    const btnRef = useRef(null)

    const setFocus = () => { 
        console.log(emailRef) // referans tanımları "current" adlı bir değere sahip ve içine de ilgili elemanın değerlerini koyar 
        console.log(btnRef)
        emailRef.current.focus() // elemana erişmek için burada current ifadesini de kullanmak gerekiyor.
        emailRef.current.style.backgroundColor = "red"
        // emailRef.current.classList.add("")
    }


  return (
    <Container className='mt-5'>
        {/* Yukarıda yazdığımız js kodlarını html'de görmek istediğimizde buradaki gibi inputun içine girip yukarıdaki değişkeni yerleştiriyorduk.*/}
        {/* id üzerinden input'a erişmeye çalıştık. Ancak react hoşlanmıyor. */}
        {/* <input type="text" placeholder='Enter your email' value={val} id="txtEmail"/> */}

        {/* id yerine react bir tane referans değer tanımlamamızı istiyor. Yukarıda tanımladığımız referans değeri input'a yerleştirdik.*/}
        <input type="text" placeholder='Enter your email' ref={emailRef}/>
        <button onClick={setFocus} ref={btnRef}>Set Focus</button>
        {/* Burada inputa buttona tıklandığında focus özelliği kazandırmak için setFocus adında bir onClick fonksiyon tanımlıyoruz.*/}
    </Container>
  )
}

export default UseRef