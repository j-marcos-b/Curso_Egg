const tarjeta1 = {
    titulo: 'Viajar por el mundo',
    imagen: 'img/little-monkey-traveling-the-world-simple-drawing-simple-strokes.jpeg',
    texto: 'Me encanta visitar nuevos lugares. Acá estoy en Cancún con mi esposa Mamona y mi hijo Chupito'
}

const tarjeta2 = {
    titulo: 'Robar cosas a los turistas',
    imagen: 'img/little-monkey-drinking-water-from-a-bottle-simple-drawing-simple-strokes.jpeg',
    texto: 'Me divierto sacandole las cosas a los turistas cuando se distraen. Acá estoy tomando agua mineral. ¡Mmmmm que rica!'
}

const tarjeta3 = {
    titulo: 'Ser muy travieso',
    imagen: 'img/little-monkey-on-a-motorcycle-simple-drawing-simple-strokes.jpeg',
    texto: 'Como en la selva no hay mucho para hacer, me pongo a andar en moto. ¡Qué jodón que soy!'
}

const seccion3 = document.querySelector('.seccion-3');

const contenido = 
`<article>
<h4>${tarjeta1.titulo}</h4>
<img class="mono-hobbies" src="${tarjeta1.imagen}" alt="familia de monos">
<p>${tarjeta1.texto}</p>
</article>
<article>
<h4>${tarjeta2.titulo}</h4>
<img class="mono-hobbies" src="${tarjeta2.imagen}" alt="mono tomando agua de una botella">
<p>${tarjeta2.texto}</p>
</article>
<article>
<h4>${tarjeta3.titulo}</h4>
<img class="mono-hobbies" src="${tarjeta3.imagen}" alt="mono con pelota en la cabeza">
<p>${tarjeta3.texto}</p>
</article>`

seccion3.innerHTML = contenido;



