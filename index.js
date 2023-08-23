console.log(productos)

const cardsContainer = document.querySelector(".cards-container")

const cardsHtml = array => {

    const cards = array.reduce((acc, element) => {
        return acc + `
        <div class="card" id="card-${element.id}">
            <h2>
                ${element.producto}
            </h2>
            <figure class="container-img">
                <img class="img" src=${element.imagen} alt="imagen del producto ${element.producto}">
            </figure>
            <h3>
                Precio: ${element.precio}
            </h3>
            <h3>
                Stock: ${element.cantidad}
            </h3>
            <button class="button" id="button-${element.id}">
                Añadir al carrito
            </button>
        </div>
        
    `
    }, "")

    cardsContainer.innerHTML = cards

}

cardsHtml(productos)


const allCards = document.querySelectorAll(".button")

let carrito = []

const eventoCards = (nodos, array) => {

    for (let i = 0; i < nodos.length; i++) {

        nodos[i].onclick = (e) => {
            const id = e.currentTarget.id.slice(7)
            const buscarProducto = array.find( element => element.id === Number(id))
            carrito.push(buscarProducto)
            localStorage.setItem("carrito", JSON.stringify(carrito));
            Toastify({
                text: "Se ha añadido a tu carrito",
                className: "info",
                style: {
                  background: "#060016",
                }
              }).showToast();
        }
    }
}

eventoCards(allCards, productos);