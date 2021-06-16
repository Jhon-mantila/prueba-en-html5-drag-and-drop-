var elem_destino1;
var elem_destino2;
var elem_destino3;
var elem_destino4;
var elem_destino5;

var imagenes; 
var elem_bien1;
var elem_mal;

var elem_bien2;
var elem_mal2;

var elem_bien3;
var elem_mal3;

var elem_bien3;
var elem_mal3;

var elem_bien4;
var elem_mal4;

var elem_bien5;
var elem_mal5;

function comenzar1(){
    
    imagenes = document.querySelectorAll("#cajaimagen img");
    
    elem_bien1=document.getElementById("bn1");
    elem_mal=document.getElementById("mal1");

        elem_bien2=document.getElementById("bn2");
    elem_mal2=document.getElementById("mal2");

        elem_bien3=document.getElementById("bn3");
    elem_mal3=document.getElementById("mal3");

        elem_bien4=document.getElementById("bn4");
    elem_mal4=document.getElementById("mal4");

        elem_bien5=document.getElementById("bn5");
    elem_mal5=document.getElementById("mal5");
    
    for (var i=0; i<imagenes.length;i++){
        
        imagenes[i].addEventListener("dragstart", comenzando_arrastrar1, false);
        
        imagenes[i].addEventListener("dragend", terminado1, false);
    }
    
    
    //////////////////////DESTINO1//////////////////////////////
        elem_destino1=document.getElementById("zonadestino");
    
        elem_destino1.addEventListener("dragenter", function(e){
        e.preventDefault();}, false);
    
        elem_destino1.addEventListener("dragover", entrando1, false);
    
        elem_destino1.addEventListener("drop", soltando1, false);
        
        

    //////////////////////DESTINO2//////////////////////////////
        
        elem_destino2=document.getElementById("zonadestino1");
    
        elem_destino2.addEventListener("dragenter", function(e){
        e.preventDefault();}, false);
    
        elem_destino2.addEventListener("dragover",entrando2, false);
    
        elem_destino2.addEventListener("drop", soltando2, false);


    //////////////////////DESTINO3//////////////////////////////
        
        elem_destino3=document.getElementById("zonadestino2");
    
        elem_destino3.addEventListener("dragenter", function(e){
        e.preventDefault();}, false);
    
        elem_destino3.addEventListener("dragover",entrando3, false);
    
        elem_destino3.addEventListener("drop", soltando3, false);


        //////////////////////DESTINO4//////////////////////////////
        
        elem_destino4=document.getElementById("zonadestino3");
    
        elem_destino4.addEventListener("dragenter", function(e){
        e.preventDefault();}, false);
    
        elem_destino4.addEventListener("dragover",entrando4, false);
    
        elem_destino4.addEventListener("drop", soltando4, false);


        //////////////////////DESTINO5//////////////////////////////
        
        elem_destino5=document.getElementById("zonadestino4");
    
        elem_destino5.addEventListener("dragenter", function(e){
        e.preventDefault();}, false);
    
        elem_destino5.addEventListener("dragover",entrando5, false);
    
        elem_destino5.addEventListener("drop", soltando5, false);
    
    
}


function comenzando_arrastrar1(e){
    
    var elemento1=e.target;
    
    e.dataTransfer.setData("Text", elemento1.getAttribute("id"));
}


function  soltando1(e){
    
    e.preventDefault();
    
    var id=e.dataTransfer.getData("Text");
    
    var src=document.getElementById(id).src;

    elem_destino1.innerHTML = "<img src='" + src + "'>";
        
}

function entrando1(e){
    
    e.preventDefault();
    
    var id=e.dataTransfer.getData("Text");
    
    if (id=="img1"){
        elem_bien1.style.visibility="visible";
    }else{
        elem_mal.style.visibility="visible";
    }
    
}

function terminado1(e){
    var elemento = e.target;
    
    elemento.style.visibility="hidden";
}

/////////////////////////////////////////////DESTINO 2/////////////////////////////////////////////

function entrando2(e){
    
    e.preventDefault();
    
    var id=e.dataTransfer.getData("Text");
    
   if (id=="img2"){
        elem_bien2.style.visibility="visible";
    }else{
        elem_mal2.style.visibility="visible";
    }
    
}

function  soltando2(e){
    
    e.preventDefault();
    
    var id=e.dataTransfer.getData("Text");
    
    var src=document.getElementById(id).src;

    
    elem_destino2.innerHTML = "<img src='" + src + "'>";
}

/////////////////////////////////////////////DESTINO 3/////////////////////////////////////////////

function entrando3(e){
    
    e.preventDefault();
    
    var id=e.dataTransfer.getData("Text");
    
   if (id=="img3"){
        elem_bien3.style.visibility="visible";
    }else{
        elem_mal3.style.visibility="visible";
    }
    
}

function  soltando3(e){
    
    e.preventDefault();
    
    var id=e.dataTransfer.getData("Text");
    
    var src=document.getElementById(id).src;

    
    elem_destino3.innerHTML = "<img src='" + src + "'>";
}

/////////////////////////////////////////////DESTINO 4/////////////////////////////////////////////

function entrando4(e){
    
    e.preventDefault();
    
    var id=e.dataTransfer.getData("Text");
    
   if (id=="img4"){
        elem_bien4.style.visibility="visible";
    }else{
        elem_mal4.style.visibility="visible";
    }
    
}

function  soltando4(e){
    
    e.preventDefault();
    
    var id=e.dataTransfer.getData("Text");
    
    var src=document.getElementById(id).src;

    
    elem_destino4.innerHTML = "<img src='" + src + "'>";
}

/////////////////////////////////////////////DESTINO 5/////////////////////////////////////////////

function entrando5(e){
    
    e.preventDefault();
    
    var id=e.dataTransfer.getData("Text");
    
   if (id=="img5"){
        elem_bien5.style.visibility="visible";
    }else{
        elem_mal5.style.visibility="visible";
    }
    
}

function  soltando5(e){
    
    e.preventDefault();
    
    var id=e.dataTransfer.getData("Text");
    
    var src=document.getElementById(id).src;

    
    elem_destino5.innerHTML = "<img src='" + src + "'>";
}

//////////////////////////////TRUE AND FALSE/////////////////////////////////



window.addEventListener("load", comenzar1, false);

function verdadero(){

    $("#centrado").addClass("relleno");
    $("#centrado p").empty();
    $(".p2").prepend("<b>¡Bien!</b>. ");
}
 
function falso(){

    $("#centrado").addClass("rellenoFalso");
    $("#centrado p").empty();
    $(".p2").prepend("<b>¡Intenta de Nuevo!</b>. ");
}  

/////////////////////EVALUACIO/////////////////////////
function changeImage(id) {
    var image = document.getElementById(id);

   
    if (image.src.match("on")) {
        image.src = "img/A.png";
    } else {
        image.src = "img/mal.png";
    }

    
}

function changeImage1(id) {
    var image = document.getElementById(id);

   
    if (image.src.match("on")) {
        image.src = "img/B.png";
    } else {
        image.src = "img/bien.png";
    }

    
}

function link(){


    $("#imga").attr("src", "img/mal.png");
    $("#imgb").attr("src", "img/bien.png");
    $("#imgc").attr("src", "img/mal.png");
    $("#imgd").attr("src", "img/mal.png");
}

function link2(idelem){

var id=document.getElementById(idelem);

const  txtid = id.innerHTML;
console.log(txtid);

if(txtid == 'Lorem ipsum dolor sit amet, consetetur'){
     console.log("entro cadane");
}


}