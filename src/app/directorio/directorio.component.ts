import { Component, AfterViewInit } from '@angular/core';
@Component({ selector: 'app-directorio', standalone: true, imports: [], templateUrl: './directorio.component.html', styleUrl: './directorio.component.css' })
export class DirectorioComponent implements AfterViewInit {
  ngAfterViewInit() {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show-element'); obs.unobserve(e.target); } }), { threshold: 0.1 });
    document.querySelectorAll('.hidden-element').forEach(el => obs.observe(el));
  }
}
