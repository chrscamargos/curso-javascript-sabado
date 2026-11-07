// const nome = document.getElementById("nome")
// const img = document.getElementById("img")

// fetch("https://rickandmortyapi.com/api/character")
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data.results[10].name)
//         nome.innerText = data.results[10].name
//         img.src = data.results[10].image 
//     })

fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results[4]);
        
    })