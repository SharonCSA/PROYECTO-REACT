import './App.css'
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList'

function App() {
  const greetingMessage = "¡Hola! Echa un vistazo a nuestras joyas exclusivas.";

  return (
    <>
      <Navbar/>
      <ProductList greeting={greetingMessage} />
    </>
  )
}

export default App
