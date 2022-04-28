import React from 'react'
import { useGlobalContext } from '../../context'
import Loading from '../Loading/Loading'
import Cocktail from './Cocktal'
const CocktailList = () => {
  const {cocktails, loading} = useGlobalContext()
  console.log(cocktails)
  if(loading){
    return <Loading/>
  }
  if(cocktails.list <1 ){
    return (
      <h2>
        No cocktails matched your search
      </h2>
    )
  }
  return (
    <div className='main'>
      <h2>cocktails</h2>
      <div className='main-cocktails'>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item}/>
        })}
      </div>
    </div>
  )
}

export default CocktailList