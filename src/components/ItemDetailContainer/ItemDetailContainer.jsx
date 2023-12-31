import React, { useEffect, useState } from "react";
import { pedirDatos } from "../../utils/utils";
import { useParams, Link } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            try {
                const data = await pedirDatos();
                const selectedProduct = data.find((prod) => prod.id === parseInt(productId));

                if (selectedProduct) {
                    setProduct(selectedProduct);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [productId]);

    return (
        <>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <section className="py-10">
                    <h5>Acerca de...</h5>
                    <div className="container mx-auto flex items-center">
                        {/* Imagen */}
                        <div className="w-1/2 pr-8">
                            <img
                                className="w-full h-96 object-cover object-center rounded-3xl"
                                src={`/${product.image}`}
                                alt={product.name}
                            />
                        </div>

                        {/* Contenedor del texto */}
                        <div className="w-1/2">
                            <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
                            <p className="text-gray-700 mb-4">${product.price}</p>
                            <div className="flex items-center space-x-4 mb-4">
                                <Link to="/productos">
                                    <button className="p-2 bg-red-500 text-white font-semibold rounded-md">
                                        Volver
                                    </button>
                                </Link>

                                <div className="flex items-center space-x-2">
                                    <button className="p-2 bg-gray-300 text-red-600 rounded-md">
                                        -
                                    </button>

                                    {/* Bolsita de compras */}
                                    <button className="p-2 bg-gray-300 text-red-600 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                                        </svg>
                                    </button>

                                    <button className="p-2 bg-gray-300 text-red-600 rounded-md">
                                        +
                                    </button>
                                </div>
                            </div>
                            {/* Otros detalles del producto */}
                            <p>{product.description}</p>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default ItemDetailContainer;
