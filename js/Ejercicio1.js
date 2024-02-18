console.log('Hola mundo');

fetch("https://api.escuelajs.co/api/v1/users")
    .then(res => res.json())
    .then(data => {
        let card = '';
        for (let db of data) {
            card += `<div class=" col-md-4 card mb-5" style="width: 18rem;">
                <img src="${db.avatar}" class="card-img-top" alt="">
                <div class="card-body">
                    <h2 class="card-title">${db.name}</h2>
                    <h5 class="card-title">${db.email}</h5>
                    <p class="card-text">${db.password}</p>
                </div>
            </div>`
        }
        document.getElementById("lista").innerHTML = card;
    })
    .catch(error => console.error('Hubo un problema con la petición fetch:', error));