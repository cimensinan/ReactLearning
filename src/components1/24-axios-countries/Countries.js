import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

const Countries = () => {
    // Bize axios ile gelen data json formatında geldiği için ve bu json bir dizi olduğu için başlangıç değerimizi boş dizi yapıyoruz.
    const [countries, setCountries] = useState([])
    // Sayfa ya da veriler yüklenene kadar geçen süre zarfında bir snippet çalışsın istiyorsak ona ilişkinde ayrı bir state tanımlaması yapmak gerekiyor. Başlangıçta gözükmesini istediğimiz için true değerini veriyoruz.
    const [loading, setLoading] = useState(true)

    // await'li yani bekletmeli bir yapı kullandığımızda bunu fonksiyonumuzda ifade etmek gerekiyor ve "async" diyerek asenkron bir yapı kullanacağımız haber veriyoruz.
    const loadData = async () => {
        // axios'u await'li yaptığımız için ve then kullanmamak için bu şekilde bir değişken daha tanımlıyoruz.
        const resp = await axios.get("https://restcountries.com/v3.1/all")
        // Bu haliyle bize response yapı gelir. Bize bu response'dan sadece data gerektiği için onu çağırıyoruz ve setCountries ile bu datayı countries'in içine alıyoruz.
        console.log(resp.data)
        setCountries(resp.data)
    }

    // useEffect'in içini çok kalabalıklaştırmamak için içeri tarafa yazacaklarımızı ayrı bir fonksiyon yaparız.
    useEffect(() => {
      loadData()
    }, [])
    
    

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Bayrak</th>
          <th>Ülke</th>
          <th>Nüfus</th>
          <th>Başkent</th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>

      </tbody>
    </Table>
  )
}

export default Countries