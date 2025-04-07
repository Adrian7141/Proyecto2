fetch('datos.json')
    .then(response => response.json())
    .then(data => {
        const temasDiv = document.getElementById('temas');
        data.temas.forEach(t => {
            const card = `
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card h-100">
                        <img src="${t.imagen}" class="card-img-top" alt="${t.titulo}">
                        <div class="card-body">
                            <h5 class="card-title">${t.titulo}</h5>
                            <p class="card-text">${t.descripcion}</p>
                        </div>
                    </div>
                </div>`;
            temasDiv.innerHTML += card;
        });

        // Footer data
        document.getElementById('materia').textContent = data.informacion.materia;
        document.getElementById('profesor').textContent = data.informacion.profesor;
        document.getElementById('fecha').textContent = data.informacion.fecha;
        document.getElementById('carrera').textContent = data.informacion.carrera;
        document.getElementById('github').href = data.enlaces.github;
        document.getElementById('hosting').href = data.enlaces.hosting;

        // Modal info
        const nube = data.temas.find(t => t.titulo.includes("Nube"));
        if (nube) {
            document.getElementById("nube-definicion").textContent = nube.detalles.definicion;
            document.getElementById("nube-plataformas").innerHTML = nube.detalles.plataformas.map(p => `<li>${p}</li>`).join('');
            document.getElementById("nube-patrones").innerHTML = nube.detalles.patrones.map(p => `<li>${p}</li>`).join('');
        }
    });
