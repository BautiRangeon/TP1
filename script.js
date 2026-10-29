const formulario = document.getElementById("formUbicacion");
const nombreInput = document.getElementById("nombre");
const latitudInput = document.getElementById("latitud");
const longitudInput = document.getElementById("longitud");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = nombreInput.value.trim();
    const latitud = Number(latitudInput.value.trim().replace(",", "."));
    const longitud = Number(longitudInput.value.trim().replace(",", "."));

    mensaje.textContent = "";

    if (nombre === "") {
        mensaje.textContent = "Ingrese un nombre para la ubicación.";
        return;
    }

    if (Number.isNaN(latitud) || Number.isNaN(longitud)) {
        mensaje.textContent = "La latitud y la longitud deben ser números.";
        return;
    }

    if (latitud < -90 || latitud > 90 || longitud < -180 || longitud > 180) {
    mensaje.textContent = "La latitud debe estar entre -90 y 90 y la longitud entre -180 y 180.";
    return;
}

    const coordenadas = latitud + "," + longitud;
    const urlGoogleMaps =
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(coordenadas);

    window.open(urlGoogleMaps, "_blank");
});
