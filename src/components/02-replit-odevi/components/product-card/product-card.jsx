import React from 'react'
import { Card } from 'react-bootstrap'
import "./product-card.scss"
import {AiFillStar, AiOutlineStar} from "react-icons/ai"

const ProductCard = (props) => {
    const {title, image, price, discount, rate} = props

    const newTitle = title.toUpperCase()

    let rates = [];

    let outlineStar = <AiOutlineStar/>
    let fillStar = <AiFillStar/>

    // const getRatings = () => {
    //     for(let i = 1; i <= 5; i++){
    //         if(i <= rate) rates.push(fillStar)
    //         else rates.push(outlineStar)
    //     }
    // }
    // getRatings()

  return (
    <Card className="h-100 product-card">
      <Card.Img variant="top" src={`assets/products/${image}`} />
      {discount == 0 ? "" : <Card.Text className='px-2 discount'>-{discount}%</Card.Text>}
      <Card.Body className="text-center cBody">
        <Card.Text className='fs-4 rate'>
            {/* {rates.map((item, i) => <span key={i}>{item}</span>)} */}
            <p>
            {
                [...new Array(5)].map( (item, index)=> index < rate ? <AiFillStar/> : <AiOutlineStar/>)
            }
            </p>
        </Card.Text>
        <Card.Title className="fs-4 title">
            {newTitle}
        </Card.Title>
        {discount == 0 ? (
        <Card.Subtitle className="fs-5 price">
            <strong>
                ${price}0
            </strong>
        </Card.Subtitle>
        ) : (
        <Card.Subtitle className="fs-5 price">
            <strong>
                <span style={{color:"lightgray"}}>${price}0 </span>
                <span> ${price - (price * discount / 100)}0</span>
            </strong>
        </Card.Subtitle>
        )}
      </Card.Body>
    </Card>
  )
}

export default ProductCard