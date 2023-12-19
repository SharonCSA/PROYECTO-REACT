import React from "react";

const Footer = () => {
    return (


    <footer className="bg-orange-400 text-orange-950 py-4">
        <div className="container mx-auto flex justify-between">
        <div className="nombre">
            <h5>Creado por: Sharon Solano</h5>
        </div>
        <div className="correo">
            <h6>solanotj8@gmail.com</h6>
            <a
            href="https://wa.me/qr/GFBE6PRBZZP5D1"
            target="_blank"
            rel="noopener noreferrer"
            >
            <b>Whatsapp:</b> +54 9 11 3872-4075
            </a>
        </div>
        <div className="derechos">
            <h6>© 2023 HATHOR - Joyas y accesorios. Todos los derechos reservados.</h6>
        </div>
        <div className="volver">
            <a className="volver" href="#up">
            Volver arriba
            </a>
        </div>
        </div>
    </footer>
    );
};

export default Footer;
