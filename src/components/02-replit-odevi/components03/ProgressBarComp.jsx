import React, { useState } from "react";
import { Button, ButtonGroup, ProgressBar } from "react-bootstrap";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import "./progressBarComp.scss"

const ProgressBarComp = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="progressBarComp">
      <ButtonGroup aria-label="Basic example">
        <Button variant="primary"
        onClick={() => setCounter((prev) => prev + 10)}
        disabled={counter > 90 ? true : false}>
          <AiOutlinePlusCircle />
        </Button>
        <Button
          variant="danger"
          onClick={() => setCounter((prev) => prev - 10)}
          disabled={!counter}>
          <AiOutlineMinusCircle />
        </Button>
      </ButtonGroup>
      <ProgressBar animated stripped variant="warning" now={counter} label={`${counter}%`} />
    </div>
  );
};

export default ProgressBarComp;
