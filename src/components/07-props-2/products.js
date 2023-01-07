import React from 'react'
import ProductCard from './product-card'

const Products = () => {

     // const productList = [] // Backendden dizi halinde objelerimizin geldiğini varsayalım. Ve return kısmında bunu map ile çağırıp <ProductCard></ProductCard> componentinin arasına yerleştirtelim. Böylece sürekli ProductCard componentini çaımış olmayacağız.

  return (
    <div>

        {/* {productList.map((product) => {
            <ProductCard>
            <h2>Sony Display</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores optio eum laboriosam voluptas et id eaque eos maxime, ipsam quisquam totam quibusdam qui minus? Velit tenetur reiciendis dolor sit officia?
            </p>
        </ProductCard>
        })} */}


        {/* <ProductCard name="" price=""/> => Bu şekilde de propları göndermek mümkün*/} 
        {/* Ya da componentin burada sarmallağı içeriği de bu componente prop olarak gönderebiliriz. */}
        {/* ProductCard'a içerik eklerken ProductCard componentinin adını bir elementmiş gibi açıyoruz ve kapatıyoruz. */}
        {/* Proplara children ekliyoruz. */}
        <ProductCard>
            <h2>Sony Display</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores optio eum laboriosam voluptas et id eaque eos maxime, ipsam quisquam totam quibusdam qui minus? Velit tenetur reiciendis dolor sit officia?
            </p>
        </ProductCard>

        <ProductCard name="Ali">
            <h2>Intel Processor</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores optio eum laboriosam voluptas et id eaque eos maxime, ipsam quisquam totam quibusdam qui minus? Velit tenetur reiciendis dolor sit officia?
            </p>
        </ProductCard>

    </div>
  )
}

export default Products