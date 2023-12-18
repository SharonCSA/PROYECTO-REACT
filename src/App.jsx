import './App.css'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const greetingMessage = "¡Hola! Echa un vistazo a nuestras joyas exclusivas.";

  return (

    <BrowserRouter>

    <Navbar/>

    <Routes>
      <Route path="/" element={<ItemListContainer greeting={greetingMessage} />}/>
      <Route path="/productos/:categoryId" element={ <ItemListContainer /> } />


      <Route path="*" element={ <Navigate to={"/"}/> }/>

    </Routes>

    </BrowserRouter>
      
  )
}

export default App
