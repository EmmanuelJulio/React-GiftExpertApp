import { type } from 'os'
import { listenerCount } from 'process'
import React,{ useState } from 'react'
import {AddCategory} from './components/AddCategory'
import { GrifGrid } from './components/GrifGrid'
//snipet para la creacion rapida de componente "rafc"
export const GifExpertApp = ( { defautlCategories= [] } ) => {
    // const categories=
    
    const [categories, setCategories] = useState( defautlCategories )
   
    // const handleAdd=()=>{
    //     // setCategories([...categories,'Hunter Hunter'])
    //     setCategories((cats=>[...categories,'Hunter hunter']))
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
          
            <ol>
                {categories.map(category=> ( 
                <GrifGrid 
                key={category}
                category={category}></GrifGrid>
                ))
                }
                
            </ol>
        </>
    )
}
