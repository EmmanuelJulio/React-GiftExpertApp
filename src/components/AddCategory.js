import React, { useState } from "react";
import PropType from 'prop-types'

export  const AddCategory =({setCategories})=> {
  const [inputValue, setinputValue] = useState('');
  const handleInputChange = (e) => {
    setinputValue(e.target.value);
    console.log("handle input change llamado")
  };
  const handleSubmint = (e) => {
      e.preventDefault()
            if(inputValue.trim().length>2){
                setCategories(cats=>[inputValue,...cats])
                setinputValue('')

            }
        
  };
  return (
    <form onSubmit={handleSubmint}>
      <p>{inputValue}</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
    </form>
  );
}

AddCategory.propTypes={
    setCategories: PropType.func.isRequired
}