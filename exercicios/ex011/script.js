function consulta() {
    var país = window.document.getElementById('ipais')
    var país = String(país.value)
    res.innerHTML = `Vivendo em <strong>${país}</strong>, `
    if(país != 'Brasil') {
        res.innerHTML += `Você é Estrangeiro!`
    } else {
        res.innerHTML += `Você é Brasileiro!`
    }
}