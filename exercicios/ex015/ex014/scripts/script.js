function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12) {
        //BOM DIA!
        img.src = 'imagens/manha-250.png'
        document.body.style.background = '#f6e8ca'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'imagens/tarde-01-250.png'
        document.body.style.background = '#6a9682'
    } else if (hora >=18 && hora <= 19) {
        //CREPUSCULO
        img.src = 'imagens/tarde-02-250.png'
        document.body.style.background = '#a54f1e'
    } else {
        //BOA NOITE
        img.src = 'imagens/noite-250.png'
        document.body.style.background = '#141821'
    }
}
    
    
