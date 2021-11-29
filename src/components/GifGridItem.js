import React from 'react'

export const GifGridItem = ( {id,title,url} ) => {
  
    
    return (
        <div className="card animate__animated  animate__backInLeft">
         <img src={url} alt={title}/>
         <p>{title}</p>
        </div>
    )
}
/*
1. Enzyme
2. Enzyme to json
3. Debe de mostrar el componente correctamente
 *shallow
 *wrapper 
 *wrapper .toMatchSnaphop().


*/