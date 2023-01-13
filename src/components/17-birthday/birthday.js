import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import CardPerson from './cardPerson'
import data from "./people.json"

const Birthday = () => {

    const [people, setPeople] = useState(data); // ilk değerini json dosyamızdan alıyoruz. useState kullanmadan önce biz json dosyalarını manipüle edemiyorduk. Bu şekilde edebileceğiz.

    const deletePerson = (id) => {
      const arr = people.filter((item) => item.id !== id)
      // ilgili id'ye sahip olmayan elemanları filtrele demiş olduk
      setPeople(arr);
    }

  return (
    <Container>
        <h1>Bugün Doğanlar</h1>
        <p>Bugün doğan {people.length} kişi bulundu</p>
        {
          // Artık map'leme işlerimizi json'dan değil json'ın tutulduğu getter değerlerimizden yapacağız.
            people.map((item) => (
                <CardPerson key={item.id} {...item} deletePerson={deletePerson}/>
                // <CardPerson key={item.id} {...item} setPeople={setPeople}/>
                // prop göndermenin kısa yolu spread operatörü kullanmaktır.
                // CardPerson componentimize buradan deletePerson'u prop olarak gönderdik. Süslü parantez içine yazdığım ise fonksiyonum. Genelde tanımlayıcı ile fonksiyonun isimleri aynı kullanılıyor, karışıklık böylece engellenebiliyor.
            ))
        }
        <Button className='me-1' variant='danger' onClick={() => setPeople([])}>Remove All</Button>
        {/* Boş dizi getir demiş olduk */}
        {/* setPeople(null) yapmış olsaydık bu değeri gönderdiğimizde people'ın içi null değerine sahip olacak ve people kullandığımız diğer satırlarda hata alacağımız için ekranda herhangi bişey gözükmeyecektir. */}
        <Button className='me-1' variant='success' onClick={() => setPeople(data)}>Reload Data</Button>
        {/* data dizisini tekrar getir dedik. */}
        <Button className='me-1' variant='primary' onClick={() => setPeople([data[0]])}>Reload One Data</Button>
        {/* Burada setPeople(data[0]) şeklinde kullanımımızda dizi getirmez data'nın içindeki ilgili indexdeki objeyi getirir. Bu nedenle tekrardan dizi içerisine almamız gerekiyor. */}
        {/* Burada yer verdiğimiz variant, onClick gibi ifadelerin hepsi aslında bootstrap'in propları key olarak bu ifadeyi kullanıp karşısına da value'sini yazıyoruz. */}
    </Container>
  )
}

export default Birthday