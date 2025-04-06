// Datos predefinidos de usuario
const validUsername = "usuario";
const validPassword = "contraseña123";

// Obtener el formulario y los elementos de error
const form = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

// Evento para manejar el envío del formulario
form.addEventListener('submit', function(e) {
    e.preventDefault();  // Evitar que la página se recargue al enviar el formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificar si los datos son correctos
    if (username === validUsername && password === validPassword) {
        alert("¡Bienvenido!");
        // Aquí puedes redirigir a otro lugar, por ejemplo:
        // window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos. Intenta de nuevo.";
    }
});
