import React from 'react'
import {useContext} from 'react'
import StoreContext from '../../store'
import Content from './Content'
import Topbar from './Topbar'

const Exchange = () => {
    // store değişkenine, useContext hook'u ile StoreContext'i tanımladık. Böylede App.js'de yer vermiş olduğumuz value değerini getirmiş olduk. StoreContext ile tüm app.js'i sarmalladığımız için StoreContext'in tuttuğu value değerlerine her yerden ulaşmış oluyoruz. Prop ile data transferine gerek kalmıyor.
    const store = useContext(StoreContext)

  return (
    <div>
        {/* {değişkenimizin adı ve içindeki objeyi bu şekilde componentimizin içine yazdırabiliriz.} */}
        {/* Exchange {store.counter} */}
        <Topbar/>
        <Content/>
    </div>
  )
}

export default Exchange