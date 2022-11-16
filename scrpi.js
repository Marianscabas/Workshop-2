const API_URL = "http://localhost:3000"

const createImg =(text) =>{
    let div = document.querySelector("#main")
    let img = document.createElement("img")
    img.setAttribute('src',text)
    div.appendChild(img)
}
const createP =(text) =>{
    let div = document.querySelector("#main")
    let p = document.createElement("p")
    p.innerHTML = text
    div.appendChild(p)
}

const traer_peliculas = async ()=>{
    try {
        let response = await fetch(API_URL + "/peliculas")
        let data = await response.json()
        return data
    } catch (error) {
        console.log(error);
        
    }
}
const llamar_peliculas = async ()=>{
    let peliculas = await traer_peliculas()
    peliculas.forEach(element => {
        createImg(element.img)
        createP(element.name)
        createP(element.score)
        createP(element.genre)
    });
}

llamar_peliculas();
