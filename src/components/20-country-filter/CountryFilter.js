import React, {useState, useEffect} from "react";
import data from "./countries.json";
import { Form, Table } from "react-bootstrap";

const CountryFilter = () => {
  const [countries, setCountries] = useState(data);
  // useState'ımizi direk json'daki dizileri alarak başlattık
  const [searchText, setSearchText] = useState("")
  

  // Her değişiklik olduğunda re-render olsun istediğimizden useEffect'in updating metodunu kullanıyoruz.
  useEffect(() => {
    const arr = data.filter((item) => item.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
    setCountries(arr);
  }, [searchText])
  // json'daki dizimize filtre uyguladık, her bir elemanın ismini aldık ve eğer seacrhText'te yazan değeri içeriyorsa bunu arr dizisinin içine koy dedik. Sonra da bu dizinin setCountries ile bağlantısını sağladık.
  

  return (
    <div className="p-5">
        <Form.Control type="text" placeholder="Type something..." className="mb-3" onChange={(e) => setSearchText(e.target.value)}/>
        {/* Formun içindeki hareketleri state'e bağlamamız gerektiğinden buradan setSearchText'e bağlantı sağlıyoruz. */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Country Code</th>
            <th>Country Name</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((item, index) => (
            <tr key={item.code}>
              {/* Burada yer vermiş olduğumuz değişmeyen key numaraları performans için daha sağlıklı, doğrudan index verdiğimizde dizideki elemanlarda eksilme, artma ya da herhangi bir değişiklik olduğunda baştan index numarası vermeye çalışacağından browser'ı yoracaktır.*/}
              <td>{index + 1}</td>
              <td>{item.code}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CountryFilter;
