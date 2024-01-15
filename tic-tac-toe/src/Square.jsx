import React,{useState,useEffect} from 'react'


import './button.css'

function Square(props) {
    const [value,Setvalue]=useState(null)
   
      
  
      
   const handleValue = () => {
    if(!value && props.player=="X"){
      Setvalue(props.player)
      props.handlePlayer(props.singlesquare, "O");
    }else if(!value && props.player=="O"){
      Setvalue(props.player)
      props.handlePlayer(props.singlesquare, "X");
    }
  };
  

    
  

  return (
    <div className='Square'>
       <button disabled={props.win}  className='square' onClick={handleValue}>{value}</button>
    </div>
   
  )
}

export default Square
