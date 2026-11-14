// const nome = document.getElementById("nome")
// const img = document.getElementById("img")

// fetch("https://rickandmortyapi.com/api/character")
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data.results[10].name)
//         nome.innerText = data.results[10].name
//         img.src = data.results[10].image 
//     })

// fetch("https://rickandmortyapi.com/api/character")
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data.results[4]);
        
//     })

// ------------------------------------------------------------------------

// const nome = document.getElementById("nome")
// const email = document.getElementById("email")
// const telefone = document.getElementById("telefone")
// const website = document.getElementById("website")
// const company_name = document.getElementById("company_name")

// const container = document.getElementById("container")

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => { 
//         console.log(data);
//         data.forEach(user => {
//             const card = document.createElement("div")
//             card.className = "box"
//             card.innerHTML = `
//             <p>Nome: ${user.name}</p>
//             <p>Email: ${user.email}</p>
//             <p>Telefone: ${user.phone}</p>
//             <p>Company Name: ${user.company.name}</p>
//             `
//             container.appendChild(card)
//         });
        // nome.innerText = data[4].name;
        // email.innerText = data[4].email;
        // telefone.innerText = data[4].phone;
        // website.innerText = data[4].website;
        // company_name.innerText = data[4].company.name;
        // })

const container = document.getElementById("container")

fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results);
        data.results.forEach(character => {
            const card = document.createElement("div")
            card.className = "box"
            card.innerHTML = `
                <img src="${character.image}"/>
                <p>Nome: ${character.name}</p>
            `
            container.appendChild(card)
        });
    })

