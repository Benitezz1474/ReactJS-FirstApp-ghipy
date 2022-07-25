import { useState } from "react";
import AddCategory from "./components/addCategories";
import Grid from "./components/Grid";

const AppResult =()=>{

    const [category,setCategory] = useState([]);

    const addCategory =( NewCategory )=>{

      let filterCateogty = NewCategory.toLowerCase();

      if(category.includes(filterCateogty)) return;
      
      else  setCategory([...category,filterCateogty]);

    }

  return (<>
  
   <h1>Aplicacion de Gifs</h1>
  
  <AddCategory onNewCategory = { addCategory } />

    
  {
    category.map(cat => {
           return <Grid category={cat} key={cat}/>
    })
  } 
    
  </>)
}


export default AppResult;