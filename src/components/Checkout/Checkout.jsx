import React from "react";
import { useCart } from "../../context/CartContext";
import CheckoutForm from "./CheckoutForm";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { state } = useCart();
  const navigate = useNavigate();

  const totalAmount = state.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleModifyCart = () => {
    navigate("/");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Estás a punto de finalizar tu compra...</h2>

      <div className="flex justify-center mt-8">
        {/* Sección Izquierda - Formulario de Datos */}
        <div className="w-1/2 pr-4">
          <h2 className="text-2xl font-bold mb-4 text-center">Datos del Cliente</h2>
          {/* Integración del formulario de checkout */}
          <CheckoutForm />
        </div>

        {/* Sección Derecha - Resumen de la Compra */}
        <div className="w-1/2 pl-4">
          <h2 className="text-2xl font-bold mb-4 text-center">Resumen de la Compra</h2>
          {state.cartItems.length === 0 ? (
            <p>Tu bolsa de compras está vacía.</p>
          ) : (
            <div>
              <ul className="grid grid-cols-1 gap-4 w-full text-center">
                {state.cartItems.map((item) => (
                  <li key={item.id} className="border-b py-4 w-full flex items-center">
                    <img src={`/${item.image}`} alt={item.name} className="w-16 h-16 mr-4 object-cover" />

                    <div>
                      <span>{item.name}</span>
                      <div className="flex items-center">
                        <span className="mr-2">{item.price}</span>
                        <span className="mr-2">Cantidad: {item.quantity}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-4">
                <p className="font-bold">Monto a pagar: ${totalAmount.toFixed(2)}</p>
              </div>

              {/* Botones de Modificar y Finalizar Compra */}
              <div className="flex justify-between mt-4 py-4 px-4">
                <button
                  onClick={handleModifyCart}
                  className="bg-orange-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-orange-500"
                >
                  Modificar mi compra ❕
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-orange-400 py-2 px-4 font-bold text-white shadow-md hover:bg-orange-600"
                >
                  Finalizar mi compra ✅
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;



