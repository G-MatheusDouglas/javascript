function gera() {
    var res = document.getElementById('tabuada')
    var num = Number(document.querySelector('input#num').value)
    var r = 0
    if (num == null) {
        window.alert('Não foi possivel calcular, digite um número')
    } else {
        for (var c = 1;c <= 10;c++) {
            r = num * c
            res.innerHTML += `<option>${num} x ${c} = ${r}<option>`
        }
    }
}