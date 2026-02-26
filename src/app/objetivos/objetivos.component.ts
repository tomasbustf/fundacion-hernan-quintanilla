import { Component, AfterViewInit } from '@angular/core';
@Component({ selector: 'app-objetivos', standalone: true, imports: [], templateUrl: './objetivos.component.html', styleUrl: './objetivos.component.css' })
export class ObjetivosComponent implements AfterViewInit {
  ngAfterViewInit() {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show-element'); obs.unobserve(e.target); } }), { threshold: 0.1 });
    document.querySelectorAll('.hidden-element').forEach(el => obs.observe(el));
  }
}
