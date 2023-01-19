import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Form5 = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  // Burada parametre olarak e ifadesini kullanmamızın sebebi e.preventDefault() metodunu kullanmak için yoksa onSubmit'ten buraya gönderdiğimiz bir parametre değil.
  const handleSubmit = (e) => {
    // Default olan submit davranışını engellemiş olduk.
    e.preventDefault();

    /* Buradaki gibi bir yapı kullanırsak durmadan hata mesajı alırız. Adım adım hata mesajlarını göstermez hepsini aynı anda gösterir. Bunu önlemek için ilk yöntem alert'lardan sonra "return;" ifadesini de kullanmaktır. Birinde hata varsa diğerine geçişi önlemiş oluruz.
    if(!formData.firstName) alert("Adınızı Giriniz")
    if(!formData.lastName) alert("Soyadınızı Giriniz")
    */

    // Ya da "try-catch" yapısı kullanılarak alert ve return ifadelerinden kurtulmuş oluruz.
    // Bunun için try tarafında kullandığımız, kısa hali "throw", uzun hali "throw new Error" olan yapı ile hata mesajlarını catch tarafına fırlatabiliyoruz. İlkinde string fırlatırken ikinci de error objesi şeklinde fırlatıyoruz.
    try {
        // Burada daha detaylı kontrollerde yapılabilir. Regex kullanılabilir.
        if(!formData.firstName) throw new Error("Adınızı Giriniz")
        if(!formData.lastName) throw new Error("Soyadınızı Giriniz")
        if(!formData.email) throw new Error("E-postanızı Giriniz")
        if(!formData.phone) throw new Error("Telefonunuzu Giriniz")

        // Normal şartlarda backend bağlantımızı burada yapmamız gerekiyor şimdilik bunu setTimeout ile veri gönderiyormuş gibi yapıyoruz.
        setTimeout(() => {
            alert("Bilgileriniz gönderildi.")
            // form yapımızın bağlantısı useState yapısı üzerinden olduğundan aşağıdan reset butonu ekleyerek yapamayız formun içini temizleyemeyiz. Bu yüzden alert'ı gösterdikten sonra form yapısının içini aşağıdaki gibi temzilettik. 
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
              });
        }, 1000)
    } catch (err) {
        // konsolda kırmızı renkte yazdırmak için console.error() kullandık.
        console.error(err)
        // err.message dediğimizde ise try'da fırlattığımız hata mesajlarını da ekrana yazdırmış oluruz.
        alert(err.message)
    }
  }

  return (
    <Container className="mt-5">
      {/* Form yapılarında method yazılmazsa default olarak "get" ile gönderir. get ile göndermek browserın link kısmında formda doldurduğumuz verilerin gözükecek şekilde gönderilmesi demektir. Bu sebeple burası çok mantıklı değil, ayrıca oranın bir kapasitesi var, gereksiz yere zorlamış oluruz.*/}
      {/* Form yapıları genelde "post" ile gönderilir. Herhangi bir kapasite sınırı da bulunmuyor. Normal şartlarda buradan post işlemi gerçekleştirmeyeceğiz. post işlemlerini axios'dan yapacağız. Klasik tip uygulamalarda kullanılabilir. Single-page-application(SPA)'da değil multiple-page-application(MPA) yapılarda bu şekilde kullanımı vardır. Bu şekildeyken post edeceği yeri form yapısının sahip olduğu action attribute ile belirliyoruz.*/}
      {/* Burada form verilerinin e-mailimize gelmesi için "https://formspark.io" adlı siteden formun içerisine bir email tanımlıyoruz daha sonra burada action kısmına onların bize verdiği sunucunun adresini yazıyoruz ve 200 kadar formu bu şekilde mailimize ücretsiz gönderilmesini sağlayabiliyoruz. Daha sonrası için de düşük bir ücretlendirmesi var.*/}
      {/* Bu formun içerisine yerleştirilen ve type'ı submit olan butona tıkladığımızda form yapısının tamamı submit edilir. Bu yüzden bu hareketi takit edebilmek için form tagının içerisine "onSubmit"={function}" event'imizi yerleştiriyoruz. Normal butona onClick eventi verilerek de yapılabilir ancak çok tercih edilen bir yöntem değil.*/}
      {/* onChange eventinde arrow function yapısını((e)=>handleClick(e)) kullanıyorduk ve e'yi parametre olarak belirliyorduk. Ancak bunu buradan bir parametre göndermek istediğimizde yapıyoruz. onSubmit yapısında ise bir parametre göndermeyeceğimiz için arrow function ve e parametresini kullanmıyoruz.*/}
      <Form method="post" onSubmit={handleSubmit} noValidate>
        {/* Bu form yapısında yukarıda kendi kontrol yapımızı oluşturduğumuz için html'in form'ların içinde yer alan type'ları dikkate alarak oluşturduğu kendi kontrol sistemini devre dışı bırakmamız gerekiyor. Bu sebeple de "noValidate" attribute'nü kullanıyoruz. Bunu yapmamızın sebebi bu tarz kontrollerin browserlara bırakılmamsı gerektiğinden ve her browserda bu kontrollerin olmama ihtimalinin bulunmasıdır.*/}
        <Form.Group className="mb-3">
          <Form.Label>İsim</Form.Label>
          <Form.Control
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
        <Form.Group className="mb-3">
          <Form.Label>Telefon</Form.Label>
          <Form.Control
            name="phone"
            type="text"
            placeholder="Telefonunuzu giriniz"
            value={formData.phone}
            onChange={(e) => handleFormData(e)}
          />
        </Form.Group>
        {/* Önceki form yapılarından farklı olarak button ekleyip submit yapıyoruz. Burada type'ı submit belirlediğimiz için butona basınca doğrudan sayfadan ayrılıyor. Bunu da önlememiz gerekiyor. (e.preventDefault())*/}
        <Button variant="info" type="submit">Kaydet</Button>
      </Form>
    </Container>
  );
};
export default Form5;