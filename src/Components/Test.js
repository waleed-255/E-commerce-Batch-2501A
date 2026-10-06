import React, { useEffect, useState } from "react";

function Test() {
  var [abc, Setabc] = useState("Loading....");

useEffect(() => {
 console.log("Component Mounted")
},[abc])


  setTimeout(() =>{
   Setabc("Update Kardiya....")
  },5000)

  // function counter() {
  //   Setabc(abc + 1);
  // }

  return (
    <div>
      {/* <p>{abc}</p> */}
      {/* <button onClick={counter}>count</button> */}

      <p>{abc}</p>
    </div>
  );
}
export default Test;
        
     