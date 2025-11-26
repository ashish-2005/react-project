import { useEffect, useState } from "react";
import "./App.css";

function Dashboard() {
  const[data , setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const serverResponse = await fetch("https://fakestoreapi.com/products");
      const jsonResponce = await serverResponse.json();
      console.log(jsonResponce);
      setData(jsonResponce);
    }
    fetchData();
  }, []);

  return (
    <>

    {
      data.length===0?(<h2>Data could not fetch</h2>):(
        <div>
          {

             data.map((ele)=>(
            <div style={{ height:'300px',width:'300px'}}>
              <img src={ele.image} height={100} width={100}  />
              <h3>{ele.title}</h3>
              <button>Add to Cart</button>
            </div>
          ))

          }
          
        </div>
      )
    }
    {/* {
       JSON.stringify(data)
    } */}
       
    </>
  );
}

export default Dashboard;
