function mascara_tel(objeto){
    if(objeto.value.length == 0){
        objeto.value = objeto.value + '(';
    }
    if(objeto.value.length == 3){
        objeto.value = objeto.value + ')';
    }
    if(objeto.value.length == 9){
        objeto.value = objeto.value + '-';
    }
}

function msg(){
    alert('Sr(a) ' + document.faleConosco.nome.value + ' Seus dados foram enviados com sucesso');
}

function slide1(){
    document.getElementById('id').src="img/bleach-manga.jpg";
    setTimeout("slide2()", 1000)
    }
    
    function slide2(){
    document.getElementById('id').src="img/violet.jpg";
    setTimeout("slide3()", 1000)
    }
    
    function slide3(){
    document.getElementById('id').src="img/duna.jpg";
    setTimeout("slide4()", 1000)
    }
    function slide4(){
    document.getElementById('id').src="img/encanto.jpeg";
    setTimeout("slide5()", 1000)
    }
    function slide5(){
    document.getElementById('id').src="img/one.jpg";
    setTimeout("slide6()", 1000)
    }
    function slide6(){
    document.getElementById('id').src="img/red.jpg";
    setTimeout("slide7()", 1000)
    }
    function slide7(){
    document.getElementById('id').src="img/stranger things.jpg";
    setTimeout("slide8()", 1000)
    }
    function slide8(){
    document.getElementById('id').src="img/sweet.jpg";
    setTimeout("slide9()", 1000)
    }
    function slide9(){
    document.getElementById('id').src="img/anime.jfif";
    setTimeout("slide10()", 1000)
    }
    function slide10(){
    document.getElementById('id').src="img/sei.jpg";
    setTimeout("slide1()", 1000)
    }