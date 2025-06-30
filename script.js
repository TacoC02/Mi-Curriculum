document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-proyecto');
    const modalImg = document.getElementById('modal-img');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalAbrir = document.getElementById('modal-abrir');
    let linkActual = '';

    document.querySelectorAll('.proyectos-carrusel a').forEach(proyecto => {
        proyecto.addEventListener('click', e => {
            e.preventDefault();
            const img = proyecto.querySelector('img');
            const titulo = proyecto.querySelector('strong').innerText;
            const desc = proyecto.getAttribute('data-desc') || '';
            linkActual = proyecto.href;
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            modalTitulo.innerHTML = `<div>${titulo}</div><small>${desc}</small>`;
            modal.classList.add('activo');
        });
    });

    modalImg.onclick = () => {
        if (linkActual) {
            window.open(linkActual, '_blank');
            modal.classList.remove('activo');
        }
    };

    modalAbrir.onclick = () => {
        if (linkActual) {
            window.open(linkActual, '_blank');
            modal.classList.remove('activo');
        }
    };

    modal.onclick = e => {
        if (e.target === modal) modal.classList.remove('activo');
    };


    const carrusel = document.getElementById('proyectos-carrusel');
    const proyectos = carrusel.querySelectorAll('a');
    const btnIzq = document.getElementById('btn-izq');
    const btnDer = document.getElementById('btn-der');
    const total = proyectos.length;
    let pos = 0;
    let autoScroll;
    let mouseOver = false;
    let direccion = 1; 

    function mostrar(pos) {
        carrusel.scrollTo({
            left: proyectos[0].offsetWidth * pos + 24 * pos, 
            behavior: 'smooth'
        });
    }

    function siguiente() {
        if (direccion === 1 && pos === total - 1) {
            direccion = -1;
        } else if (direccion === -1 && pos === 0) {
            direccion = 1;
        }

       
        if (direccion === 1 && pos < total - 1) {
            pos++;
        } else if (direccion === -1 && pos > 0) {
            pos--;
        }
        mostrar(pos);
    }

    btnDer.onclick = () => {
        if (pos < total - 1) {
            pos++;
            direccion = 1;
        }
        mostrar(pos);
    };

    btnIzq.onclick = () => {
        if (pos > 0) {
            pos--;
            direccion = -1;
        }
        mostrar(pos);
    };

    
    function startAutoScroll() {
        autoScroll = setInterval(() => {
            if (!mouseOver) {
                siguiente();
            }
        }, 4000);
    }

    function stopAutoScroll() {
        clearInterval(autoScroll);
    }

    carrusel.addEventListener('mouseenter', () => {
        mouseOver = true;
        stopAutoScroll();
    });

    carrusel.addEventListener('mouseleave', () => {
        mouseOver = false;
        startAutoScroll();
    });

    mostrar(pos);
    startAutoScroll();


    function animarBarras() {
        const htmlBar = document.querySelector('.barra-llenado.html');
        const cssBar = document.querySelector('.barra-llenado.css');
        const jsBar = document.querySelector('.barra-llenado.js');
        if (htmlBar) htmlBar.style.width = '80%';
        if (cssBar) cssBar.style.width = '75%';
        if (jsBar) jsBar.style.width = '60%';
    }


    setTimeout(animarBarras, 300);

    document.querySelectorAll('.barra').forEach(barra => {
        barra.addEventListener('click', () => {
            const htmlBar = document.querySelector('.barra-llenado.html');
            const cssBar = document.querySelector('.barra-llenado.css');
            const jsBar = document.querySelector('.barra-llenado.js');
            if (htmlBar) htmlBar.style.width = '0';
            if (cssBar) cssBar.style.width = '0';
            if (jsBar) jsBar.style.width = '0';
            setTimeout(animarBarras, 100);
        });
    });
});
document.getElementById('modal-cerrar')?.addEventListener('click', () => {
    document.getElementById('modal-proyecto').classList.remove('activo');
});

document.querySelectorAll('nav a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        const destino = document.querySelector(this.getAttribute('href'));
        if (destino) {
            e.preventDefault();
            destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

const perfilImg = document.querySelector('.perfil-img');
const modalPerfil = document.getElementById('modal-perfil');
const modalPerfilCerrar = document.getElementById('modal-perfil-cerrar');

if (perfilImg && modalPerfil && modalPerfilCerrar) {
    perfilImg.style.cursor = "pointer";
    perfilImg.addEventListener('click', () => {
        modalPerfil.classList.add('activo');
    });
    modalPerfilCerrar.addEventListener('click', () => {
        modalPerfil.classList.remove('activo');
    });
    modalPerfil.addEventListener('click', (e) => {
        if (e.target === modalPerfil) modalPerfil.classList.remove('activo');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const tituloEfecto = document.getElementById('sobre-mi-titulo-efecto');
    const modalSobreMi = document.getElementById('modal-sobre-mi');
    const cerrarSobreMi = document.getElementById('modal-sobre-mi-cerrar');
    if (tituloEfecto && modalSobreMi && cerrarSobreMi) {
        tituloEfecto.addEventListener('click', () => {
            modalSobreMi.classList.add('activo');
        });
        cerrarSobreMi.addEventListener('click', () => {
            modalSobreMi.classList.remove('activo');
        });
        modalSobreMi.addEventListener('click', (e) => {
            if (e.target === modalSobreMi) modalSobreMi.classList.remove('activo');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const diplomaEfecto = document.getElementById('sobre-mi-diploma-efecto');
    const modalSobreMi = document.getElementById('modal-sobre-mi');
    const cerrarSobreMi = document.getElementById('modal-sobre-mi-cerrar');
    if (diplomaEfecto && modalSobreMi && cerrarSobreMi) {
        diplomaEfecto.addEventListener('click', () => {
            modalSobreMi.classList.add('activo');
        });
        cerrarSobreMi.addEventListener('click', () => {
            modalSobreMi.classList.remove('activo');
        });
        modalSobreMi.addEventListener('click', (e) => {
            if (e.target === modalSobreMi) modalSobreMi.classList.remove('activo');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const btnCertificado = document.getElementById('btn-certificado');
    const modalCertificado = document.getElementById('modal-certificado');
    const cerrarCertificado = document.getElementById('modal-certificado-cerrar');
    if (btnCertificado && modalCertificado && cerrarCertificado) {
        btnCertificado.addEventListener('click', (e) => {
            e.stopPropagation();
            modalCertificado.classList.add('activo');
        });
        cerrarCertificado.addEventListener('click', () => {
            modalCertificado.classList.remove('activo');
        });
        modalCertificado.addEventListener('click', (e) => {
            if (e.target === modalCertificado) modalCertificado.classList.remove('activo');
        });
    }
});