

function validation () {

var namevalue  =  document.querySelector("#namevalue").value.length;
var prevalue  =  document.querySelector("#prevalue").value.length;
var datvalue  =  document.querySelector("#datvalue").value.length;
var addvalue  =  document.querySelector("#addvalue").value.length;
var mailvalue  =  document.querySelector("#mailvalue").value.length;


if( (namevalue < 5) || (prevalue < 5) || (datvalue < 5)  || (addvalue < 5) || (mailvalue < 5) ){


var d = document.querySelector("#error");
d.style.backgroundColor = 'rgb(182,82,137)';
d.style.padding='5px';
d.style.border= '1px black';
d.innerHTML =" tout les champobligatoire";
}else{
    var d1 = document.querySelector("#Result");
    d1.style.backgroundColor = 'rgb(50,205,50)';
    d1.style.padding ='px';
    d1.style.border= '1px black';
    d1.innerHTML =" OK";
////
}
}



