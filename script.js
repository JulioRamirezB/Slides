const fila = document.querySelector('.carrousel');
const fotos = document.querySelectorAll('.foto');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// event listener para la flecha derecha

flechaDerecha.addEventListener('click', () =>{
    fila.scrollLeft += fila.offsetWidth;
    const indicadorActivo = document.querySelector('.pie .activo')
    if(indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo')
    }
})

// event listener para la flecha Izquierda

flechaIzquierda.addEventListener('click', () =>{
    fila.scrollLeft -= fila.offsetWidth;
    const indicadorActivo = document.querySelector('.pie .activo')
    if(indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo')
    }
})


// paginacion

const numeroPaginas = fotos.length/1;
    for(let i = 0; i < numeroPaginas; i++ ){
        const indicador = document.createElement('button');

        if(i === 0){
            indicador.classList.add('activo');
        }

        document.querySelector('.pie').appendChild(indicador);
        indicador.addEventListener('click', (e)=>{
            fila.scrollLeft = i * fila.offsetWidth;

            document.querySelector('.pie .activo').classList.remove('activo');
            e.target.classList.add('activo')

        })

    }

    