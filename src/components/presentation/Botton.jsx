import React from 'react'
import {NavLink} from 'react-router-dom'

function Boton(props) {
  const style={
    buttonTransparent:{
      backgroundColor: 'transparent',
      height: 45,
      borderRadius: 29,
      border: '2px solid #52acf4',
      width: 170,
      color: 'white',
      fontFamily: 'inter-bold',
      fontSize: 15  
    },

    buttonOrange:{
      backgroundColor: '#ff8300',
      height: 38,
      borderRadius: 29,
      border: '2px solid #f1ad2c',
      width: 120,
      color: 'white',
      fontFamily: 'inter-bold',
      fontSize: 13,
      boxShadow: 'rgb(0, 0, 0) 0px 2px 5px -8px'  
    }
  }

  return(
    <button style={props.color === "transparent"? style.buttonTransparent : style.buttonOrange}>
      <NavLink to={props.route} className="link">
        {props.content}
      </NavLink>
    </button>
  )
}

export default Boton;