import { use, useEffect, useState } from "react";

function Apitask() {

  var [data, Setmydata] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data=> Setmydata(data))
  }, [])


  return (
    <>
      <h1 className="text-center my-4">Api Fetching Here</h1>
      {data.map((a)=>{
        return <p>{a.title}</p>
      })}
    </>
  )
}
export default Apitask;