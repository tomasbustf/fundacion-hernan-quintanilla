import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})


export class ContactoComponent implements AfterViewInit {
  ngAfterViewInit() {
    const obs = new IntersectionObserver(entries =>
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show-element'); obs.unobserve(e.target); } }), { threshold: 0.1 });
    document.querySelectorAll('.hidden-element').forEach(el => obs.observe(el));
  }

  formData = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  };

  enviando = false;
  mensajeExito = false;
  mensajeError = false;

  async enviarMensaje(form: NgForm) {
    if (form.invalid) return;

    this.enviando = true;
    this.mensajeExito = false;
    this.mensajeError = false;

    try {
      await emailjs.send(
        'service_htgb7bp',   // Reemplaza con tu Service ID
        'template_2dmjx7b',  // Reemplaza con tu Template ID
        {
          from_name: this.formData.nombre,
          from_email: this.formData.email,
          subject: this.formData.asunto,
          message: this.formData.mensaje,
        }
      );

      this.mensajeExito = true;
      form.resetForm();

    } catch (error) {
      console.error('Error al enviar:', error);
      this.mensajeError = true;
    } finally {
      this.enviando = false;
    }
  }


}
