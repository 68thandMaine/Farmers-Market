import React from 'react'
import PropTypes from 'prop-types'

function WeekDay(props){

  return(
    <div>
    <style  global jsx>{
    `div{
    background-color: tomato;
    }`
    }</style>
    <h3>{props.day}</h3>
    <h4>{props.location}</h4>
    <h4>{props.hours}</h4>
    <h4>{props.booth}</h4>
      <hr/>
  </div>

  )
}

WeekDay.propTypes ={
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string,
  booth: PropTypes.string
}

export default WeekDay
