//Componente pai
import './App.css'
//importar componente filho
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
import PropsExample from './PropsExample'

function App() {
  return (
    <>
      <h1>Hello World!</h1>

      <FunctionalComponent/>
      <ClassComponent/>
      <PropsExample nome="André" idade={28}/>
    </>
  )
}

export default App
