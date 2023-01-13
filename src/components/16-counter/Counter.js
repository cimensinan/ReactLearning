import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";


/* // Eksi tuşuna bastığımızda eksi tarafa da gitmeye devam edecek.
const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="info" onClick={() => setCounter((prev) => prev + 1)}>
        <AiOutlinePlusCircle />
      </Button>
      <Button variant="light" disabled>
        {counter}
      </Button>
      <Button variant="warning" onClick={() => setCounter((prev) => prev - 1)}>
        <AiOutlineMinusCircle />
      </Button>
      <Button variant="danger" onClick={() => setCounter(0)}>
        <GrPowerReset />
      </Button>
    </ButtonGroup>
  );
};
export default Counter;
*/

// Eksi tuşuna bastığımızda eksi tarafa da gitmeye devam etmyecek. return kısmı kalabalıklaşmasın diye buna ilişkin aşağıdaki gibi bir fonksiyon yazılabilir
const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = (val) => {
    if(val < 0) val = 0;
    setCounter(val);
  }

  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="info" onClick={() => handleClick(counter + 1)}> 
      {/* Burada handleClick'in içinden gelen değer yukarıdaki fonksiyona parametre olarak gidiyor ve şartı sağlıyorsa setCounter'da tutuluyor. */}
        <AiOutlinePlusCircle />
      </Button>
      <Button variant="light" disabled>
        {counter}
      </Button>
      <Button variant="warning" onClick={() => handleClick(counter - 1)} disabled={!counter}>
        <AiOutlineMinusCircle />
      </Button>
      {/* <Button variant="danger" onClick={() => handleClick(0)} disabled={counter === 0 ? true : false}> */}
      <Button variant="danger" onClick={() => handleClick(0)} disabled={!counter}>
        <GrPowerReset />
      </Button>
    </ButtonGroup>
  );
};

export default Counter;
