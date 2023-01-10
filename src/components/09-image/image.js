import React from 'react'
import northernLights from "../../assets/img/image1.jpg"

const Image = () => {
  return (
    <div>
        {/* HTML ce CSS'i hazır gelen projelerde img dosya yolu ile uğraşmamak için img'ler publicte oluşturulan aseets dosyasının içine atılır ve statik yöntemle oradan çekilir. */}
        {/* Statik yöntemde görüntüler public klasörü içinde aranır, src'de aranmaz. */}
        <img src="assets/img/car.jpg" alt="" width="300"/>

        {/* External URL veya CDN yöntemi*/}
        {/* Doğrudan resmin kopyalanan adresi src kısmına yapıştırılır. */}
        <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" width="300"/>

        {/* Import ve require yönteminde dosyalar src içinde olmalıdır. */}
        {/* src klasöründeki görüntülerin eklenmesi için kullanılırlar. Eğer görüntünün adı dinamik olarak bir dış kaynaktan alınıyorsa bu durumda require kullanmak gerekir. */}
        <img src={northernLights} alt="" width="300"/>

        <img src={require("../../assets/img/image2.jpg")} alt="" width="300"/>
    </div>
  )
} 

export default Image