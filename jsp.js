const API_URL =  "http://localhost:3000"
const PELICULAS_URL ="http://localhost:3000/peliculas"

const header = document.getElementsByClassName("header")
const form = document.getElementById("form")
const main = document.getElementById("main")


const getPeliculas = (peliculas) => {
    const peticion = fetch(peliculas)
    peticion
        .then((resp) => resp.json())
        .then((data) => showPeliculas(data))
        .catch((error) => alert("error"))
}

getPeliculas(API_URL)

const showPeliculas = (pelicula) => {
    if (pelicula.length == 0) {
        alert("error2")
    }
    else {
        main.innerHTML = ""
        pelis.forEach(element => {
            const { name, img, score, genre } = element
            const mainPelis = document.createElement("div")
            mainPelis.innerHTML = `
            <div class="target">
            
                <div>
                <img src="${img}"/>
                </div>
            <div class="name">
            <h3 class="namel">NOMBRE</h3>
            <span>${name}</span>
            </div>
                <div class="genre">
                <h3>GENERO</h3>
                <span>${genre}}</span>
                </div>
            <div class="score">
            <h3>PUNTAJE</h3>
            <span>${score}</span>
            </div>

            </div>`
            main.appendChild(mainPelis)
        })
    }
}
