document.getElementById('formulario-registro').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const usuario = document.getElementById('usuario').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const password = document.getElementById('password').value;


    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = `Gracias por registrarte muak, ${usuario}!`;
});
