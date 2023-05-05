var vetor = []
var vSoma = 0
var vCont = 0
var menor = 100
var maior = 1
var num = document.getElementById('txtn')
var lista = document.getElementById('list')
var res = document.querySelector('div#res')

function adicionar() {
    n = Number(num.value)
    if (n < 1 || n > 100 || vetor.indexOf(n) != -1) {
        window.alert('Valor invalido ou já encontrado na lista')
    } else {
        vSoma += n
        vCont ++
        // Adiciona um item à lista
        let item = document.createElement('option')
        item.text = `valor ${n} adicionado`
        lista.appendChild(item)
        // Adiciona o número ao Vetor
        vetor.push(n)
        // Verifica o menor e o maior
        if (n < menor) {
            menor = n
        }
        if (n > maior) {
            maior = n
        }
        // Limpa o campo de resposta
        res.innerHTML = ''
    }
}
function finalizar() {
    if (vCont == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let vMedia = vSoma / vCont
        res.innerHTML += `<p>Ao todo, temos ${vCont} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${vSoma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${vMedia}.</p>`
    }
}