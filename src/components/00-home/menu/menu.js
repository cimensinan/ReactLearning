import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import menu from "./menu.json";
import "./menu.scss";

const Menu = () => {

  const [target, setTarget] = useState(null);

  const handleCollapse = (e) => { 
    e.target.classList.toggle("collapsed");
   }

  // Burada ise içindekiler bölümü benzeri nav tagının içine ul-li'ler ile bir navigasyon kısmı oluşturuyoruz.
  return (
    <nav className='main-nav'>
        <ul>
          {/* Burada ise aşağıda yorum satırına aldığımız değerleri menu.json adında bir dizi oluşturup oradan çektik. Eğer json dosyasında ilgili component başlıkları içinde birden fazla component varsa(children) collapsable class'ı ile alt başlık şeklinde gözükmesini sağladık. */}
          {/* Children'ı olmayanlara link tagı olan to ifadesini eklemedik. */}
          {/* Yukarıda onClick olduğunda ne yapılacağına ilişkin de bir handleCollapse fonksiyonu tanımlayarak toggle ise collapse class'ı ekledik. */}
          {
            menu.map(mainItem => (
            <li key = {mainItem.title} className ={mainItem.children && "collapsable"}>
              {mainItem.children ? <div onClick = {handleCollapse}>{mainItem.title}</div> : <div><Link to = {mainItem.to}>{mainItem.title}</Link></div>}

              {mainItem.children && <ul>{mainItem.children.map(subItem => (<li key ={subItem.title}><Link to = {subItem.to}>{subItem.title}</Link></li>))}</ul>}
            </li>))
          }
            {/* li tag'larının içine Link adında bir component koyuyoruz. Sonrasında to dediğimiz yer ile app'deki path dediğimiz yer aynı olacak şekilde componentimizin dosya adını belirtiyoruz. Link componentinin arasına da sayfamızın adının nasıl gözükmesini istiyorsak onu yazıyoruz. */}
            {/* a tagları yerine Link taglarını kullanıyoruz. a tagları sayfayı baştan yüklerken bunlar sadece ilgili yeri ekrana getirir. */}
            {/* <li><Link to="/hello-world">Hello World</Link></li>
            <li><Link to="/hello-react">Hello React</Link></li>
            <li><Link to="/jsx1">JSX1</Link></li>
            <li><Link to="/jsx2">JSX2</Link></li>
            <li><Link to="/jsx3">JSX3</Link></li>
            <li><Link to="/jsx4">JSX4</Link></li>
            <li><Link to="/jsx5">JSX5</Link></li>
            <li><Link to="/jsx6">JSX6</Link></li>
            <li><Link to="/jsx7">JSX7</Link></li>
            <li><Link to="/style1">Style1</Link></li>
            <li><Link to="/style2">Style2</Link></li>
            <li><Link to="/style3">Style3</Link></li>
            <li><Link to="/style4">Style4</Link></li>
            <li><Link to="/style4">Style4</Link></li>
            <li><Link to="/Clock1">Clock1</Link></li>
            <li><Link to="/greetings">Props Greetings</Link></li>
            <li><Link to="/products">Props Products</Link></li>
            <li><Link to="/Clock2">Clock2</Link></li>
            <li><Link to="/image">Image</Link></li>
            <li><Link to="/Gallery">Gallery</Link></li>
            <li><Link to="/ProfileCard">Profile Card</Link></li>
            <li><Link to="/bootstrap-static">Bootstrap Static</Link></li>
            <li><Link to="/bootstrap-dynamic">Bootstrap Dynamic</Link></li>
            <li><Link to="/icon">Icons</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/State">State</Link></li>
            <li><Link to="/Stateless">Stateless</Link></li>
            <li><Link to="/Counter">Counter</Link></li>
            <li><Link to="/birthday">Birthday</Link></li>
            <li><Link to="/UseEffect">UseEffect</Link></li>
            <li><Link to="/UseEffect2">UseEffect2</Link></li>
            <li><Link to="/Clock3">Clock3</Link></li>
            <li><Link to="/CountryFilter">CountryFilter</Link></li>
            <li><Link to="/UseRef">UseRef</Link></li>
            <li><Link to="/Scroll">Scroll</Link></li>
            <li><Link to="/class-comp">Class Type Component</Link></li>
            <li><Link to="/UserCards">UserCards</Link></li>
            <li><Link to="/Countries">Axios Countries</Link></li>
            <li><Link to="/ParentComp">Child to Parent</Link></li>
            <li><Link to="/Form1">Form1</Link></li>
            <li><Link to="/Form2">Form2</Link></li>
            <li><Link to="/Form3">Form3</Link></li>
            <li><Link to="/Form4">Form4</Link></li>
            <li><Link to="/Form5">Form5</Link></li>
            <li><Link to="/Form6">Form6</Link></li> */}
            
        </ul>
    </nav>
  )
}

export default Menu