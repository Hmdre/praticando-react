import {useState} from 'react'

const EventHandlingExample = () => {
  
  const handleClick = () => {
    alert("Testando")
  }
  
  const handleGreet = (name) => {
    alert(`Olá ${name}`)
  }

  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Enviado! ${name}`)
  }



  return (
    <div>
      <button onClick={() => alert("oi")}>Clique Aqui 1</button>
      <button onClick={handleClick}>Clique Aqui 2</button>
      <br />
      <button onClick={() => handleGreet("Anna")}>Dizer Olá Ana</button>
      <button onClick={() => handleGreet("Pedro")}>Dizer Olá Pedro</button>
      <br />
       
      {/* eventos de formulário */}
      <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            value={name} 
            onChange={(e)=> setName(e.target.value)} 
            placeholder="Digite seu nome" 
        />
        <input type="submit" value="Enviar"/>
      </form>
    </div>
  )
}

export default EventHandlingExample