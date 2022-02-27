var btnVerificar = document.getElementById('btnVerificar')
btnVerificar.addEventListener('click', verificar)
function verificar() {
    var data = new Date ()
    var ano = data.getFullYear()
    var res = document.getElementById('res')
    var anoNascimento = document.getElementById('anoNascimento')

    if(anoNascimento.value.length == 0 || Number(anoNascimento.value.length > ano)) {
        alert('[Erro], tente novamente!')
    }  else {
    var idade = ano - Number(anoNascimento.value)
    var sexo = document.getElementsByName('radsex')
    var genero = ''
    var img = document.createElement('img')
    if(sexo[0].checked){
        genero = 'Homem'
        if(idade >= 0 && idade <= 11) {
        //criança
        img.setAttribute('src','imagens/bebe-menino.png')
        }else if(idade < 21) {
        //jovem
        img.setAttribute('src','imagens/homem-jovem.png')
        }else if(idade < 50) {
        //adulto
        img.setAttribute('src','imagens/homem-adulto.png')
        } else {
        //idoso
        img.setAttribute('src','imagens/homem-idoso.png')
        }
    } else if(sexo[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade <= 11) {
            //criança
            img.setAttribute('src','imagens/bebe-menina.png')
            }else if(idade < 21) {
            //jovem
            img.setAttribute('src','imagens/mulher-jovem.png')
            }else if(idade < 50) {
            //adulto
            img.setAttribute('src','imagens/mulher-adulta.png')
            } else {
            //idoso
            img.setAttribute('src','imagens/mulher-idosa.png')
            }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
}
}