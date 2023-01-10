import React from 'react'

const Events = () => {
    // Event Handler
    const sayHello1 = () => { 
        alert("Hello")
    }
    const sayHello2 = (name) => { 
        alert(`Hello ${name}`)
    }

  return (
    <div>
        {/* Event handler parametresiz çağrılırsa aşağıdaki gibi fonksiyon kullanmadan bir yapı oluşturulabilir. */}
        <div onClick={sayHello1}>Say Hello1</div>
        {/* Eğer event handler'a parametre gönderilecekse aşağıdaki gibi bir fonksiyon kullanmak zorunludur. */}
        <div onClick={() => sayHello2("Sinan")}>Say Hello2</div>

    </div>
  )
}

export default Events