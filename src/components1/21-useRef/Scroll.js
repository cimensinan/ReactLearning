import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import "./scroll.scss";

const Scroll = () => {
  // refAboutUs referansına sahip eleman seçtik
  const refAboutUs = useRef(null);

  // Bu örnekte DOM'a erişim sağlarken side effect'ler ortaya çıkacağından useEffect kullanmak zorundayız. Çünkü react'ın asıl işi virtual DOM ile doğrudan real DOM'a erişimde yan etkiler ortaya çıkar.
  // Mounting ve Unmounting yöntemini beraber kullanıyoruz.
  useEffect(() => {
    const handleScroll = () => { // Bu fonksiyonu useEffect'in üstünde de tanımlayabiliriz. Ancak bu fonksiyonu remove yapmak için de kullanacağımızdan yani unmounting de yapacağımızdan burada tanımlamak gerekiyor. Aynı referans function'ı hem mounting de hem de unmounting de kullanacağız.
        // refAboutUs referansına sahip elemanı değişkene atadık.
        const aboutUsEl = refAboutUs.current;

        // window'un y ekseninde scroll hareketini değişkene atadık (scrollY özelliği, bir belgenin pencerenin sol üst köşesinden kaydırdığı pikselleri döndürür.)
        const currentScrollPosition = window.scrollY;

        // elemanın scroll'a göre bulunduğu konumunu elemanın üstünden dikkate alarak belirledik.
        const elScrollPosition = aboutUsEl.offsetTop;

        // Açık pencerenin yüksekliğini bulduk.
        const currentWindowHeight = window.innerHeight;

        // Elemanın açık pencerede kendi yüksekliğini bulduk.
        const elCurrentHeight = aboutUsEl.offsetHeight;
        
        // İlgili elemanı scroll yaptığımızda tamamının gözükebileceği andaki değerini burada bulduk
        const targetScrollPosition =
          elScrollPosition - currentWindowHeight + elCurrentHeight / 2; // Bölü 2 diyerek yarısı gözükeceği andaki değerini buldum.
    
        console.log("Current :" + currentScrollPosition.toFixed(0) + " Target :" + targetScrollPosition)

        // Scroll yaparak ulaştığımız pixel değerinin, bizim elemanın tamamının gözükeceği andaki pixel değerinden daha büyük olduğu anda elemana .active class'ını ekledik.
        if (currentScrollPosition >= targetScrollPosition) {
            aboutUsEl.classList.add("active")
        }
    }
    document.addEventListener("scroll", handleScroll); // Burada gördüğümüz gibi doğrudan window'a ya da document yapısına ulaşmaya çaışıyoruz ve scroll eventini ekliyoruz. İlgili yere scroll olduğumuzda handleScroll fonksiyonunda belirttiğimiz işlemi gerçekleştireceğiz.
  
    return () => {
      document.removeEventListener("scroll", handleScroll);
    }
  }, [])
  

  return (
    <Container>
      {/* new Array() yöntemi ile istediğimiz sayıda elamana sahip bir dizi oluşturabiliyoruz ve onun içinde map ile dolaşıp, yazdırabiliyoruz. */}
      {[...new Array(15)].map((item, index) => (
        <p key={index}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum magni ut
          ipsam, sequi aliquid consectetur? Id excepturi quam ipsum suscipit,
          enim explicabo quos, aliquid aliquam deserunt nostrum ex, perspiciatis
          corporis. Voluptatem nisi, neque a quam tempora voluptate eveniet
          placeat minus in quisquam voluptas ipsa temporibus aspernatur quae
          cupiditate quia ratione facere inventore. Nobis natus, id dolore
          reiciendis necessitatibus qui! Neque.
        </p>
      ))}

      {/* Bu paragrafa erişmek için buna refrans değer verdik. */}
      <p className="about-us" ref={refAboutUs}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum magni ut
        ipsam, sequi aliquid consectetur? Id excepturi quam ipsum suscipit, enim
        explicabo quos, aliquid aliquam deserunt nostrum ex, perspiciatis
        corporis. Voluptatem nisi, neque a quam tempora voluptate eveniet
        placeat minus in quisquam voluptas ipsa temporibus aspernatur quae
        cupiditate quia ratione facere inventore. Nobis natus, id dolore
        reiciendis necessitatibus qui! Neque.
      </p>

      {[...new Array(15)].map((item, index) => (
        <p key={index}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum magni ut
          ipsam, sequi aliquid consectetur? Id excepturi quam ipsum suscipit,
          enim explicabo quos, aliquid aliquam deserunt nostrum ex, perspiciatis
          corporis. Voluptatem nisi, neque a quam tempora voluptate eveniet
          placeat minus in quisquam voluptas ipsa temporibus aspernatur quae
          cupiditate quia ratione facere inventore. Nobis natus, id dolore
          reiciendis necessitatibus qui! Neque.
        </p>
      ))}
    </Container>
  );
};

export default Scroll;
