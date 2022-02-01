import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import { useFetchGifs } from "../hooks/useFetchGif";
 import { GifGridItem } from "./GifGridItem";
import PropTypes from 'prop-types';
export const GrifGrid = ({ category }) => {
  
    const {data:images,loading}= useFetchGifs( category );

  return (
    <Fragment>
    <h3 className="animate__animated  animate__fadeIn">{category}</h3>
   {loading&&<p className="animate__animated  animate__flash">Loading</p>}
    <div className="card-grid">
      
      
        {
          images.map(img=>(
            <GifGridItem
            key={img.id}
            {...img}
            />
          ))
        }
       
    </div>
    </Fragment>
  );
};
GrifGrid.propTypes={
  category:PropTypes.string.isRequired
}