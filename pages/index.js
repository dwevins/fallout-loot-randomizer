import React from 'react'
import {Helmet as BaseHelmet} from '../Armor/BaseTypes'
import {Helmet as RaiderHelmet} from '../Armor/Sets/Raider'

const Home = () => {
  console.log({BaseHelmet, RaiderHelmet});
  return (
    <div>
      <h1>open devtools</h1>
    </div>
  )
}

export default Home
