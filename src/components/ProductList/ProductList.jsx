import alhaja from '../../assets/img/cat1.jpg'
import cadena from '../../assets/img/cat2.jpg'
import anillo from '../../assets/img/cat3.jpg'


const ProductList = ({ greeting }) => {
    return (
        <>
        <section>
            <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
            <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
                <div className="p-6">
                    <img className="object-cover object-center w-full mb-8 lg:h-48 rounded-xl" src={alhaja} alt="Hermosa alhaja de diamantes para dama, eleaborada en Oro 18k. Peso: 4grs."/>
                    <div className="inline-flex justify-between w-full">
                        <h1 className="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">Alhaja de diamantes.</h1>
                        <span>"$200"</span>
                    </div>
                    <p className="mx-auto text-base font-medium leading-relaxed text-gray-500">Hermosa alhaja de diamantes para dama, eleaborada en Oro 18k. Peso: 4grs.</p>
                </div> 
                <div className="p-6">
                    <img className="object-cover object-center w-full mb-8 lg:h-48 rounded-xl" src={cadena} alt="Delicada cadena para dama elaborada Oro 18k, con dije. Largo: 40cm Peso: 7grs."/>
                    <div className="inline-flex justify-between w-full">
                        <h1 className="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">Cadena con dije.</h1>
                        <span>"$175"</span>
                    </div>
                    <p className="mx-auto text-base font-medium leading-relaxed text-gray-500">Delicada cadena para dama elaborada Oro 18k, con dije. Largo: 40cm Peso: 7grs.</p>
                </div>
                <div className="p-6">
                    <img className="object-cover object-center w-full mb-8 lg:h-48 rounded-xl" src={anillo} alt="Hermoso anillo para compromiso elaborado en Oro blanco con piedras de zircon. Peso: 4grs."/>
                    <div className="inline-flex justify-between w-full">
                        <h1 className="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">Anillo de Oro blanco.</h1>
                        <span>"$110"</span>
                    </div>
                    <p className="mx-auto text-base font-medium leading-relaxed text-gray-500">Hermoso anillo para compromiso elaborado en Oro blanco con piedras de zircon. Peso: 4grs.</p>
                </div>
            </div>
            </div>
            <h1 className='text-end font-semibold py-2'>{greeting}</h1>
        </section>
        
        </>
    )
} 
export default ProductList

