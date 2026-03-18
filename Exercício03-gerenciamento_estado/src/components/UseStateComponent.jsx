import {useState} from 'react'

//useState = hook

const UseStateComponent = () => {
  //crio uma variável de consulta, e uma de alteração, e inicio o hook
  const [count, setCount] = useState(0)



  const increment =() => {
    setCount(count + 1)
    console.log(count)
  }

  const[user, setUser] = useState({
    name: "Ana",
    age: 25,
    hobbies: ["Leitura", "Programação"]
  })

  const updateUserAge = () => {
    setUser((prevUser)  => ({
        ...prevUser,
        age: prevUser.age + 1,
    }))
  }

  return (
    <div>
      <h2>Contador</h2>  
      <p>Você clicou {count} vezes</p>
      <button onClick={increment}>Incrementar</button>

      <p>Nome: {user.name} e idade: {user.age}</p>

      <button onClick={updateUserAge}>Incrementar Idade</button>
    </div>
  )
}

export default UseStateComponent;