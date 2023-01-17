import React, { useState } from 'react'
import ChildComp from './ChildComp';

const ParentComp = () => {

    const [counter, setCounter] = useState(0);

    // Child'da component gönderebilecek bir method tanımlanır. Dışardan aldığı değere göre işlem yapacak. İlgili değeri de child'den buraya göndermiş olacağız.
    const handleCounter = (val) => {
      console.log(val)
      setCounter(prev => prev + val)
    }
 
  return (
    <div>
      <div>Counter : {counter}</div>
      {/* Burada ise child componenti çağırıyoruz ve en önemlisi de prop olarak yukarıdaki methodumuzu gönderiyoruz. Genellikle prop ile methdoun adı aynı kullanılır. */}
      <ChildComp handleCounter={handleCounter}/>
    </div>
  )
}

export default ParentComp