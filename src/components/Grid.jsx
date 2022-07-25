
import { useEffect, useState } from "react";
import { giphyResponse } from "../fetch";
import fetchApi from "./Hooks/fetchApi";
import "../category.css";

const Grid =({category})=>{

 const {image,load} = fetchApi(category)

  if(load){

    return <>
  
  <div>
      <h3>{category}</h3>

      <div className="category">

         {
              image.map(index =>{
                return <>
                
                  <div className="item">
                      <img src = {index} />
                  </div>
                </>
              })
           }

         </div>
      </div>
  </>
  }

  else{
    <h2>Cargando</h2>
  }

}

export default Grid;