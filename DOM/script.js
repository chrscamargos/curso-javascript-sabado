// // // const paragrafo1 = document.getElementById("paragrafo1")
// // // const paragrafo2 = document.getElementById("paragrafo2")
// // // const paragrafo3 = document.getElementById("paragrafo3")
// // // const paragrafo4 = document.getElementById("paragrafo4")

// // // console.log(paragrafo1, paragrafo2, paragrafo3, paragrafo4);

// // // const title = document.getElementById("title")
// // // title.innerText = "Troquei"

// // const paragrafo = document.getElementById("paragrafo")
// // // p.innerText = "Troquei"
// // paragrafo.style.color = "green"
// // paragrafo.style.fontSize = "90px"
// // paragrafo.style.background = "yellow"

// const paragrafo = document.getElementById("paragrafo"    )
// const btn = document.getElementById("btn")
// const img = document.getElementById("img")

// // btn.addEventListener("click", function(){
// //     paragrafo.innerText = "Deu bom!"
// //     paragrafo.style.color = "blue"
// //     paragrafo.style.fontSize = "50px"

// // })

// btn.addEventListener("mouseover", function(){
//     paragrafo.innerText = "Texto alterado com sucesso!"
//     paragrafo.style.color = "blue"
//     img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvAGxGbJZOxCrQF7oqZ-qM0dKTQ-r9ZCK5rMU8pf09zMV9VVcvDpq9lUU&s=10"
// })

    document.addEventListener("keydown", function (e) {
        if (e.key === "r") {
            document.body.style.backgroundColor = "red"
        } else if (e.key === "b") {
            document.body.style.backgroundColor = "blue"
        } else if (e.key === "g") {
            document.body.style.backgroundColor = "green"
        } else {
            document.body.style.backgroundColor = "white"
        }
    })