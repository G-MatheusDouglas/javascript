function verificar() {
    var numIni = Number(document.querySelector('input#numIni').value)
    var numFim = Number(document.querySelector('input#numFim').value)
    var passo = Number(document.querySelector('input#passo').value)
    var res = document.querySelector('div#res>p')
    res.innerHTML = 'Contando:<br>'
    if (numIni == '' || numFim == ''){
        res.innerHTML = 'Impossivel contar!'
    } else {
        if (passo == 0){
            window.alert('Passo inválido Considerando PASSO 1')
            passo = 1
        }
        while (numIni <= numFim) {
            res.innerHTML += `${numIni} &#x1F449`
            numIni += passo
        }
        res.innerHTML += '&#x1F3C1'
    }
}
