// ==============================
// VITOPEEK.exe
// Main JavaScript
// ==============================


// Texto que aparecerá en la terminal

const terminalText = "initializing VITOPEEK.exe...";

const typingElement = document.getElementById("typing");

let index = 0;


// Efecto de escritura

function typeText() {

    if (index < terminalText.length) {

        typingElement.textContent += terminalText.charAt(index);

        index++;

        setTimeout(typeText, 55);

    } else {

        setTimeout(() => {

            typingElement.textContent = "system ready.";

            setTimeout(() => {

                typingElement.textContent =
                    "welcome to VITOPEEK.exe";

            }, 1800);

        }, 1000);
    }
}


// Iniciar animación

typeText();


// Evita que los enlaces "#" salten arriba
// mientras todavía no les ponemos nuestras URLs.

const links = document.querySelectorAll(".link-card");

links.forEach(link => {

    link.addEventListener("click", function(event) {

        if (this.getAttribute("href") === "#") {

            event.preventDefault();

            console.log("Este enlace todavía no tiene una URL.");

        }

    });

});