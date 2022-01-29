import React,{useState,useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const[sushiList,setSushiList]= useState([])
  const[sushiEaten,setSushiEaten]= useState(0)
  const[total,setTotal]=useState(0)


  useEffect(()=>
  fetch(API)
  .then(response => response.json())
  .then(data => setSushiList(data)),[])

  function handleEaten(sushi){
    setSushiEaten(sushiEaten+1)
    setTotal(total+sushi.price)
  }
  
  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} handleEaten={handleEaten} total={total} />
      <Table total={total} />
    </div>
  );
}

export default App;
