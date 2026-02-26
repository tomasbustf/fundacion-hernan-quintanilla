import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'fundacion-hernan-quintanilla';
  menuAbierto = false;

  ngAfterViewInit() {
    // Inicializar dropdowns de Bootstrap
    const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
    dropdownElementList.forEach((dropdownToggleEl) => {
      new bootstrap.Dropdown(dropdownToggleEl);
    });
  }

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  cerrarMenu() {
    this.menuAbierto = false;
  }

  closeDropdown() {
    const dropdownElement = document.querySelector('[data-bs-toggle="dropdown"]');
    if (dropdownElement) {
      const dropdown = bootstrap.Dropdown.getInstance(dropdownElement);
      if (dropdown) {
        dropdown.hide();
      }
    }
    this.cerrarMenu();
  }
}
