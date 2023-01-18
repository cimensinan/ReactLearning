import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/00-home/header/header";
import Menu from "./components/00-home/menu/menu";
import HelloWorld from "./components/01-hello-world/hello-world";
import HelloReact from "./components/02-hello-react/hello-react";
import ProductList from "./components/02-replit-odevi/components02/product-list/product-list";
import ProgressBarComp from "./components/02-replit-odevi/components03/ProgressBarComp";
import ToDoApp from "./components/02-replit-odevi/components04/ToDoApp";
import Jsx1 from "./components/03-jsx/jsx1";
import Jsx2 from "./components/03-jsx/jsx2";
import Jsx3 from "./components/03-jsx/jsx3";
import Jsx4 from "./components/03-jsx/jsx4";
import Jsx5 from "./components/03-jsx/jsx5";
import Jsx6 from "./components/03-jsx/jsx6";
import Jsx7 from "./components/03-jsx/jsx7";
import Style1 from "./components/04-styles/style1";
import Style2 from "./components/04-styles/style2";
import Style3 from "./components/04-styles/style3";
import Style4 from "./components/04-styles/style4";
import Clock1 from "./components/05-clock1/Clock1";
import Greetings from "./components/06-props-1/greetings";
import Products from "./components/07-props-2/products";
import Clock2 from "./components/08-clock2/Clock2";
import Gallery from "./components/09-image/Gallery";
import Image from "./components/09-image/image";
import ProfileCard from "./components/10-profile-card/ProfileCard";
import BootstrapDynamic from "./components/11-bootstrap/bootstrap-dynamic";
import BootstrapStatic from "./components/11-bootstrap/bootstrap-static";
import Icon from "./components/12-icons/icon";
import Events from "./components/13-events/events";
import Shop from "./components/14-products/shop";
import State from "./components/15-useState/State";
import Stateless from "./components/15-useState/Stateless";
import Counter from "./components/16-counter/Counter";
import Birthday from "./components/17-birthday/birthday";
import UseEffect from "./components/18-useEffect/UseEffect";
import UseEffect2 from "./components/18-useEffect/UseEffect2";
import Clock3 from "./components/19-clock3/Clock3";
import CountryFilter from "./components/20-country-filter/CountryFilter";
import Scroll from "./components1/21-useRef/Scroll";
import UseRef from "./components1/21-useRef/UseRef";
import ClassComp from "./components1/22-class-type-component/class-comp";
import UserCards from "./components1/23-fetch-users/UserCards";
import Countries from "./components1/24-axios-countries/Countries";
import ParentComp from "./components1/25-child-to-parent/ParentComp";
import Form1 from "./components1/26-forms/Form1";
import Form2 from "./components1/26-forms/Form2";
import Form3 from "./components1/26-forms/Form3";
import Form4 from "./components1/26-forms/Form4";
import Form5 from "./components1/26-forms/Form5";
import Form6 from "./components1/26-forms/Form6";



