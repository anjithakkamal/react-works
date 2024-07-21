import React,{useEffect, useState} from 'react'

function Category({setCategory}) {

    const[categories,setCategories]=useState([])


    function getCategories(){

    fetch("https://fakestoreapi.com/products/categories").then(res=>res.json()).then(data=>setCategories(data))
        
    }

   useEffect(()=>{getCategories()},[]) 

  //  function handleClick(event){
  //    let cat=event.target.value;
  //    console.log(cat);
  //  }

  return (
    <div className='d-flex justify-content-evenly my-3'>
      {categories &&categories.map((cat,i)=>
      <div><button value={cat} onClick={(e)=>setCategory(e.target.value)} className='btn btn-outline-info'>{cat}</button></div>)}
    </div>
  )
}

export default Category
