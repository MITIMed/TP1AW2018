$( document ).ready(function() {


    $("#valid").click(function(){
if($("#nom").val().length <5)
{
   
    $('#myModal').modal("show");
}
else if($("#prénom").val().length <5){
    $('#myModal').modal("show");
}

else if($("#adresse").val().length <5){
    $('#myModal').modal("show");
}       
     
else if($("#email").val().length <5){
    $('#myModal').modal("show");
}
else{
$(".modal-title").html("Bienvenue " + $("#nom").val() );

$(".modal-body").html(" vous etes né le  : " + $("#date").val());
$(".modal-body").append("<img src = 'https://maps.googleapis.com/maps/api/staticmap?markers="+ $("#adresse").val()+
"&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg' >");
$('#myModal').modal("show");
}



});
     
 });
 

 