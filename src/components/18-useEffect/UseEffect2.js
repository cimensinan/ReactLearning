import React, {useState, useEffect} from 'react'
import { Button, Container } from 'react-bootstrap'

const UseEffect2 = () => {

    const [counter, setCounter] = useState(0);

    // useEffect bu şekilde DOM'a erişmek durumunda kaldığımız zamanlarda da kullanılabiliyor. Aşağıdaki updating yöntemi ile state değiştiğinde componenti render et demiş oluyoruz.
    useEffect(() => {
      document.title = `Hello ${counter}`
    }, [counter])
    // Yenilenen counter değerini html'in title'ına ekliyoruz böylece browser'ın en üstünde bu değeri görmüş oluyoruz.
    

  return (
    <Container className='text-center mt-5'>
        <h1>{counter} kere tıkladın</h1>
        <Button variant='info' onClick={()=> setCounter((prev) => prev + 1)}>Click Me</Button>
        {/* butona tıklandığında counter'ı setCounter ile değiştiriyoruz. Önceki verdiğimiz değeri hafıza tutsun diye de prev kullanıyoruz. */}
    </Container>
  )
}

export default UseEffect2