import { useEffect, useState } from "react";
import "./App.css";

function Dashboard() {
  const[data , setData] = useState([]);
  const[cart , setCart] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const serverResponse = await fetch("https://fakestoreapi.com/products");
      const jsonResponce = await serverResponse.json();
      console.log(jsonResponce);
      setData(jsonResponce);
    }
    fetchData();
  }, []);

  function shoppingCart(ele){
     setCart(data=>[...data,ele])
     alert("Item added successfully");
     

    // alert(ele.title);
  }
  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);


  return (
    <>

    <div>
      {
        <h2>Total Amount: {totalAmount.toFixed(2)}</h2>
      }
      {
           
        cart.length==0?(<h4>Cart is empty</h4>):
        (
          cart.map((ele)=>(
            <h3 style={{backgroundColor:'cayn'}}>{ele.title}</h3>
          ))
        )
      }
    </div>

    {
      data.length===0?(<h2>Data could not fetch</h2>):(
        <div>
          {

             data.map((ele)=>(
            <div style={{ height:'500px',width:'300px'}}>
              <img src={ele.image} height={100} width={100}  />
              <h3>{ele.title}</h3>
              <h1>{ele.price}</h1>
              <p>{ele.description}</p>
              <button onClick ={()=>shoppingCart(ele)}>Add to Cart</button>
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
