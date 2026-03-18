import {useState} from 'react'

const EventHandlingExamples = () => {
  
  const handleClick = () => {
    alert("Testando")
  }
  
const handleGreet = (name) => {
  alert(`Olá ${name}`)
}

  return (
    <div>
      <button onClick={() => alert("oi")}>Clique Aqui 1</button>
      <button onClick={handleClick}>Clique Aqui 2</button>
      <br />
      <button onClick={() => handleGreet("Anna")}>Dizer Olá Ana</button>
      <button onClick={() => handleGreet("Pedro")}>Dizer Olá Pedro</button>
      <br />
       
    </div>
  )
}

export default EventHandlingExamples