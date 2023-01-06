import React from 'react'
import ProductCard from './product-card'

const Products = () => {
  return (
    <div>

        <ProductCard>
            <h2>Sony Display</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores optio eum laboriosam voluptas et id eaque eos maxime, ipsam quisquam totam quibusdam qui minus? Velit tenetur reiciendis dolor sit officia?
            </p>
        </ProductCard>

        <ProductCard>
            <h2>Intel Processor</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores optio eum laboriosam voluptas et id eaque eos maxime, ipsam quisquam totam quibusdam qui minus? Velit tenetur reiciendis dolor sit officia?
            </p>
        </ProductCard>

    </div>
  )
}

export default Products