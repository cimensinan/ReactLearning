import React from "react";
import "./welcome.scss";

/*
// 1.yontem --- Klasik 
// jsx yazarken sürekli props ifadesine yer vermek pek tercih edilmediğinden bu yöntem pek kullanılmaz.
const Welcome = (props) => {
  // Geeting componentinde kullandığımız prop'lar buradaki props ifadesinin içine obje olarak geliyor. Yani key value şeklinde gelir.
  return (
    <div className="welcome">
      <h2>
        Welcome {props.firstName} {props.lastName}
      </h2>
    </div>
  );
};
*/


/*
// 2.yontem --- Destructuring
// Destructuring yapılacak dizinin ELEMAN SAYISI ÇOK ise bu yöntem kullanılabilir.
const Welcome = (props) => {

    const { firstName, lastName } = props;

    // const firstName = props.firstName;
    // const lastName = props.lastName;

    return (
      <div className="welcome">
        <h2>
          Welcome {firstName} {lastName}
        </h2>
      </div>
    );
  };
*/


// 3.yontem --- Parametrelerin doğrudan destruct eilmiş elemanlardan oluşması
// Destructuring yapılacak dizinin ELEMAN SAYISI AZ ise bu yöntem kullanılabilir.
// Parametre kısmında parantezlerin içinde süslü parantez kullanarak da destructuring yapılabilir.
const Welcome = ({ firstName, lastName }) => { 
  return (
    <div className="welcome">
      <h2>
        Welcome {firstName} {lastName}
      </h2>
    </div>
  );
};

export default Welcome;