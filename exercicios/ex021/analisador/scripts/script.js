let num = document.getElementById('txtn')
let lista = document.getElementById('list')
let res = document.querySelector('div#res')
var valores = []
var vSoma = 0
var vCont = 0
var menor = 100
var maior = 1

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    n = Number(num.value)
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        vSoma += n
        vCont ++
        // Adiciona um item à lista
        let item = document.createElement('option')
        item.text = `valor ${n} adicionado`
        lista.appendChild(item)
        // Adiciona o número ao Array
        valores.push(n)
        // Verifica o menor e o maior
        if (n < menor) {
            menor = n
        }
        if (n > maior) {
            maior = n
        }
        // Limpa o campo de resposta
        res.innerHTML = ''
    } else {
        window.alert('Valor invalido ou já encontrado na lista')
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