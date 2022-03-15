import cipher from './cipher.js';

const botonstart = document.getElementById("start-btn");
botonstart.addEventListener ("click", () =>{
   document.getElementById ("Diapositiva1").style.display = "none";
   document.getElementById ("Diapositiva2").style.display = "block";
   document.getElementById ("Diapositiva3").style.display = "block";
});

const botonnext = document.getElementById("next-btn");
botonnext.addEventListener ("click", () =>{
   document.getElementById ("Diapositiva1").style.display = "none";
   document.getElementById ("Diapositiva2").style.display = "none";
   document.getElementById ("Diapositiva3").style.display = "none";
   document.getElementById ("Diapositiva4").style.display = "block";
});

let inputext = document.getElementById("string");
inputext.addEventListener ("keyup", () => {
   let string1= document.getElementById("string").value;
   let string2= string1.toUpperCase();
   inputext.value = string2;

});


const botoncifrar = document.getElementById("cifrar-btn");
   botoncifrar.addEventListener("click", () =>{
      let offset = document.getElementById("offset").value;
      let string =document.getElementById("string").value;
      document.getElementById("message").value=cipher.encode(offset,string);
});


const botondescifrar = document.getElementById("descifrar-btn");
      botondescifrar.addEventListener("click", () =>{
      let offset = document.getElementById("offset").value;
      let string =document.getElementById("string").value;
      document.getElementById("message").value=cipher.decode(offset,string);
   });
      

