import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({ selector: 'app-colabora-fhq', standalone: true, imports: [RouterLink], templateUrl: './colabora-fhq.component.html', styleUrl: './colabora-fhq.component.css' })
export class ColaboraFhqComponent implements AfterViewInit {
  ngAfterViewInit() {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show-element'); obs.unobserve(e.target); } }), { threshold: 0.1 });
    document.querySelectorAll('.hidden-element').forEach(el => obs.observe(el));
  }
}
