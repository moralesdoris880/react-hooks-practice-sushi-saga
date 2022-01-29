import React,{useState} from "react";

function Sushi({sushi,handleEaten,total}) {
  const[checkEaten,setCheckEaten]=useState(false)
  

  function handleClick(){
    if(total>=100){
      return 
    }
    else{
    handleEaten(sushi)
    setCheckEaten(!checkEaten)
    }
  }
  console.log(checkEaten)
  
  return (
    <div className="sushi">
      <div className="plate" onClick={checkEaten?null:handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {checkEaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
