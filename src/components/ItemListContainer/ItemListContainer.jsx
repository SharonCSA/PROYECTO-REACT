import React, { useEffect, useState } from "react";
import { pedirDatos } from "../../utils/utils";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
    setLoading(true);

    pedirDatos()
        .then((data) => {
        const items = categoryId
            ? data.filter((prod) => prod.category === categoryId)
            : data;

        setProductos(items);
        })
        .finally(() => setLoading(false));
    }, [categoryId]);

    return (
    <>
        <section className="py-10">
        <h4 className="text-3xl font-semibold mb-8">Hathor tu joyeria por excelencia</h4>

        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {productos.map((product) => (
                <div key={product.id} className="mb-8">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <img
                    className="w-full h-48 object-cover object-center"
                    src={`/${product.image}`}
                    alt={product.name}
                    />

                    <div className="p-4">
                    <h2 className="text-lg font-semibold mb-2">{product.name}</h2>

                    <div className="flex justify-between items-center">
                        <p className="text-gray-700">${product.price}</p>

                        <div className="space-x-2">
                        <button
                            type="button"
                            className="btn btn-red-400"
                            onClick={() => {
                            // "Ver Detalles"
                            console.log("Ver Detalles", product.id);
                            }}
                        >
                            Ver Detalles
                        </button>

                        <button
                            type="button"
                            className="btn btn-blue-300"
                            onClick={() => {
                            // utilidad para hacer clic en "Añadir al Carrito"en el futuro
                            console.log("Añadir al Carrito", product.id);
                            }}
                        >
                            Añadir al Carrito
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    </>
    );
}; 

export default ItemListContainer;
