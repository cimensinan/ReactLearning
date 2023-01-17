import React from 'react'

// prop'u burada süslü parantezle karşılayabiliriz. Diğer destructuring yöntemini de kullanabiliriz.
const ChildComp = ({handleCounter}) => {
  return (
    <div>
        {/* onClick üzerinden parent'taki handleCounter adlı methodumuza parametre değeri olarak 10 sayısını gönderiyoruz. Counter değerimizin 10'a 10'ar artmasını sağlamış olduk.*/}
        {/* Burada illa sayı göndermek zorunda değiliriz. Dizi, obje, string bir ifade farketmez hepsini gönderebiliriz. */}
        <button onClick={() => handleCounter(10)}>Set Counter</button>
    </div>
  )
}

export default ChildComp