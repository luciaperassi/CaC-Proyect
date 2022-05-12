document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener('submit', validateForm); 
});
  
function validateForm(evento) {
    evento.preventDefault();
    var name = document.getElementById('name').value;
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if(name.length == 0) {
      alert('El nombre no puede ser nulo.');
      return;
    }
    var email = document.getElementById('email').value;
    if (expReg.test(email)==false){
        alert("La dirección de email es inválida.");
       }
    var msj = document.getElementById('msj').value;
    if(msj.length==0) {
      alert('La consulta no puede ser nula.');
      return;
    }
    alert('Su consulta fue recibida. Nos pondremos en contacto lo antes posible.')
    this.submit();
}