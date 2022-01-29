import React,{useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushiList,handleEaten,total}) {
  const[previous,setPrevious]=useState(0)
  const[next,setNext]=useState(4)
  
  
  return (
    <div className="belt">
      {
        sushiList.slice(previous,next).map(sushi=> <Sushi total={total} handleEaten={handleEaten} sushi={sushi} key={sushi.id}/>)
        
      } 
      <MoreButton next={next} setNext={setNext} setPrevious={setPrevious}/>
    </div>
  );
}

export default SushiContainer;
