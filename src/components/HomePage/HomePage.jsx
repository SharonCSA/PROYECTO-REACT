import home from '../../assets/img/carrusel1.gif'

const HomePage = () => {
    return (
<div className='flex justify-center items-center h-3/4 mt-8'>
      <img
        src={home}
        alt='Bienvenida'
        className='max-w-full max-h-full mb-8 md:mb-0'
      />
    </div>

    )
} 
export default HomePage