import { Component, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-fundacion-hernan-quintanilla',
  standalone: true,
  imports: [],
  templateUrl: './fundacion-hernan-quintanilla.component.html',
  styleUrl: './fundacion-hernan-quintanilla.component.css'
})
export class FundacionHernanQuintanillaComponent implements AfterViewInit {
  ngAfterViewInit() {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show-element'); obs.unobserve(e.target); } }), { threshold: 0.1 });
    document.querySelectorAll('.hidden-element').forEach(el => obs.observe(el));
  }
}
