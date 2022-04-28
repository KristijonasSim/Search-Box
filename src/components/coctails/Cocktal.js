import React from 'react'

const Cocktail = ({image, name, id, info, galss}) => {
  return (
    <div className='cocktail-section'>
      <img src={image} alt="info" className='images'/>
      <div className='info'>
        {name}
        {galss}
        {info}
      </div>
    </div>
  )
}

export default Cocktail