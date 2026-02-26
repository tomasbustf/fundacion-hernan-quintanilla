import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface ImagenGaleria {
  src: string;
  caption: string;
}

@Component({
  selector: 'app-hernan-quintanilla',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './hernan-quintanilla.component.html',
  styleUrl: './hernan-quintanilla.component.css'
})
export class HernanQuintanillaComponent implements AfterViewInit, OnDestroy {

  // Galería activa en lightbox
  galeriaActiva: ImagenGaleria[] = [];
  lightboxIdx = 0;
  lightboxVisible = false;

  readonly premios: ImagenGaleria[] = [
    { src: 'assets/img/premios/premio-01.jpg', caption: 'Concurso de Cuentos El Comercio, Feb. 1970' },
    { src: 'assets/img/premios/premio-02.jpg', caption: 'Encuentro Regional de Teatro Escolar, 1993' },
    { src: 'assets/img/premios/premio-03.jpg', caption: 'Premio Canto a la Reina' },
    { src: 'assets/img/premios/premio-04.jpg', caption: 'Boletín "Voces con la misma sangre" — Buenos Aires' },
    { src: 'assets/img/premios/premio-05.jpg', caption: 'Festival de Teatro Infantil Buenos Aires, 1992' },
    { src: 'assets/img/premios/premio-06.jpg', caption: 'Carta de invitación Buenos Aires, 1992' },
    { src: 'assets/img/premios/premio-07.jpg', caption: 'QUANTUM — 1er Lugar Poesía, 1989' },
    { src: 'assets/img/premios/premio-08.jpg', caption: '1er Lugar Concurso Nacional Teatro Juvenil, 1990' },
    { src: 'assets/img/premios/premio-09.jpg', caption: 'Diploma de Honor 5° Concurso Literario Poesía, 1984' },
    { src: 'assets/img/premios/premio-10.jpg', caption: 'El Comercio — Entrega de Premios, Feb. 1970' },
    { src: 'assets/img/premios/premio-11.jpg', caption: 'Concurso Teatro Infantil y Juvenil, Abril 1990' },
    { src: 'assets/img/premios/premio-12.jpg', caption: 'Premio Abridores de Alamedas, Nov. 2011' },
    { src: 'assets/img/premios/premio-13.jpg', caption: 'Estreno "El Encuentro" — Buenos Aires, 1992' },
    { src: 'assets/img/premios/premio-14.jpg', caption: 'Diploma 1er Concurso Poesía y Cuento Rengo, 1990' },
    { src: 'assets/img/premios/premio-15.jpg', caption: 'Diploma de Honor por labor literaria, Rengo 2011' },
    { src: 'assets/img/premios/premio-16.jpg', caption: 'Diploma de Honor — Municipalidad de San Miguel, 1979' },
    { src: 'assets/img/premios/premio-17.jpg', caption: '2° Lugar Poesía — Concurso Literario, 1983' },
    { src: 'assets/img/premios/premio-18.jpg', caption: 'Mención Honrosa Teatro, 1983' },
    { src: 'assets/img/premios/premio-19.jpg', caption: 'Diploma Dirección Teatral — Escuela F-459, 1980' },
    { src: 'assets/img/premios/premio-20.jpg', caption: 'Mención Honrosa Poesía, Oct. 1982' },
    { src: 'assets/img/premios/premio-21.jpg', caption: 'Diploma Primer Encuentro de Teatro Escolar, 1986' },
    { src: 'assets/img/premios/premio-22.jpg', caption: '1er Lugar Cuento — 2° Concurso Literario, 1981' },
    { src: 'assets/img/premios/premio-23.jpg', caption: 'Mención Especial Teatro, Dic. 1982' },
    { src: 'assets/img/premios/premio-24.jpg', caption: '2° Premio Poesía, Dic. 1982' },
    { src: 'assets/img/premios/premio-25.jpg', caption: '1er Lugar Teatro — 2° Concurso Literario, 1981' },
    { src: 'assets/img/premios/premio-26.jpg', caption: '1er Lugar Cuento — 2° Concurso, 1981' },
    { src: 'assets/img/premios/premio-27.jpg', caption: '1er Premio Teatro Infantil, Oct. 1980' },
    { src: 'assets/img/premios/premio-28.jpg', caption: 'Homenaje a Profesores — San Miguel, Oct. 1990' },
    { src: 'assets/img/premios/premio-29.jpg', caption: 'Jóvenes renguinos al Nacional de Teatro, 2000' },
    { src: 'assets/img/premios/premio-30.jpg', caption: 'La Tercera — Premio Literario Profesores, Dic. 1982' },
    { src: 'assets/img/premios/premio-31.jpg', caption: 'Concurso Obras de Teatro Niños y Jóvenes' },
    { src: 'assets/img/premios/premio-32.jpg', caption: 'Ganador "Chile con mis Ojos", 2006' },
    { src: 'assets/img/premios/premio-33.jpg', caption: 'Las Últimas Noticias — Autores premiados teatro escolar' },
    { src: 'assets/img/premios/premio-34.jpg', caption: 'La Verdad Rengo — Poeta renguino, Feb. 1970' },
  ];

