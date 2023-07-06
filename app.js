var tam=document.querySelector("#tamaño");
let cant=document.querySelector("#cantidad");
var refresco=document.querySelector("#refresco");
var papas=document.querySelector("#papas");
var alitas=document.querySelector("#alitas");
var valor=document.querySelector("#valor");
var res=document.querySelector("#res");



tam.onchangue=()=>{calcular()}
cant.oninput=()=>{calcular()}
refresco.onchangue=()=>{calcular()}
papas.onchangue=()=>{calcular()}
alitas.onchangue=()=>{calcular()}
i1.onchangue=()=>{calcular()}
i2.onchangue=()=>{calcular()}
i3.onchangue=()=>{calcular()}

const calcular=()=>{ n=parseInt(cant.value);
    valor.innerHTML=cant.value;
    let costoPizza=0; 
    let total=0; 
    let extras=0;
    let costoExtra=0;
    switch(tam.value){
        case "individual":costoPizza=100;break;
        case "grande":costoPizza=120;break;
        case "familiar":costoPizza=150;break;
        case "jumbo":costoPizza=180;break;
    }
    
    if(i1.checked){
        costoExtra+=0;
    }
    if(i2.checked){
        costoExtra+=20;
    }
    if(i3.checked){
        costoExtra+=35;
    }
    if(refresco.checked){
        extras+=40;
    }
    if(papas.checked){
        extras+=50;
    }
    if(alitas.checked){
        extras+=75;
    }
 costoPizza=costoPizza+costoExtra
 total=(costoPizza*n)+extras;
 res.innerHTML="Total: $"+total.toFixed(2);
}