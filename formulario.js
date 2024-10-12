document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === "" || password === "") {
        errorMessage.textContent = "Por favor, complete todos los campos.";
    } else {
        errorMessage.textContent = "";

        alert("Inicio de sesión devorador");
    }
});
