let p = document.querySelector("p") //<p> nesse caso é o texto a ser exibido na tela (está atrelado ao <p> do html)
let input = document.querySelector("input") //input é onde o usuário vai digitar os caracterspra pesquisar, nesse caso atrelado ao input do html

const contatos = [{ //isso é um ARRAy que armazena as informações dos nossos contatos
        name: "Rodolfo",
        Number: " - (19) 99454-4532 "
    },
    {
        name: "Paulo",
        Number: " - (11) 99454-4532 "
    },
    {
        name: "Aline",
        Number: " - (16) 99454-4532 "
    },
    {
        name: "Maria",
        Number: " - (29) 99454-4532 "
    },
]

function botao() { //essa é a função atrelada ao onclick do botap isso é oque ele irá fazer ao ser clicado
    let encontrou = false //variável que irá mostrar texto na tela no <P> caso o resultado d toda a função do botao retorne sem nenhum match ou resultado idêntico ao esperado dentro do array
    let nomeDigitado = input.value      //variavel onde o usuario digita no input e o texto é armazenado nela pra rodar a função do botao
    for (let i = 0; i < contatos.length; i++) {                //aqui é o loop for, onde (i=0 )por padrão e i < menor que contatos.lenght ou seja extensão do array contatos(quantidade de instãncias de dados nele, i++ = adicionar mais 1 ou seja rodará um a um até achar mas em ordem descrescente e se acabar sem achar ele para e retorna false)
        if (nomeDigitado.toLowerCase() == contatos[i].name.toLowerCase()) { // se nome digitado (tolowercase retira o case sensitive dando como identico letras digitadas minusculas ou maiusculas for idêntico à alguma das instancias no array retornará true )
            p.innerHTML = `Contato encontrado: ${contatos[i].name + contatos[i].Number}` //altera <p> com o resultado da busca refinada que resultou em true, e exibe uma string template atrelada ao elemento <p> na tela
            encontrou = true
        }
        if (encontrou === false) {  //caso o loop for retorne falso ele roda innerhtml modificado
            p.innerHTML = "contato não encontrado, tente novamente"  //inner html modificado mostra string dizendo que o loop nao deu nenhum match
        }
    }


}