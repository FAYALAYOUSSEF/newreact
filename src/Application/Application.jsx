import React ,{useState} from 'react'
import "./Application.css"
function Application() {

const[red,setRed]=useState(0);
const[green,setGreen]=useState(0);
const[blue,setBlue]=useState(0);
const[alpha,setAplha]=useState(0);

 const handelred=(e)=>{
    setRed(e.target.value)
 }
 const handelgreen=(e)=>{
    setGreen(e.target.value)
 }
 const handelblue=(e)=>{
    setBlue(e.target.value)
 }
 const handelalpha=(e)=>{
    setAplha(e.target.value)
 }




  return (
    <div>
        
<div className='renf' style={{backgroundColor:`rgba(${red},${green},${blue},${alpha})`,width:"150px",height:"150px"}}>hi i am very happy</div>

<input className='red' type ='range' value={red} onChange={handelred} min="0" max="255" step="10"/>
<br></br>
<input className='green'type ='range' value={green} onChange={handelgreen} min="0" max="255" step="10"/>
<br></br>
<input className='blue'type ='range' value={blue} onChange={handelblue} min="0" max="255" step="10"/>
<br></br>
<input className='alpha' type ='range' value={alpha} onChange={handelalpha} min="0" max="1" step="0.1"/>


    </div>
  )
}



























export default Application