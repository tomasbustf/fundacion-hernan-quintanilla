import { Component, AfterViewInit } from '@angular/core';
@Component({ selector: 'app-contacto', standalone: true, imports: [], templateUrl: './contacto.component.html', styleUrl: './contacto.component.css' })
export class ContactoComponent implements AfterViewInit {
  ngAfterViewInit() {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show-element'); obs.unobserve(e.target); } }), { threshold: 0.1 });
    document.querySelectorAll('.hidden-element').forEach(el => obs.observe(el));
  }
}
