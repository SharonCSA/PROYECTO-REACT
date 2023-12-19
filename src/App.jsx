import './App.css'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {

  return (

    <BrowserRouter>

    <Navbar/>

    <Routes>
      <Route path="/productos" element={<ItemListContainer/>}/>
      <Route path="/productos/:categoryId" element={ <ItemListContainer /> } />
      <Route path="/producto/:productId" element={<ItemDetailContainer />} />


      <Route path="*" element={ <Navigate to={"/"}/> }/>

    </Routes>

    </BrowserRouter>
      
  )
}

export default App
