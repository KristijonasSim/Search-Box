import React from 'react'
import CocktailList from '../coctails/CocktailList'
import SearchContainer from '../SearchContainer/SearchContainer'
const Home = () => {
  return (
    <div>
      <SearchContainer />
      <CocktailList/>
      </div>
  )
}

export default Home