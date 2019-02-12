import React from 'react'
import AppBar from '@material-ui/core/AppBar';

function Title(){
const titleStyles = {
  textAlign: 'center'
}

  return (
     <AppBar position="static" color="default" style={titleStyles}>
      <h1>Avery's Organics</h1>
      </AppBar>
  )
}

export default Title
