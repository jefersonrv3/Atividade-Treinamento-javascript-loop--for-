let p = document.querySelector("p")
let input = document.querySelector("input")

const contatos = [{
        name: "Rodolfo",
        Number: " - (19) 99454-4532 &#128241"
    },
    {
        name: "Paulo",
        Number: " - (11) 99454-4532 &#128241"
    },
    {
        name: "Aline",
        Number: " - (16) 99454-4532 &#128241"
    },
    {
        name: "Maria",
        Number: " - (29) 99454-4532 &#128241"
    },
]

function botao() {
    let encontrou = false
    let nomeDigitado = input.value

    for (let i = 0; i < contatos.length; i++) {
        if (nomeDigitado.toLowerCase() == contatos[i].name.toLowerCase()) {
            p.innerHTML = contatos[i].name + contatos[i].Number
            encontrou = true
        }
        if (encontrou === false) {
            p.innerHTML = "contato não encontrado"
        }
    }


}