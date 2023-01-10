import React from 'react'
import "./gallery.scss"
import images from "./images.json"

// json'dan ya da backend'den dosya yolu gelmemeli sadece dosya ismi gelmesi gerekir. Çünkü içindeki dosyayı benim nereye yerleştireceğimi her zaman bilmeleri mümkün değildir.

const Gallery = () => {
  return (
    <div className='gallery'>
        {
            images.map((img, i) => 
            <div key={i}>
              {/* require ile birlikte src'nin içinde resimleri nereye koyduksak oranın dosya yolunu yazmak gerekiyor. */}
                <a href={require(`../../assets/img/${img.name}`)}target="_blank"><img src={require(`../../assets/img/${img.name}`)} alt="" /></a>
                {/* Backtick'li kullanımlarda string bir ifadeye bir yerden bir veri çağırıyorsak ${} kullanmak gerekiyor */}
            </div>
            )
        }
    </div>
  )
}

export default Gallery