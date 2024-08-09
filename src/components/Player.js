import { useState, useRef } from "react";
const Player = () => {
    const playerName = useRef();  

    const [enteredPlayerName, setEnteredPlayerName] = useState(null)
    // const [submitted, setSubmitted] = useState(false)

    // function handleChange(newName) {
    //     setSubmitted(false) // to avoid updating while typing
    //     setEnteredPlayerName(newName)
    // }
    function handleClick() {
       setEnteredPlayerName(playerName.current.value)
       playerName.current.value = '';
    }
  return (
    <>
      <section id="player">
      <h2>Welcome {enteredPlayerName ? enteredPlayerName : 'unknown entity'}</h2>
      <p>
        <input 
        type="text" 
        
        ref={playerName}  //this helps connect the ref to this input field thereby rendering onChange and value useless
        // onChange={(event)=>handleChange(event.target.value)} 
        // value={enteredPlayerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
    </>
  )
}

export default Player
