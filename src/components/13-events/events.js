import React from 'react'

const Events = () => {
    // Event Handler
    const sayHello1 = () => { 
        alert("Hello")
    }
    const sayHello2 = (name) => { 
        alert(`Hello ${name}`)
    }

    // Burada sayHello2'yi bir fonksiyonmuş gibi çağırırsak click işlemini beklemeden çalışır. Click işleminde bir daha çağırır.
    // document.querySelector("btn").onClick = sayHello2()
    // Bu yöntemde ise önce click işlemini bekler sonra sayHello2 fonksiyonu çalışır.
    // document.querySelector("btn").onClick = sayHello2

  return (
    <div>
        {/* Event handler parametresiz çağrılırsa aşağıdaki gibi fonksiyon kullanmadan bir yapı oluşturulabilir. */}
        <div onClick={sayHello1}>Say Hello1</div>
        {/* Eğer event handler'a parametre gönderilecekse dışardan bir değer alabilecekse aşağıdaki gibi bir fonksiyon kullanmak zorunludur. */}
        <div onClick={() => sayHello2("Sinan")}>Say Hello2</div>
        {/* Burada arrow function kullanmazsak react öncelikle onclick event'ini beklemeden doğrudan sayHello fonksiyonunu çağırır ve Yukarıdaki javascriptten farklı olarak buttona tıkladığımızda çalışmaz. */}
    </div>
  )
}

export default Events