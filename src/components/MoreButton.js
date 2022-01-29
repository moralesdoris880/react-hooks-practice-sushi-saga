import React from "react";

function MoreButton({setNext,setPrevious,next}) {
  function handleMore(){
    setPrevious(next)
    setNext(next+4)
  }
  return <button onClick={handleMore}>More sushi!</button>;
}

export default MoreButton;