  readonly trayectoria: ImagenGaleria[] = [
    { src: 'assets/img/trayectoria/trayectoria-1.jpg', caption: '11 Jornadas de Teatro Infantil — jurado' },
    { src: 'assets/img/trayectoria/trayectoria-2.jpg', caption: 'Festival Teatro Infantil — Sala Camilo Henríquez, 1992' },
    { src: 'assets/img/trayectoria/trayectoria-3.jpg', caption: 'Teatro Cariola — Sociedad de Autores, 1997' },
    { src: 'assets/img/trayectoria/trayectoria-4.jpg', caption: 'Caleidoscopio — "Ojo con Quintanilla", 2001' },
    { src: 'assets/img/trayectoria/trayectoria-5.jpg', caption: 'Entrevista Caleidoscopio — proceso creativo' },
    { src: 'assets/img/trayectoria/trayectoria-6.jpg', caption: 'Entrevista Caleidoscopio — continuación' },
    { src: 'assets/img/trayectoria/trayectoria-7.jpg', caption: 'Fortín Mapocho — Artycom, 1991' },
    { src: 'assets/img/trayectoria/trayectoria-8.jpg', caption: 'Somos Teatro — Regional de O\'Higgins' },
    { src: 'assets/img/trayectoria/trayectoria-9.jpg', caption: 'Publidea — "La Realidad se Construye", 2010' },
    { src: 'assets/img/trayectoria/trayectoria-10.jpg', caption: 'La Hora — Lautaro / Isidora Aguirre, 2000' },
    { src: 'assets/img/trayectoria/trayectoria-11.jpg', caption: 'Estreno teatral en Rengo — Instituto Cultural, 1975' },
    { src: 'assets/img/trayectoria/trayectoria-12.jpg', caption: 'El Renguino — Fiestas Primaverales, 1969' },
    { src: 'assets/img/trayectoria/trayectoria-13.jpg', caption: 'Semana Malloina — Poeta renguino, 1970' },
    { src: 'assets/img/trayectoria/trayectoria-14.jpg', caption: 'Perfil Humano — "El Encuentro" Buenos Aires, 1992' },
    { src: 'assets/img/trayectoria/trayectoria-15.jpg', caption: 'Corporación Cultural de Rengo — conferencia, 2011' },
    { src: 'assets/img/trayectoria/trayectoria-16.jpg', caption: 'Festival Teatro Infantil, 1992' },
    { src: 'assets/img/trayectoria/trayectoria-17.jpg', caption: 'Facetas Enero 1993 — Festival de teatro de niños' },
    { src: 'assets/img/trayectoria/trayectoria-18.jpg', caption: 'Estreno teatral profesores San Miguel, Dic. 1987' },
    { src: 'assets/img/trayectoria/trayectoria-19.jpg', caption: 'Destacada participación Festival Teatro Escolar, Nov. 1988' },
    { src: 'assets/img/trayectoria/trayectoria-20.jpg', caption: 'Las Últimas Noticias — estrena "El Otro País", 1997' },
    { src: 'assets/img/trayectoria/trayectoria-21.jpg', caption: 'La Nación — Teatro Escolar San Miguel, Oct. 1986' },
    { src: 'assets/img/trayectoria/trayectoria-22.jpg', caption: 'Cultura Guía N°10 — Oct./Nov. 1989' },
    { src: 'assets/img/trayectoria/trayectoria-23.jpg', caption: 'El Vecino PAC — Escuela Básica Poetas de Chile, 2010' },
    { src: 'assets/img/trayectoria/trayectoria-24.jpg', caption: 'El Mercurio — Chile necesita Ley de Teatro, 1995' },
    { src: 'assets/img/trayectoria/trayectoria-25.jpg', caption: '"Historias de Fútbol" — Andrés Wood, 1997' },
    { src: 'assets/img/trayectoria/trayectoria-26.jpg', caption: 'La Tercera — Lautaro / Marichiweu, 2000' },
    { src: 'assets/img/trayectoria/trayectoria-27.jpg', caption: 'La Poesía en Rengo — Canto a la Reina' },
    { src: 'assets/img/trayectoria/trayectoria-28.jpg', caption: 'El Miguelino — Teatro del Magisterio, Ene. 1988' },
    { src: 'assets/img/trayectoria/trayectoria-29.jpg', caption: 'Cámara de Diputados — Homenaje a Rengo, Sep. 1990' },
    { src: 'assets/img/trayectoria/trayectoria-30.jpg', caption: 'El Renguino — Un Poeta Renguino, Jul. 1974' },
    { src: 'assets/img/trayectoria/trayectoria-31.jpg', caption: 'La Poesía en Rengo — Canto a la Reina (texto)' },
  ];

