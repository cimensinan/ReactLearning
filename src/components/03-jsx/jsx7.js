import React from 'react'

const Jsx7 = ({rate=3}) => {

    /* const arr = [];

    for(let i = 1; i <= 5; i++){
        if(i <= rate){
            arr.push("O")
        }
        else{
            arr.push("X")
        }
    } */

    // new Array() => diyerek istediğimiz eleman sayısına sahip bir yeni diziye sahip oluruz.
    // jsx new Array'ı olduğu gibi yazınca çalıştırmıyor. Çünü daha henüz oluşmamış bir diziyi ben map'leyemiyorum diyor. Bunu aşabilmek için ...new Array() şeklinde oluşturuyorum.

  return (
    <div>
        {/* {arr.join("")} */}
        {
            [...new Array(5)].map((item, index) => <span key={index}>{index < rate ? "O" : "X"}</span>)
            // ["","","","",""].map(() => <span>Hello</span>)
        }
    </div>
  )
}

export default Jsx7