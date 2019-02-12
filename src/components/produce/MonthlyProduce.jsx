import React from 'react'
import PropTypes from 'prop-types'


function MonthlyProduce(props){
  return(
    <div>
      <h1>{props.month}</h1>
        <ul>
          <li>{props.selection.join(", ")}</li>
        </ul>
    </div>
  )
}

MonthlyProduce.propTypes={
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
}

export default MonthlyProduce;
