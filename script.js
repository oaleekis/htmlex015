function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(formAno.value.length == 0 || Number(formAno.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 18){
                img.setAttribute('src', 'fotomenino.png')
            }else if(idade >= 18 && idade < 65){
                img.setAttribute('src', 'fotohomem.png')
            }else{
                img.setAttribute('src', 'fotoidoso.png')

            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 18){
                img.setAttribute('src', 'fotomenina.png')
            }else if(idade >= 18 && idade < 65){
                img.setAttribute('src', 'fotomulher.png')

            }else{
                img.setAttribute('src', 'fotoidosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}