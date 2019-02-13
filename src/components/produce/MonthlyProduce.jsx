import React from 'react'
import PropTypes from 'prop-types'
const monthlyProduceStyles = {
  border: '2px solid #4d6ba0',
  marginLeft: '15px',
  marginBottom: '10px',
  backgroundColor: '#a6aebc'
}

function MonthlyProduce(props){
  return(
    <div style={monthlyProduceStyles}>
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
