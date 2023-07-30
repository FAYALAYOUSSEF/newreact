import React from 'react'

function Home() {
    const Handelclick=(e)=>
    {console.log("bonjour") }
    const Handelbsrclick=()=>
    {console.log("bonsoir") }
const handelChange=(e)=>{
  //setName(e,target.value)
  console.log("imput changed value")
}

  return (
    <div>
        <button onClick={Handelclick}>bonjour</button>
        <button onClick={Handelbsrclick}>bonsoir</button>

        <form>
         <label>Name</label>
         <input type="text"onChange={handelChange} />
        </form>
    </div>
  )
}
















export default Home