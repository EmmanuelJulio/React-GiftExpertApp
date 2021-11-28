import React, { useState } from "react";
import PropType from 'prop-types'

export  const AddCategory =({setCategories})=> {
  const [inputValue, setinputValue] = useState('');
  const handleInputChange = (e) => {
    setinputValue(e.target.value);
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
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
    </form>
  );
}

AddCategory.PropType={
    setCategories: PropType.func.isRequired
}