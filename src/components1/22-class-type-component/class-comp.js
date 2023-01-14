import { Component } from "react";


// export default'unu alt tarafa da koyabiliriz.
// sona eklediğimiz Component ifadesi react'tan gelen bir ifade ve biz tüm component'lerin atası olarak düşündüğümüz react.component'ten kendi componentimiz olan ClassComp'a bunu extend ediyoruz yani miras alıyoruz. Yukarıda import etmek istemiyorsak "React.Component" şeklinde de kullanabiliyoruz.
export default class ClassComp extends Component{

    // constructor(){} ile biz componentimizin yapıcı elemanlarını oluşturuyoruz. Örneğin prop'ları burada alıyoruz. state'leri burada belirliyoruz.
    constructor(props){ // props'ları burada karşılıyoruz.

        // props'lar extend edilen class'ın constructor'una gönderilmelidir.
        super(props) // super => react.component'e deniliyor ve props kullanımı için buraya yazılması zorunlu. Çünkü kendi componentimize props verdiğimiz zaman atamız olan componentte de haber veriyoruz.

        // state oluştururken de useState gibi bir ifade yerine this.state={} diyoruz. değişiklik yapacağımızda this.setState({}) diyerek değiştiriyoruz.
        this.state = { // Bu componentin state'ni oluşturuyoruz ve bunları return kısmına buradan gönderiyoruz.
            message: "Hello World", 
            hour: 15,
            minute: 35
        }
    }

    // render ve re-render işlemleri ise aşağıdaki şekilde yapılıyor. class-type-component yapısında normalde daha fazla life cycle methods bulunuyor. Ancak kullanılmadığı için olsa gerek function-type'da sadece bu aşağıdaki 3'üne benzer yapıları oluşturmuşlar.
    // mounting mantığı;
    componentDidMount(){
        console.log("İlk girişte çalışır. (Render)")
    }

    // updating mantığı için parametre kısmının birinci bölgesinde prop'ları, ikinci bölgesinde state'leri tutuyoruz. İsimleri prevProps yada prevState olmak zorunda değil. Ayrıca bu iki parametreden birini kullanmayacağımız zaman "_" ifadesini de yerine koyabiliyoruz. Değişiklik olduğunda re-render yap demiş oluyoruz. Dependency bölümü burada bulunmuyor.
    componentDidUpdate(prevProps, prevState){
        console.log("re-render durumunda çalışır")

        // prevState ifadesi bize bu state'in değişmeden önceki halini veriyor.
        if(prevState.hour !== this.state.hour){
            console.log("Saat değişti")
        }
        if(prevState.minute !== this.state.minute){
            console.log("Dakika değişti")
        }
    }

    // unmounting mantığı;
    componentWillUnmount(){
        console.log("Component un mount olduğunda çalışır.")
    }

    // Bu render(){return( )} kısmı function type'daki return() ile aynı niteliğe sahiptir.
    render(){
        return(
        <div>
            <h1>{this.state.message}</h1>
            <h2>{this.state.hour}:{this.state.minute}</h2>

            {/* state'leri değiştirirken this.setState({}) şeklinde kullanarak değiştiryoruz. */}
            <button onClick={() => this.setState({hour:19})}>Set Hour</button>
            <button onClick={() => this.setState({minute:55})}>Set Minute</button>
        </div>
        )
    }
}

// export default ClassComp

// function-type-component ile genel farklılıkları yukarıdaki gibidir.