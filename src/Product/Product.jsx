import React, { useState,useEffect } from "react"
import axios from "axios"
function Product() {
    const [products,setProducts]=useState([]) ;
   
    useEffect(()=>{
       const apiURL="https://dummyjson.com/products"
       axios.get(apiURL)
       .then((response)=>{
         
          console.log("response",response.data.products);
          
          setProducts(response.data.products);
       }).catch((err)=>{
         console.log(err)
       })
    })


  return (
    <div>
         <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
           {
           products.map(product=>(
      
             <div key={product.id} class="carousel-item active">
      <img style ={{height:'300px',width:'200px'}} src={product.images[0]} class="d-block w-100" />
    </div>))}
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


                </div>
         
          
        
   
  )
}

export default Product