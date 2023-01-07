import React from 'react'
import "./product-card.scss"

// ProductCard'lar ile ilgili bir standart oluşturduk. Buna ayrıca scss import ettik.

// Burası bir tane karttın formatını gösteriyor. Bu yüzden Backend'den veri istediğimizde burayı çağıramayız.

// "children" reserve bir ifade, react bunu tanıyor.

// Birden fazla props kullanmak da mümkün {props.name} ile name'i çağıran componentte ilgili değer ayrıca yer alacaktır.

const ProductCard = (props) => {
  return (
    <div className='product-card'>
      {props.name}
      {props.children}
      {/* ProductCard componentinin çağrıldığı tarafta içine yerleştirilen tasarımı {props.children} diyerek buraya getirtmiş oluyoruz. */}
    </div>
  )
}

// Bu şekilde kullanmak da mümkün
/* const ProductCard = ({children}) => {
  return (
    <div className='product-card'>
      {children}
    </div>
  )
} */

// Bu şekilde destructuring ile kullanmak da mümkün
/* const ProductCard = (props) => {
  const{name, children} = props;
  return (
    <div className='product-card'>
      {name}
      {children}
    </div>
  )
} */

// person şeklinde bir json verisi olduğunu düşünürsek de bu json dosyasını yine destructuring içine dahil edebiliriz. Ancak çağırırken json verisi bir obje tuttuğundan içinden hangi bilgiyi istiyorsak o şekilde çağırmak gerekir. Örn: person.phone gibi.
/* const ProductCard = (props) => {
  const{name, children, person} = props;
  return (
    <div className='product-card'>
      {name}
      {children}
      {person.phone}
    </div>
  )
} */

export default ProductCard