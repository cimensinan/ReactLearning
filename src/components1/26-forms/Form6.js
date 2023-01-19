// Login formu yapıyoruz.
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
// Yup'ı import ederken; "yup" kütüphanesinin içinde birçok şey var export edilen, bunların hepsini "*" diyerek import et ve bunların adına da "as Yup" diyerek "Yup" de demiş oluyoruz. Burada geçen "as" ifadesi alias'ın kısaltması, alias da takma ad demektir.
import * as Yup from "yup";

// Formik ve Yup kütüphanelerini kullanaraktan kendi form yapımızı oluşturacağız. Böylece form üzerindeki kontrolümüzü artırabileceğiz.
const Form6 = () => {

  // Formik yapısının 1. aşamasında form elemanlarımızı ve değerlerini belirliyoruz. useState kullanarak yaptığımızın mantığın aynısı.
  const initialValues = {
    email: "",
    password: "",
    remember: false,
  };

  // Formik yapısının 2. aşamasında Yup kütüphanesini object yapısını kullanıyoruz. Formumuzun kurallarını burada belirliyoruz. Daha önce try bölümünde yaptığımız mantıkla ama yup'ın kendine özel yapılarıyla.
  const validationSchema = Yup.object({
    // email string türünde, email formatında olsun ve doldurulması zorunlu olsun gibi şartlar belirleyebiliyoruz. Hata mesajlarını da ayrı ayrı parantez içlerine yazabiliyoruz. Hata mesajı yazmazsak kendisi ingilizce default bir hata mesajı getiriyor.
    email: Yup.string()
      .email("Geçerli bir e-posta giriniz")
      .required("Boş geçmeyiniz"),
    password: Yup.string().required("Şifrenizi giriniz"),
  });

  // Formik yapısının 3. aşamasında burası arrow functionla oluşturulan ve içine values değerlerini alan bir yapıdır.
  // Form yapısının içinde çalışacak olan handleSubmit methodu yukarıdaki şartları vs kontrol edip formu buraya submit edecektir.
  // await yapısını bu fonksiyonda kullanıp asenkron bir yapı haline dönüştürdüğümüz için bu parametremizden önce de belirtiyoruz.
  const onSubmit = async (values) => {
    try{
        // bağlandığımız endpoint'in şartlarını sağlayacak bir yapı oluşturulmalı, email için string şartı varsa burada da string yapmalı ya da password için gereken diğer şartları sağlamalıyız.
        // İlgili api'da methodumuz ne ise onunla devam etmek zorundayız. Bu endpointte post'muş. Sonra base url'imizi yazıyoruz ve "/" diyip endpointimizi seçiyoruz.
        // Seçimi yaptıktan sonra virgül koyup parametremizi yani formda doldurduğumuz değerleri gönderiyoruz.
        const resp = await axios.post("https://carrental-v3-backend.herokuapp.com/login", values);
        // Girişin başarılı olup olmadığını console'da network kısmından görebiliriz.
        console.log(resp.data)
        // Ziya hocanın bu endpoint için emaili => "customer@carrental.com" password'u => "12345"
        // Başarılı girişte network'de gözüken token değerini localStorage'de saklamak istersek de aşağıdaki yapı gibi setItem yapılarak key value değeri yazılarak kullanılır.
        localStorage.setItem("token", resp.data.token)
        // Bu token değerini normalde her header kısmına koymak gerekir ki bizi sisteme her girdiğimizde tanısın. Bu kısım projede yapılacak.
    } catch(err) {
        console.log(err)
        // Ekrana hata mesajını yazdırmak istersek axios metodunda aşağıdaki yapı kullanılmak zorunda. "message" ifadesinin içeriği ise backend tarafından belirlenir.
        alert(err.response.data.message)
    }
  };

  // Bu 3 yapıyı burada useFormik hook'u ile bir araya getiriyoruz.
  // Oluşturulan bir objenin içindeki key ve value değerleri birbiri ile aynı ifadelerle temsil ediliyorlarsa JS bunları tekrar etmemize gerek olmadığını düşünerek bir kere yazmamızı kabul ediyor.
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Container className="mt-5">
      {/* HTML5'in kendi validation sistemini öncelikle devre dışı bırakıyoruz. */}
      {/* Sonrasında useFormik hook'unu kullanarak biraraya getirdiğimiz formik elemanlarını formik'in handle methodlarını kullanarak ve onSubmit içinde formik.handleSubmit diyerek çağırıyoruz. Butona basıldığında formik'in handleSubmit methodu devreye girecektir.*/}
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            // name = "email" onChange = {() => formik.handleChange("email")} value = {formik.values.email}
            // formik.handleChange => Bu yapı bize form elemanlarının değerlerinde bir değişiklik olursa onu al ve tut demek içindir.
            // Normalde üstteki şekilde kullanılarak input değerlerini useFormik hook'u içerisinde olduğu varsayılan state içinde tutabiliyorduk. Ancak formik kütüphanesi bu 3 attribute'ü aşağıdaki şekilde kısa hale getirmiş. Bu form elemanını formik ile bağlamış oluyor. Parantez içindeki değeri yukarıda initialValues'de belirttiğim şekilde yazmamız gerekiyor.
            {...formik.getFieldProps("email")}
            // "formik.errors" kısmı email ile ilgili hatalar varsa border'ı kırmızı yapıyor ve uyarı veriyor, bunu iki "!!"" ile belirtmemizin nedeni ise formik'in bu şekilde tavsiye etmesi bunu yapmazsan hatalı çalışma ihtimalinin olduğundan bahsediyor. isInvalid string bir ifade olduğunda boolean değerini tam tespit edemiyorum diyor ve kendini bu şekilde garantiye alıyor.
            // "formik.touched" kısmı ise form elemanlarından birinde hata alınınca hepsini hatalı gibi gösterme durumunu engelliyor. Sadece dokunduğum form elemanını kontrol ediyor.
            isInvalid={formik.touched.email && !!formik.errors.email}
            // Burada ise hata yoksa formik.errors yapısını false'a çevirerek border'ın yeşile dönmesini sağlıyor. "formik.touched" yapısı ise sadece dokunduğum form elemanının yeşile dönmesini sağlıyor.
            isValid={formik.touched.email && !formik.errors.email}
          />
          {/* Yukarıda belirttiğimiz hata mesajlarımızı bu feedback bölümü gösterecektir. invalid(geçersiz kimlik bilgisi) bir durum var ise burası da devreye girecektir. */}
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...formik.getFieldProps("password")}
            isInvalid={formik.touched.password && !!formik.errors.password}
            isValid={formik.touched.password && !formik.errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            {...formik.getFieldProps("remember")}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Form6;
