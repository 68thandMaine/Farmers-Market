import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';


function Title(){
const titleStyles = {
  textAlign: 'center',
  color: 'tomato'
}

  return (
    <div>
     <AppBar position="static" color="default" style={titleStyles}>
      <h1>Avery's Organics</h1>
        <Link to="/MonthlyProduce">Months</Link>
          <Link to="/WeekDay">Day</Link>
        <Link to="/About">About Us</Link>
      </AppBar>

    </div>
  )
}

export default Title
