import React, { useState, useEffect } from 'react';
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"
import img6 from "../assets/img6.jpg"
import img7 from "../assets/img7.jpg"
import img8 from "../assets/img8.jpg"
import img9 from "../assets/img9.jpg"
import img10 from "../assets/img10.jpg"
import img11 from "../assets/img11.jpg"
import img12 from "../assets/img12.jpg"
import img13 from "../assets/img13.jpg"
import img14 from "../assets/img14.jpg"
import img15 from "../assets/img15.jpg"
import img16 from "../assets/img16.jpg"
import img17 from "../assets/img17.jpg"
import img18 from "../assets/img18.jpg"
import img19 from "../assets/img19.jpg"


function TextoEImagenCambiante() {
    const textos = ["Gracias por este año y medio juntos","Gracias por este año y medio juntos", "Que sepas que te echo de menos a diario aunque no lo creas 😒", "Te veo en una semanita 🙄", "Te amo 🖤"];
    const imagenes = [img1,img1,img1 ,img1,img1,img1,img2, img3, img4, img5, img6, img7, img8, img9,img10, img11, img12, img13, img14, img15, img16, img17,img18, img19]



    const [indice, setIndice] = useState(0);
    const [mostrarTexto, setMostrarTexto] = useState(true);
    const [mostrarImagenes, setMostrarImagenes] = useState(false);
    const [texto, setTexto] = useState("");

    const intervaloTextos = 3000; // Cambiar cada 2 segundos (2000 milisegundos)
    const intervaloImagenes = 1000; // Cambiar cada 5 segundos (5000 milisegundos)

    useEffect(() => {
        const interval = setInterval(() => {
            if (mostrarTexto) {
                const siguienteIndice = (indice + 1) % textos.length;
                setTexto(textos[siguienteIndice]);
                setIndice(siguienteIndice);

                if (siguienteIndice === textos.length - 1) {
                    setMostrarTexto(false);
                    setMostrarImagenes(true);
                    clearInterval(interval);
                }
            }
        }, intervaloTextos);

        return () => clearInterval(interval);
    }, [indice, mostrarTexto, textos]);

    useEffect(() => {
        if (mostrarImagenes) {
            const interval = setInterval(() => {
                const siguienteIndice = (indice + 1) % imagenes.length;
                setIndice(siguienteIndice);

                if (siguienteIndice === imagenes.length - 1) {
                    setMostrarImagenes(false);
                }
            }, intervaloImagenes);

            return () => clearInterval(interval);
        }
    }, [indice, imagenes, mostrarImagenes]);

    return (
        <div className='container'>
            <h1>{texto}</h1>
            {mostrarImagenes && <img src={imagenes[indice]} alt={`img ${indice + 1}`} />}
        </div>
    );
}

export default TextoEImagenCambiante;