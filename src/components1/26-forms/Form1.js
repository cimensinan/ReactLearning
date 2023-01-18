import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'


// Form yapılarında temel amaç kullanıcının girdiği değeri alıp useState'de tutmaktır. useRef'de kullanılabilir. Bunun için bir de button kullanmak gerekir. Butona basılınca butonun içerisinde useRef.current.value diyerek textbox'ların içindeki değerler çekilebilir.
const Form1 = () => {
    // Form control'ün içinde gerçekleşecek her değişiklik name değeri ile gösterilebilecek.
    const [name, setName] = useState("Sinan")
    // Başlangıç değeri belirlediğimizde default olarak o değer de gözükecektir.

  return (
    <Container className='mt-5'>
        <Form>
            <h1>Merhaba {name}</h1>
            <Form.Control
            type="text"
            placeholder='Enter your name'
            // Kullanıcıdan bilgiyi alıp SetState'in içine attık. Bunun için yukarıda useState yapısı oluşturmamız gerekiyor.
            onChange={(e) => setName(e.target.value)}
            // Value state'deki değeri buraya getirir.
            value={name}/>
            {/* Buradaki value değeri üzerinden farklı textbox'lardaki değerleri alıp farklı işlemler yapabiliriz. */}
        </Form>
    </Container>
  )
}

export default Form1