import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spinner, Table } from 'react-bootstrap'

const Countries = (props) => {

    const {flags, name, population, capital} = props

    // Bize axios ile gelen data json formatında geldiği için ve bu json bir dizi olduğu için başlangıç değerimizi boş dizi yapıyoruz.
    const [countries, setCountries] = useState([])
    // Sayfa ya da veriler yüklenene kadar geçen süre zarfında bir snippet çalışsın istiyorsak ona ilişkinde ayrı bir state tanımlaması yapmak gerekiyor. Başlangıçta gözükmesini istediğimiz için true değerini veriyoruz.
    const [loading, setLoading] = useState(true)

    // await'li yani bekletmeli bir yapı kullandığımızda bunu fonksiyonumuzda ifade etmek gerekiyor ve "async" diyerek asenkron bir yapı kullanacağımız haber veriyoruz.
    const loadData = async () => {
        // axios'u await'li yaptığımız için ve then kullanmamak için bu şekilde bir değişken daha tanımlıyoruz.
        const resp = await axios.get("https://restcountries.com/v3.1/all")
        // Bu haliyle bize response yapı gelir. Bize bu response'dan sadece data gerektiği için onu çağırıyoruz ve setCountries ile bu datayı countries'in içine alıyoruz.
        setCountries(resp.data)
        setLoading(false)
    }

    // useEffect'in içini çok kalabalıklaştırmamak için içeri tarafa yazacaklarımızı ayrı bir fonksiyon yaparız.
    useEffect(() => {
      loadData()
    }, [])
    
    

  return (
    <div>
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
      {
        countries.map((country, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td><img src={country.flags.png} alt="" width="150vw" className='rounded h-100'/></td>
            <td>{country.name.common}</td>
            <td>{country.population}</td>
            <td>{country.capital}</td>
        </tr>
        ))
      }
      </tbody>
    </Table>
    {loading && <Spinner animation="border" variant="primary"/>}
    </div>
    
  )
}

export default Countries