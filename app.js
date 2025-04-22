const contenedor = document.getElementById('personas');

fetch('https://randomuser.me/api/?results=10')
 .then(res => res.json())
 .then(data => {
 data.results.forEach(persona => {
 const tarjeta = document.createElement('div');
 tarjeta.className = 'col-md-4 col-lg-3';

 tarjeta.innerHTML = `
 <div class="card h-100 shadow-sm">
 <img src="${persona.picture.large}" class="card-img-top" alt="Foto de ${persona.name.first}">
 <div class="card-body">
 <h5 class="card-title">${persona.name.first} ${persona.name.last}</h5>
 <p class="card-text">
 <strong>Género:</strong> ${persona.gender}<br>
 <strong>Ubicación:</strong> ${persona.location.city}, ${persona.location.country}<br>
 <strong>Email:</strong> ${persona.email}<br>
 <strong>Nacimiento:</strong> ${new Date(persona.dob.date).toLocaleDateString()}
 </p>
 </div>
 </div>
 `;

 contenedor.appendChild(tarjeta);
 });
 })
 .catch(err => {
 contenedor.innerHTML = '<p class="text-danger">Error al cargar los datos</p>';
 console.error(err);
 });