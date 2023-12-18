import hathor from '../../assets/img/logo.png'
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className='bg-orange-200'>
            <div className='container m-auto py-2 flex justify-between items-center'>
                <Link to={"/"}><img className="w-28" src={hathor} alt="Logo"/></Link>
                <nav className='flex gap-20'>
                <Link className='className="text-white hover:bg-orange-700 hover:text-white text-lg hover:rounded uppercase font-semibold"' to={"/productos/catalogo"}>Cátalogo</Link>
                <Link className='className="text-white hover:bg-orange-700 hover:text-white text-lg hover:rounded uppercase font-semibold"' to={"/productos/ofertas"}>Ofertas</Link>
                <Link className='className="text-white hover:bg-orange-700 hover:text-white hover:rounded text-lg uppercase font-semibold"' to={""}>Contacto</Link>
                </nav>
                { <CartWidget /> }
            </div>
        </header>
    )
} 
export default Navbar