  readonly obras = [
    { titulo: 'Mari Mari, Cacique Puma', categoria: 'Teatro Infantil', nota: 'Inauguró temporada 1990 del Teatro Nacional' },
    { titulo: 'El Encuentro', categoria: 'Teatro Infantil', nota: 'Seleccionado evento iberoamericano Buenos Aires 1992' },
    { titulo: 'Quien fuera yo', categoria: 'Teatro Escolar', nota: '1er Lugar Encuentro Regional Pichilemu 1993' },
    { titulo: 'ConCervantes del Medioevo', categoria: 'Teatro Escolar', nota: 'Mejor Montaje Escolar Nacional 2000' },
    { titulo: 'La épica del Nano y la Katty', categoria: 'Teatro Municipal', nota: 'Compañía Municipal Rengo' },
    { titulo: 'El fajo', categoria: 'Teatro Municipal', nota: 'Compañía Municipal Rengo' },
    { titulo: 'La leyenda de Rengo y las Nieves', categoria: 'Patrimonio Local', nota: 'Historia y patrimonio de Rengo' },
    { titulo: 'De vinos y amor ardiente', categoria: 'Patrimonio Local', nota: 'Historia y patrimonio de Rengo' },
    { titulo: 'Los domingos del Domingo', categoria: 'Patrimonio Local', nota: 'Historia y patrimonio de Rengo' },
    { titulo: 'La Fuente de las Palomas', categoria: 'Patrimonio Local', nota: 'Representada en 2018' },
    { titulo: 'La Cantata a Rengo', categoria: 'Cantata', nota: 'Reversionada en 2018 y 2021' },
    { titulo: 'Primera Cantata a San Miguel', categoria: 'Cantata', nota: 'Estreno 1979, con Orfeón de Carabineros' },
    { titulo: 'El cornudo, apaleado y contento', categoria: 'Teatro Adultos', nota: 'Colectivo Uróboros, gira 2017-2019' },
    { titulo: 'El Otro País', categoria: 'Teatro Adultos', nota: 'Estrenada en 1997' },
    { titulo: 'Lautaro', categoria: 'Teatro Adultos', nota: 'Actuación con Andrés Pavez' },
  ];

  // Navegación por secciones
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset para el navbar
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  // Lightbox
  abrirLightbox(galeria: ImagenGaleria[], idx: number) {
    this.galeriaActiva = galeria;
    this.lightboxIdx = idx;
    this.lightboxVisible = true;
    document.body.style.overflow = 'hidden';
  }
  cerrarLightbox() {
    this.lightboxVisible = false;
    document.body.style.overflow = '';
  }
  navLightbox(dir: number) {
    this.lightboxIdx = (this.lightboxIdx + dir + this.galeriaActiva.length) % this.galeriaActiva.length;
  }
  onKeyDown = (e: KeyboardEvent) => {
    if (!this.lightboxVisible) return;
    if (e.key === 'Escape') this.cerrarLightbox();
    if (e.key === 'ArrowRight') this.navLightbox(1);
    if (e.key === 'ArrowLeft') this.navLightbox(-1);
  };

  ngAfterViewInit(): void {
    document.addEventListener('keydown', this.onKeyDown);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('show-element'); observer.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.hidden-element').forEach(el => observer.observe(el));
  }
  ngOnDestroy(): void {
    document.removeEventListener('keydown', this.onKeyDown);
    document.body.style.overflow = '';
  }
}
