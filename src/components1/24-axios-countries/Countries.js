/* import axios from 'axios'
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

export default Countries */


import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import Country from "./Country";

const Countries = () => {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fonksiyon olduğundan çağrıldığında çalışır.
  const loadData = async () => {
    // await axios yönteminde try catch kullanımı da aşağıdaki gibidir. awaitsiz ve then'li yapı kullanmayı tercih ettiğimizde ise klasik then kullanımından sonra catch kullanımına geçilir.
    try {
      const resp = await axios.get("https://restcountries.com/v3.1/all");
      
      // useState yapısında tuttuğumuz countries yapımıza üstteki url'den gelen endpointi olduğu gibi göndermek gereksiz bir veri aktarımına neden olacağı için bu api'dan kendi dizimizi oluştururup onu göndermek daha sağlıklıdır.
      
      /* const arr = resp.data.map((item, index) => {
        return {
        index: index,
        flag: item.flags.png,
        name: item.name.common,
        population: item.population,
        capital: item.capital?.join("-"),
        currencies: item.currencies ? Object.keys(item.currencies).map(cur => item.currencies[cur].name).join(" - ") : ""
        }
      } */

      // Ayrıca burada return ifadesi kullanmamak için () normal parantezleri kullanaraktan map'e tek satırlık işlem yapacaksın demeye çalışıyoruz.
      
      const arr = resp.data.map((item, index) => ({
        index: index,
        flag: item.flags.png,
        name: item.name.common,
        population: item.population,
        // Birden fazla başkente sahip ülkeler bulunduğu için bunları "join" ile birleştirdik. İlkini almak isteseydik "item.capital[0]"" diyebilirdik. Ayrıca başkenti olmayan ülkeler bulunduğu için capital ifadesinden sonra nullish yapısını "?"" koyduk bu alan boş(null) değilse, false değilse başkentini getir dedik.
        capital: item.capital?.join("-"),
        // endpointteki currencies yapısı obje içinde obje şeklinde tanımlanmış. Bu sebeple öncelikle her ülkenin currencies değeri olmadığından değeri varsa diye bir şart koyuyoruz. Yoksa ("") boş string getir diyoruz. Sonrasında "Object.keys()" yapısı ile item.currencies objesinin key değerlerine yani "CKD" ve "NZD" ifadelerine erişiyoruz. Ancak biz key'lerin içerisinde yazan name key'ine ulaşmak istediğimizden elde ettiğimiz diziyi map ile yeni bir dizi haline daha getiriyoruz ve key'i [cur] olanın içinden name değerini aralarına (-) koyarak join ile yazdırıyoruz. (cur ifadesi bizim belirlediğimiz item benzeri bir ifade)
        currencies: item.currencies ? Object.keys(item.currencies).map(cur => item.currencies[cur].name).join(" - ") : ""
      }));

      /* currencies: {
        "CKD": {
            "name": "Cook Islands dollar",
            "symbol": "$"
        },
        "NZD": {
            "name": "New Zealand dollar",
            "symbol": "$"
        }
      } */

      // Datadan herhangi bir veriyi silip yeni bir dizi yapmak istediğimizde aşağıdaki gibi bir fonksiyon ve delete methodu kullanılabilir.
      /* const arr =resp.data.map((item) => {
        delete item.region;
        return item
      }) */

      setCountries(arr);
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect yapıları return işleminden sonra çalışır.
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Flag</th>
          <th>Country Name</th>
          <th>Population</th>
          <th>Capital</th>
          <th>Curency</th>
        </tr>
      </thead>
      <tbody>
        {/* Yukarıdaki arr fonksiyonumuzla kullanmayacağımız datalardan arındırılmış yapıyı buraya gönderdik. */}
        {countries.map((item) => (
          <Country {...item} key={item.name}/>
        ))}
      </tbody>
    </Table>
    {loading && <Spinner animation="border" variant="primary"/>}
    </div>
  );
};

export default Countries;
