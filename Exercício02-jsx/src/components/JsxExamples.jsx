import React from 'react'

const JsxExamples = () => {

  const userName = "Carlos";

  const user = {
    name: "Ana",
    lastName: "Souza"
  };

  const userIsLoggedIn = true;
  const userRole = "admin";
  const users = [
    {id: 1, name:"João"},
    {id: 2, name:"Pedro"},
    {id: 3, name:"Maria"},
  ]


  function getGreeting(name) {
    return `Olá ${name}`;
  }

  return (
    <div>
      {/* Básico */}
      <h2>Conteúdo que o usuário vai ver</h2>
      <p>O nome do usuário é: {userName}</p>

      
      Usuário: {user.name} {user.lastName}

      <p>{2 + 2}</p>

      <p>{getGreeting(userName)}</p>
      <p>{getGreeting("Matheus")}</p>

      {/* Diferenças do HTML */}
      <div className="alguma-coisa">Este cara</div>

      <div className='teste'>ok</div>

      <button onClick={()=>alert("Teste")}>clique em mim</button>

      <input type="text" />

      {/* Renderização concidional */}
      {userIsLoggedIn ? (
        <div>
          <p>Caso: está logado</p>
        </div>
      ) : (
        <p>Caso: não está logado</p>
      )}
      
      <p>{userRole === "admin" && "Você um admin"}</p>

      {/* Renderização de listas */}
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.id} - {user.name}
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default JsxExamples;