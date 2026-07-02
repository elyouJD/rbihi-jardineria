function enviarWhatsapp(){

let nombre=document.getElementById("nombre").value;

let telefono=document.getElementById("telefono").value;

let email=document.getElementById("email").value;

let servicio=document.getElementById("servicio").value;

let fecha=document.getElementById("fecha").value;

let mensaje=document.getElementById("mensaje").value;

let texto=`Hola, soy ${nombre}

Teléfono: ${telefono}

Email: ${email}

Servicio: ${servicio}

Fecha: ${fecha}

Mensaje:
${mensaje}`;

window.open(
"https://wa.me/34641470876?text="+encodeURIComponent(texto),
"_blank"
);

}