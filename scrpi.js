const API_URL = "http://localhost:3000"
const PELICULAS_URL = "http://localhost:3000/peliculas"



const saveCard = (div) => {
    let div_main = document.querySelector("#main")
    div_main.appendChild(div)
}
const saveCard2 = (div) => {
    let div_main = document.createElement("div")
    div_main.setAttribute("id","main")
    div_main.appendChild(div)
    let body = document.querySelector("body")
    body.appendChild(div_main)
}

const createImg = (text) => {
    let img = document.createElement("img")
    img.setAttribute('src', text)
    console.log(img)
    return img

}
const createP = (text) => {
    let p = document.createElement("p")
    p.innerHTML = text
    console.log(p)
    return p

}

const traer_peliculas = async () => {
    try {
        let response = await fetch(API_URL + "/peliculas")
        let data = await response.json()
        return data
    } catch (error) {
        console.log(error);

    }
}
const traer_pelicula = async (URL_NAME) => {
    try {
        let response = await fetch(URL_NAME)
        let data = await response.json()
        return data
        
    } catch (error) {
        console.log(error);

    }
}
const llamar_peliculas = async () => {
    let peliculas = await traer_peliculas()
    peliculas.forEach(element => {
        let div = document.createElement("div")
        div.setAttribute("class", "card")
        div.appendChild(createImg(element.img))
        div.appendChild(createP(element.name))
        div.appendChild(createP(element.score))
        div.appendChild(createP(element.genre))
        saveCard(div)
    });
}
let arr=[]
const llamar_pelicula = async (URL_NAME) => {
        let div_main = document.getElementById("main")
        div_main.style.display = "none";
        let pelicula = await traer_pelicula(URL_NAME)
        console.log(pelicula)
        let div = document.createElement("div")
        div.setAttribute("class", "card")
        div.appendChild(createImg(pelicula[0].img))
        div.appendChild(createP(pelicula[0].name))
        div.appendChild(createP(pelicula[0].score))
        div.appendChild(createP(pelicula[0].genre))
        saveCard2(div)
    ;}

llamar_peliculas()

let cards = document.getElementsByClassName("card")


let form = document.getElementById("form")


form.addEventListener("submit", async (e) => {
    e.preventDefault()
    let peliculas = await traer_peliculas()
    const term = search.value;
    if (term && term !== "") {
        peliculas.forEach((element) => {
            if (term === element.name) {

              
                llamar_pelicula(PELICULAS_URL + "?name=" + element.name)
                
            }

        })
        search.value="";
    } else {
        window.location.reload();

    }
})



