import React from 'react'
import { Button } from 'react-bootstrap'

const Stateless = () => {

    let mode = "light";
    let classNames = "bg-light text-dark p-5";

    const setMode = (m) => {
        mode = m;
        if(mode === "dark"){
            classNames = "bg-dark text-light p-5"
        }
        else{
            classNames = "bg-light text-dark p-5";
        }
        document.getElementById("switcher").setAttribute("class", classNames) // Bu şekilde return kısmına bunun değişmesi gerektiğini haber vermek gerekiyor. // Bu arada classNames kullanmayıp class kullanmamızın sebebi document.getElementById'nin doğrudan DOM'a erişimidir. // Tabi bu yöntemde react'ın yapısına uygun olmadığı için useState kullanmak zorunda kalıyoruz. // bu yolda tüm site ilk başta render oluyor ama bu satır olmadan ve aşağıda ilgili id olmadan dom'u manipüle edemiyoruz ya da manipüle ettiğimizi dom'a anlatamıyoruz. O sebeple değişikler gelmiyor.

        console.log(mode);
        console.log(classNames)
    }

    // Aşağıdaki durumlarda return kısmı kendini render edemediği için bir render lazım ya da return içine id verip yukarıdaki gibi onu dom'dan çağırmak ve ona class eklemek gerekir.

    // let mode = "light";
    // let classNames = "bg-light text-dark p-5";

    // const setMode = (m) => {  // if'i buradaki gibi fonksiyonumuzun içinde çalıştırdığımızda da return kısmın içini etkilemeyecektir. 
    //     mode = m;
    //     if(mode === "dark"){
    //         classNames = "bg-dark text-light p-5"
    //     }
    //     else{
    //         classNames = "bg-light text-dark p-5";
    //     }

    //     console.log(mode);
    //     console.log(classNames)
    // }

    // let mode = "dark";
    // const setMode = (m) => { // Burada setMode çalışacaktır ancak return'ün içine etki etmeyecektir.
    //     mode = m;
    // console.log(mode)
    // }
    // let classNames = "bg-light text-dark p-5"; // return kısmında uzun uzun stil özelliklerini yazmaktansa bu şekilde değişkene atayarak da kullanabiliriz.
    // if(mode === "dark"){
    //     classNames = "bg-dark text-light p-5"
    // }
    // console.log(classNames)

  return (
    // <div className="bg-dark text-light p-5">
    // <div className={`p-5 ${mode === "light" ? "bg-light text-dark" : "bg-dark text-light"}`}> // Burada da yukarıdaki if'i kullanma şansımız var.
    // En sade yöntemi ise aşağıdaki gibi kullanmaktır.
    <div id="switcher" className={classNames}> 
        <h1 className='text-center'>Dark/Light Mode Switcher</h1>
        <div className='d-flex justify-content-evenly mt-5'>
        <Button onClick={() => setMode("dark")}>Dark Mode</Button>
        <Button onClick={() => setMode("light")}>Light Mode</Button>
        </div>
    </div>
  )
}

export default Stateless

  // Bu arada window bazlı eventler(scroll gibi)'de dom ile useState'in birlikte kullanıldığı durumlar oluşabiliyor. Çünkü useState ile scroll gibi eventler oluşturulamıyor.