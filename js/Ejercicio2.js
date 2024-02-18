console.log('Hola mundo');

fetch("https://api.escuelajs.co/api/v1/categories")
    .then(res => res.json())
    .then(data => {
        let card = '';
        for (let db of data) {
            card += `<div class=" col-md-4 card mb-5" style="width: 18rem;">
                <img src="${db.image}" class="card-img-top" alt="">
                <div class="card-body">
                    <h2 class="card-title">${db.name}</h2>
                </div>
            </div>`
        }
        document.getElementById("lista").innerHTML = card;
    })
    .catch(error => console.error('Hubo un problema con la petición fetch:', error));