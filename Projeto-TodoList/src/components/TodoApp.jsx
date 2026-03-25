import {useState} from 'react'
import "./TodoApp.css"

const TodoApp = () => {
    const [tarefa, setTarefa] = useState("")
    const [listaDeTarefas, setListaDeTarefas] = useState([])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (tarefa != "") {
        setListaDeTarefas((prevTarefas) => [...prevTarefas, tarefa])

        setTarefa("")
    }}

    const handleDelete = (indexDaTarefa) => {
        setListaDeTarefas((prevTarefas) => 
            prevTarefas.filter((tarefa, index) => index !== indexDaTarefa)
        )
    }


    return (

    <div>
        <h1 className='title'>To Do List</h1>
        <form onSubmit={handleSubmit} className='submitform'>
            <input 
                type="text" 
                value={tarefa}
                onChange={(e) => setTarefa(e.target.value)}
                className='textbox'
            />
            <input type="submit" className='textbutton' />
        </form>

        {listaDeTarefas.length === 0 ? (
            <p>Não há tarefas na lista.</p>
        ) : (
            <ul>
            {listaDeTarefas.map((item, index) => (
                <li className='tarefa' key={index}>{item}<button onClick={() => handleDelete(index)} className='tarefabutton'>Excluir</button></li>
            ))}
            </ul>
        )}
        
    </div>
    )
}

export default TodoApp