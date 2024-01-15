import React,{useState,useEffect} from 'react'

import Square from '../Square'
import "./board.css"


function Board() {
    const [player, setPlayer] = useState("X");
    const [check, setCheck] = useState(Array(9).fill(null));
    // const [alertwinner,setAlert]=useState(false)
    const [win,setWinner]=useState(null)
    useEffect(()=>{
    
   const selectWinner= checkWinner(check)
    console.log(selectWinner)
   if(selectWinner){
       setWinner(selectWinner)
      alert(selectWinner)
   }
    

    },[check])

    const handlePlayer = (index, currentPlayer) => {
      
      setCheck((prevCheck) => {
        const newCheck = [...prevCheck];
        newCheck[index] = player;
        return newCheck;
      });
      setPlayer(currentPlayer);
    };

    const checkWinner=(check)=>{
      const winner=[[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]]
      console.log(check,"HI")
      for(let i=0;i<winner.length;i++){
       const[a,b,c]=winner[i]
        if(check[a]===check[b]&&check[a]===check[c]){
            return check[a]
        }
      }
      return null
      
    }


  return (
   <div  className='board'>
    {win && <p>Winner {win}</p>}
    <div className='subBoard'>
    <Square win={win} singlesquare={0} player={player} handlePlayer={handlePlayer} />
    <Square win={win} singlesquare={1} player={player} handlePlayer={handlePlayer}  />
    <Square win={win} singlesquare={2} player={player} handlePlayer={handlePlayer}  />

   </div>
   <div className='subBoard'>
    <Square win={win} singlesquare={3} player={player} handlePlayer={handlePlayer}   />
    <Square win={win} singlesquare={4} player={player} handlePlayer={handlePlayer}  />
    <Square win={win} singlesquare={5} player={player} handlePlayer={handlePlayer}  />

   </div>
   <div className='subBoard'>
    <Square win={win} singlesquare={6} player={player} handlePlayer={handlePlayer}  />
    <Square win={win} singlesquare={7} player={player} handlePlayer={handlePlayer}  />
    <Square win={win} singlesquare={8} player={player} handlePlayer={handlePlayer} />

   </div>
   </div>
  )
}

export default Board
