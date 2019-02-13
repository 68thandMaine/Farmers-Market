import React from 'react'
import Title from './Title'
import About from './About'
import MarketSchedule from './schedule/MarketSchedule'
import AvailableProduce from './produce/AvailableProduce'
import { Switch, Route } from 'react-router-dom';
import MonthlyProduce from './produce/MonthlyProduce'
import WeekDay from './schedule/Weekday'
const routeStyles={

}
function App(){
  return (
    <div>
      <Title/>
      <Switch style= {routeStyles}>
          <Route exact path='/About' component={About}/>
          <Route exact path='/MonthlyProduce' component={AvailableProduce} />
          <Route exact path='/WeekDay' component={MarketSchedule} />
        </Switch>
    </div>
  )

}
export default App
