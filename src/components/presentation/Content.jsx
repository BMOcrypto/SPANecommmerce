import React from "react"
import Button from './Botton'

var Content = (props)=>{

  const style = {
    box: {
      height: '80%'
    },
    slogan: {
      fontFamily: 'Effra',
      fontSize: 45,
      color: '#52acf4'
    },
    text: {
      fontFamily: 'Effra',
      fontSize: 30,
      color: '#52ACF4'
    }

  } 

  return(
    <div className="content col-md-6 offset-md-1 d-flex flex-column justify-content-center align-items-start" style={style.box}>
      <h1 style={style.slogan}>REMEMBER THAT TIME WHEN SCIENCE WASNT COOL?</h1>
      <p className="pt-2 pb-3" style={style.text}>THAT TIME WAS NEVER</p>
      <Button color="transparent" content="Products" route="/store"/>
    </div>
  )
}

export default Content