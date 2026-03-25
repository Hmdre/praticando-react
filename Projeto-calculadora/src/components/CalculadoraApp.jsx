import {useState} from 'react'
import React from 'react'
import './CalculadoraApp.css'

const CalculadoraApp = () => {
    
    const botoes = ['7', '8', '9','/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '=', '+']
    const [display, setDisplay] = useState([""])

    
    const handleButtonClick = (botao) => {
        if ( botao === 'C') {
            setDisplay("")

        }else if (botao === '='){
            try {
                const resultado = eval(display)
                setDisplay(String(resultado))
                
            } catch (erro) {
                setDisplay("Erro")
            }
        } else {
            setDisplay((prevDisplay) => prevDisplay + botao)
        }
        

    }

    return (
        <div className='calculadora'>
            <div className='display'>
                {/* Tela de resultado */}
                {display}
            </div>
            <div className='teclado'>
                {botoes.map((botao, index) => (
                        <button onClick={()=>handleButtonClick(botao)} key={index} className="botao-calc">
                            {botao}
                        </button>
                    ))}
            </div>

        </div>
    )
}

export default CalculadoraApp