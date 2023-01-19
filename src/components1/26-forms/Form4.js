import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

// Form yapılarında, name, value ve onChange yapısının kullanımı zorunludur. Çünkü state yapısıyla bağlantısını sağlamanın yolu buradan geçer. Ancak ilerde bu ikisinin tek hamlede yapılabildiği bir format göreceğiz.

const Form4 = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  console.log(formData);

  // onChange kısmında sürekli ...formData, firstName: e.target.value yapısını kullanmak yerine bir fonksiyonla daha kısa bir yapı haline getirebiliriz.
  const handleFormData = (e) => {
    const { name, value } = e.target; // destructuring yapıyoruz. Bunu yapmasaydık "const name = e.target.name;" "const value = e.target.value" yapacaktık
    setFormData({...formData, [name]: value}); // [firstName]: "Ali" gibi bir yapı oldu. // Burada name key'inizi [] köşeli parantez içine almazsak normal bir name değeri olarak algılıyor ve objemize 5. bir data olarak name ifadesini ekliyor.
  };

  return (
    <Container className="mt-5">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>İsim</Form.Label>
          <Form.Control
          // Yukarıdan bir fonksiyonla onChange apacağımızda "name" key'ini kullanmamız gerekiyor ve içerisindeki değerinde formData'dakiler ile aynı olması gerekiyor
            name="firstName"
            type="text"
            placeholder="Adınızı giriniz"
            value={formData.firstName}
            onChange={(e) => handleFormData(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Soyisim</Form.Label>
          <Form.Control
            name="lastName"
            type="text"
            placeholder="Soyadınızı giriniz"
            value={formData.lastName}
            onChange={(e) => handleFormData(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Epostanızı giriniz"
            value={formData.email}
            onChange={(e) => handleFormData(e)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Telefon</Form.Label>
          <Form.Control
            name="phone"
            type="text"
            placeholder="Telefonunuzu giriniz"
            value={formData.phone}
            onChange={(e) => handleFormData(e)}
          />
        </Form.Group>
      </Form>
    </Container>
  );
};
export default Form4;