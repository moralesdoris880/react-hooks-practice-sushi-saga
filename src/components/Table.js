import React from "react";

function Table({ plates = [] ,total}) {
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  function handlePrice(){
    if(total>=100){
      return "NO MONEY"
    }
    else{
      return 100-total
    }
    
  }

  return (
    <>
      <h1 className="remaining">
        {`You have: ${handlePrice()} remaining!`}
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
