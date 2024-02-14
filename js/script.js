function buscarPersonaje() {
    const numPersonaje = document.getElementById('personaje').value;
    const url = `https://swapi.dev/api/people/${numPersonaje}/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const resultado = document.getElementById('resultado');
            resultado.innerHTML = `
                <h2>${data.name}</h2>
                <p>Altura: ${data.height} cm</p>
                <p>Peso: ${data.mass} kg</p>
                <p>Color de pelo: ${data.hair_color}</p>
                <p>Color de piel: ${data.skin_color}</p>
                <p>Color de ojos: ${data.eye_color}</p>
                <p>Año de nacimiento: ${data.birth_year}</p>
                <p>Genero: ${data.gender}</p>
            `;
        })
        .catch(error => {
            console.error('Error al buscar el personaje:', error);
            const resultado = document.getElementById('resultado');
            resultado.innerHTML = '<p>Error al buscar el personaje. Por favor, inténtalo de nuevo.</p>';
        });
}