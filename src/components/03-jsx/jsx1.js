import React from 'react'

const Jsx1 = () => {

    const message = "Class isimleri className içinde verilir ve attribute'ler camelCase olarak yazılır."

  return (
    <ul>
        <li>Tüm elementler tek bir root içinde olmalı.</li>
        <li className='title'>{message}</li>
    </ul>
  )
}

export default Jsx1