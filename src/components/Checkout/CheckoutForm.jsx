import React from "react";

const CheckoutForm = () => {
  return (
    <div className="m-auto p-4 rounded shadow-sm bg-white max-w-lg">
      <form>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label>
              Nombre
              <span className="block text-xs font-light text-gray-400">
                Ingrese su nombre
              </span>
            </label>
            <input
              type="text"
              placeholder="Su nombre"
              className="mt-2 px-4 py-2 shadow rounded"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label>
              Apellido/s
              <span className="block text-xs font-light text-gray-400">
                Ingrese su apellido/s
              </span>
            </label>
            <input
              type="text"
              placeholder="Su apellido/s"
              className="mt-2 px-4 py-2 shadow rounded"
              required
            />
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <label>
            Email
            <span className="block text-xs font-light text-gray-400">
              Ingrese su dirección de correo electrónico
            </span>
          </label>
          <input
            type="email"
            placeholder="Su dirección de correo electrónico"
            className="mt-2 px-4 py-2 shadow rounded"
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <label>
            Teléfono
            <span className="block text-xs font-light text-gray-400">
              Ingrese su número de teléfono
            </span>
          </label>
          <input
            type="text"
            placeholder="Su número de teléfono"
            className="mt-2 px-4 py-2 shadow rounded"
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <label>
            Dirección
            <span className="block text-xs font-light text-gray-400">
              Ingrese su dirección
            </span>
          </label>
          <input
            type="text"
            placeholder="Su dirección"
            className="mt-2 px-4 py-2 shadow rounded"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
