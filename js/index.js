$(document).ready(() => {
    $("#file").change((e) =>{
        
        let reader=new FileReader();
        reader.readAsDataURL(e.target.files[0]);  // para leer la primera posicion del fichero

        reader.onload = function(){   // cuando reader ejecute el fichero lanza la funcion

            $("#imagen").attr("src",reader.result);

            
        }
    });
});