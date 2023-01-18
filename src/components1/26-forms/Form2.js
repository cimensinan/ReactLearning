import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";

const Form2 = () => {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);

  // useEffect'in dependency bölümünden faydalanmak için bu yöntem ile toplamayı tercih ettik.
  useEffect(() => {
    // Number olarak algılaması için her state'e Number dedik ve toplanan değeri setNum3'de tut dedik. Aşağıda da value ile değeri gösterdik.
    setNum3(Number(num1) + Number(num2));
  }, [num1, num2]);

  return (
    <Container className="mt-5">
      <Form>
        {/* Form.Group componenti textbox'ları alt alta yerleştirir. */}
        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            placeholder="1.Sayı"
            // textbox'da değişiklik olunca state göndermek için onChange yöntemini kullanıyoruz.
            onChange={(e) => setNum1(e.target.value)}
            // state'de yaptığımız değişikliği de value ile buraya yazdırıyoruz.
            value={num1}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            placeholder="2.Sayı"
            onChange={(e) => setNum2(e.target.value)}
            value={num2}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            placeholder="3.Sayı"
            value={num3}
            disabled
            // Sonucu göstereceği için disabled dedik ve onChange yapmayacağız buraya sonucu yazdıracağız.
          />
        </Form.Group>
      </Form>
    </Container>
  );
};
export default Form2;
