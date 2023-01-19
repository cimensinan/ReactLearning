import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'

const Form3 = () => {
  
/* 
    const [fisrtName, setFisrtName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
 */
  // Yukarıda yer alan useState kullanımlarının kısa yolu aşağıdaki gibi olmaktadır. Buradaki form'un tüm datasını tek bir yerde tutmuş oluruz ve bir obje elde ederiz.
    const [formData, setFormData] = useState({
        firstName:"",lastName:"",email:"",phone:""
    });
    console.log(formData);
  return (
    <Container className="mt-5">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>İsim</Form.Label>
          <Form.Control
            type="text"
            placeholder="Adınızı giriniz"
            // Her bir datayı ayrı ayrı state yapısı kurup tutmadığımız için burada firstName'in hangi state yapısı içinde olduğunu ifade etmemiz gerekiyor.
            value={formData.firstName}
            // Tek bir data olduğu için elimizde onChange'in içinde önce spread operatörü kullanarak datamızı shallow copy yapıyoruz ve içerisinde sadece ilgili değerimizi textbox'tan gelen değer ile değiştir demiş oluyoruz. Ayrıca setter ile getter'ı aynı anda kullanınca karşılaştığımız problem yani prev kullanma zorunluluğu, shallow copy ile ortadan kalkıyor.
            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            // Üstteki spread ile yapılmış yapının uzun hali aşağıdaki gibi olacaktır. Sadece firstName key'inin valuesini değiştirdik ve diğerlerini formData'daki haliyle tutmuş oldu.
            // onChange={(e) => setFormData({firstName: e.target.value, lastname: formData.lastName, phone: formData.phone, email: formData.email})}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Soyisim</Form.Label>
          <Form.Control
            type="text"
            placeholder="Soyadınızı giriniz"
            value={formData.lastName}
            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Epostanızı giriniz"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Telefon</Form.Label>
          <Form.Control
            type="text"
            placeholder="Telefonunuzu giriniz"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </Form.Group>
      </Form>
    </Container>
  )
}
export default Form3