const App = () => {
  return(
    <BrowserRouter>
    <Header/>
    <Container fluid>
      <Row>
        <Col sm={2}>
          <Menu/>
        </Col>
        <Col sm={10}>
          <Routes>
            <Route path="/hello-world" element={<HelloWorld/>}/>
            <Route path="/hello-react" element={<HelloReact/>}/>
            <Route path="/jsx1" element={<Jsx1/>}/>
            <Route path="/jsx2" element={<Jsx2/>}/>
            <Route path="/jsx3" element={<Jsx3/>}/>
            <Route path="/jsx4" element={<Jsx4/>}/>
            <Route path="/jsx5" element={<Jsx5/>}/>
            <Route path="/jsx6" element={<Jsx6/>}/>
            <Route path="/jsx7" element={<Jsx7/>}/>
            <Route path="/style1" element={<Style1/>}/>
            <Route path="/style2" element={<Style2/>}/>
            <Route path="/style3" element={<Style3/>}/>
            <Route path="/style4" element={<Style4/>}/>
            <Route path="/Clock1" element={<Clock1/>}/>
            <Route path="/greetings" element={<Greetings/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/Clock2" element={<Clock2 textColor="red" bgColor="yellow"/>}/>
            <Route path="/image" element={<Image/>}/>
            <Route path="/Gallery" element={<Gallery/>}/>
            <Route path="/ProfileCard" element={<ProfileCard avatar="profile.jpg" name="Ayşe Gel" location="Turkey, İstanbul" shot="1" followers="2" following="10"/>}/>
            <Route path="/BootstrapStatic" element={<BootstrapStatic/>}/>
            <Route path="/BootstrapDynamic" element={<BootstrapDynamic/>}/>
            <Route path="/Icon" element={<Icon/>}/>
            <Route path="/Events" element={<Events/>}/>
            <Route path="/Shop" element={<Shop/>}/>
            <Route path="/State" element={<State/>}/>
            <Route path="/Stateless" element={<Stateless/>}/>
            <Route path="/Counter" element={<Counter/>}/>
            <Route path="/Birthday" element={<Birthday/>}/>
            <Route path="/UseEffect" element={<UseEffect/>}/>
            <Route path="/UseEffect2" element={<UseEffect2/>}/>
            <Route path="/Clock3" element={<Clock3/>}/>
            <Route path="/CountryFilter" element={<CountryFilter/>}/>
            <Route path="/UseRef" element={<UseRef/>}/>
            <Route path="/Scroll" element={<Scroll/>}/>
            <Route path="/ClassComp" element={<ClassComp/>}/>
            <Route path="/UserCards" element={<UserCards/>}/>
            <Route path="/Countries" element={<Countries/>}/>
            <Route path="/ParentComp" element={<ParentComp/>}/>
            <Route path="/Form1" element={<Form1/>}/>
            <Route path="/Form2" element={<Form2/>}/>
            <Route path="/Form3" element={<Form3/>}/>
            <Route path="/Form4" element={<Form4/>}/>
            <Route path="/Form5" element={<Form5/>}/>
            <Route path="/Form6" element={<Form6/>}/>
          
          </Routes>
        </Col>
      </Row>
    </Container>
    
{/*   <HelloWorld/>
      <Jsx1/>
      <Jsx2/> 
      <Jsx3/> 
      <Jsx4/> 
      <Jsx5/> 
      <Jsx6/> 
      <Style1/> 
      <Style2/> 
      <Style3/> 
      <Style4/> 
      <Clock1/> 
      <Greetings/> 
      <Products/> 
      <Clock2 textColor="red" bgColor="yellow"/>
      <Clock2 textColor="blue" bgColor="white"/> 
      <Image/> 
      <Gallery/> 
      <ProfileCard avatar="profile.jpg" name="Ayşe Gel" location="Turkey, İstanbul" shot="1" followers="2" following="10"/> 
      <BootstrapStatic/> 
      <BootstrapDynamic/> 
      <Icon/> 
      <Events/> 
      <Shop/> 
      <ProductList/> 
      <Jsx7/> 
      <Stateless/> 
      <State/> 
      <Counter/> 
      <Birthday/> 
      {false && <UseEffect/>} // Anlık olarak hafızadan atmak için ve unmounting durumunu görebilmek için yapıldı.
      <UseEffect/> 
      <Clock3/> 
      <UseEffect2/> 
      <CountryFilter/> 
      <ProgressBarComp/> 
      <UseRef/> 
      <Scroll/> 
      <ClassComp/> 
      <UserCards/> 
      <Countries/> 
      <ParentComp/> 
      <Form1/> 
      <Form2/> 
      <Form3/> 
      <Form4/> 
      <Form5/> 
      <Form6/> 
      <ToDoApp/> */}
      </BrowserRouter>
      
  )
}

export default App;