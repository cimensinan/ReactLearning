import React, { useContext } from 'react'
import StoreContext from '../../store'
import "./topbar.scss"

const Topbar = () => {

    // Merkezi state olan StoreContext'in içindeki value değerlerine ulaşmak için burada bir değişkene atıyoruz ve aşağıda da desturucting ile kullanacağımız state'i çağırıyoruz.
    const store = useContext(StoreContext)
    const { currencies } = store

    // return kısmını sadeleştirmek için fonksiyon oluşturup değerimizi burada çağırıyoruz ve aşağıya da yazacağız. 
    const formatCurrency = (val) => { 
        // currencies state'nin içinde yer alan obje değerlerinin key ifadesini return kısmında parametre olarak almak için burada [val] ifadesini kulanıyoruz.
        return (1 / currencies[val]).toFixed(2)
    }

    // Aşağıdaki bu iki şekilde de değerimize ulaşabiliriz.
   /*  alert(currencies["CAD"])
    alert(currencies.CAD) */

  return (
    <header className='exchange'>
        <nav>
            <h3>Exchange</h3>
            <div>
                <span>$: {formatCurrency("USD")}₺</span>
                <span>€: {formatCurrency("EUR")}₺</span>
            </div>
        </nav>
    </header>
  )
}

export default Topbar