import React, { useState } from "react"
import Users from "./users"



function App(){
  const [input1, setInput1] = useState()
  const [input2, setInput2] = useState()
  const [res, chngRes] = useState(0)


  return(
    <div>
      <input type="number" onInput={(e)=> (setInput1(+e.target.value))} value={input1}  />
      <span>+</span>
      <input type="number" onInput={(e) => (setInput2(+e.target.value))} value={input2} />
      <button onClick={() => chngRes( input1+input2)}>calc</button>
      <p>Res: {res}</p>

    </div>
  )
}
// function App() {
//   const [a, setA] = useState(0)
//   const [b, setB] = useState(0)

//   const value = (e)=>{
//      return e.target.value
//   }

//   // const B = (e) => {
//   //   return e.target.value
//   // }

//   const plus = () => {
//     value()
//   }

//   return (
//     <div className="container">
      
//       <input onInput={value} type="number" />
//       <button onClick={plus}>+</button>
//       <p>{plus}</p>
//       <input onInput={value} type="number" />
//     </div>
//   )
// }

// export default App


// function App(){

  // const [calculation, setCalculation] = useState({
  //   num1: '',
  //   num2: "",
  //   result: 0
  // });

  // const handleChange = (e) => {
  //   setCalculation({
  //     ...calculation,
  //     [e.target.name]: +e.target.value
  //   })
  // }

  // return(

    // <Users/>
    // <div className="container">

    //   <input
    //    type="number"
    //    onInput={handleChange}
    //    name="num1"
    //    placeholder="Num"/>

    //    <span>+</span>

    //   <input
    //     type="number"
    //     onInput={handleChange}
    //     name="num2"
    //     placeholder="Num" />


    //   <button className="btn" onClick={()=> setCalculation({...calculation, result: calculation.num1 + calculation.num2})}>
    //     Calculate

    //   </button>
    //     <p>Result: {calculation.result}</p>
    // </div>
//   )

// }

export default App
