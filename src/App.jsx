import './App.css'
import ItemListContainer from './componentes/ItemListContainer'
import NavBar from './componentes/navBar'


function App() {
  return (
    <div>      
      <NavBar /> 
      <ItemListContainer greetings= "Hola" />
    </div>
      )
}

export default App
