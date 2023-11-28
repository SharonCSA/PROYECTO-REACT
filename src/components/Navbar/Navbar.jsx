import hathor from '../../assets/img/logo.png'
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <header className='bg-orange-200'>
            <div className='container m-auto py-2 flex justify-between items-center'>
                <a href="index.html"><img className="w-28" src={hathor} alt="Logo"/></a>
                <nav className='flex gap-36'>
                    <a className='className="text-white hover:bg-orange-700 hover:text-white text-lg hover:rounded uppercase font-semibold"' href="">Cátalogo</a>
                    <a className='className="text-white hover:bg-orange-700 hover:text-white text-lg hover:rounded uppercase font-semibold"' href="">Carrito</a>
                    <a className='className="text-white hover:bg-orange-700 hover:text-white hover:rounded text-lg uppercase font-semibold"' href="">Ofertas</a>
                </nav>
                { <CartWidget /> }
            </div>
        </header>
    )
} 
 export default Navbar

