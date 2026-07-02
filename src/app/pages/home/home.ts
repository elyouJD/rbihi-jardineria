import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
 menuOpen = false;
  nombre = '';
  telefono = '';
  email = '';
  servicio = 'Mantenimiento de jardines';
  fecha = '';
  mensaje = '';

  enviarWhatsapp() {

    const texto = `
🌿 Solicitud de Presupuesto

👤 Nombre: ${this.nombre}

📞 Teléfono: ${this.telefono}

📧 Email: ${this.email}

🛠️ Servicio: ${this.servicio}

📅 Fecha: ${this.fecha}

📝 Mensaje:
${this.mensaje}
`;

    window.open(
      `https://wa.me/34641470876?text=${encodeURIComponent(texto)}`,
      '_blank'
    );

  }

}