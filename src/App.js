import React, { useState, useEffect } from "react";

function App() {

  const[count, setCount] = useState(0);
  const[text, setText] = useState("");


  const handleCount =()=>{
    setCount((count)=>count+1);
  }

  const handleText =(e)=>{
    setText(e.target.value)
  }

  useEffect(() => {
    setTimeout(()=>{
      setCount(0)
    },5000)
  },[]);

  console.log("Component rendering");

  return (
    <div>
      <button
       onClick={handleCount}
      >
        I've been clicked {count} times
      </button>
      <input
        type='text'
        placeholder="Type away..."
        value={text}
        onChange={handleText}
      />
    </div>
  ) 
}

export default App;