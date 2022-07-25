
import { useState } from "react";
import "../category.css";


const AddCategory =({onNewCategory})=>{
    
    const [valueInput, useValueInput] = useState(['Busca Algo']);

    const inputChangue =(e)=>{
        useValueInput(e.target.value);
    }

    const cancelForm=(e)=>{

        e.preventDefault();       
        onNewCategory(valueInput);
    
    }

    return (<>
    
    <h3>Busca algo para ver gifs o imagenes animadas</h3>

   <form  onSubmit={cancelForm}>

   <input type="text" value={valueInput} onChange = {inputChangue}/>
  
   </form>


    
    </>);
}


export default AddCategory;