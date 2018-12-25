$(document).ready(function () {


   
        $("#nom").keydown(function() {
            var l = $(this).val().length;   
            $("#lenN").html(l +" caractère(s)");
        });
        
        $("#prenom").keydown(function() {
            var l = $(this).val().length;   
            $("#lenP").html(l +" caractère(s)");
        });
        
        $("#adresse").keydown(function() {
            var l = $(this).val().length;   
            $("#lenA").html(l +" caractère(s)");
        });
        
        $("#mail").keydown(function() {
            var l = $(this).val().length;   
            $("#lenM").html(l +" caractère(s)");
        });
        
         $("#gps").on("click", function (event) {
            event.preventDefault();
             getLocation();

        });

        $("#ajouter").on("click",function(event) {
	
            event.preventDefault();
            if ($("#nom").val().length < 5 || $("#prenom").val().length < 5 || $("#date").val().length < 5 || $("#adresse").val().length < 5 || $("#mail").val().length < 5)
        {
           $('#myModal').modal("show");
           
        }
        else
        {
             //contactStore.add("qsdqsd","qsdqsd","dsqfsdf","dsfsdfsdf","dsfsdfsdf");
            contactStore.add($("#nom").val(),$("#prenom").val(),$("#adresse").val(),$("#date").val(),$("#mail").val());
            contactList = contactStore.getList();
            $("tbody").html('');
            for(var index in contactList){
                $("tbody").append('<tr><td>'+contactList[index].name+'</td><td>'+contactList[index].firstname+'</td><td>'+contactList[index].date+'</td><td>'+contactList[index].adress+'</td><td>'+contactList[index].mail+'</td></tr>');
             }
        }
            
             
              
            
        });
        

    
});


