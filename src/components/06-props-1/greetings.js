import React from 'react'
import Welcome from './welcome'
// Bu Componente Welcome componentini çağırıyoruz.
// Greetings componentini ise app componentinde çağırıyoruz.

const Greetings = () => {
  return (
    <div>
        <h1>Greetings Component</h1>
        <Welcome firstName="Ali" lastName="Gel"/>
        <Welcome firstName="Ayşe" lastName="Gel"/>
        {/* Welcome componentinin içinde yer alan propslara değer atayarak burada kullanıyoruz. */}
    </div>
  )
}

export default Greetings