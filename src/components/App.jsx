import React from 'react'
import Title from './Title'
import About from './About'
import MarketSchedule from './schedule/MarketSchedule'
import AvailableProduce from './produce/AvailableProduce'

function App(){
  return (
    <div>
      <Title/>
    <About/>
      <MarketSchedule/>
      <AvailableProduce/>
    </div>
  )

}
export default App
