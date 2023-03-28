function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade>=0 && idade<7) {
                //Crinça
                img.setAttribute('src', './imagens/foto-criança-m.png')
            } else if (idade<14) {
                //Adolecente
                img.setAttribute('src', './imagens/foto-adolecente-m.png')
            } else if (idade<26) {
                //Jovem
                img.setAttribute('src', './imagens/foto-jovem-m.png')
            } else if (idade<50){
                //Adulto
                img.setAttribute('src', './imagens/foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', './imagens/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade>=0 && idade<7) {
                //Crinça
                img.setAttribute('src', './imagens/foto-criança-f.png')
            } else if (idade<14) {
                //Adolecente
                img.setAttribute('src', './imagens/foto-adolecente-f.png')
            } else if (idade<26) {
                //Jovem
                img.setAttribute('src', './imagens/foto-jovem-f.png')
            } else if (idade<50){
                //Adulto
                img.setAttribute('src', './imagens/foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', './imagens/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}