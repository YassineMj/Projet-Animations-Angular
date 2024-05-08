import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

}
document.addEventListener('click', (e: Event) => {
  const target = e.target as HTMLElement;
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle') as HTMLElement;

  if (target && target.classList.contains('mobile-nav-toggle')) {
    const navbar = document.querySelector('#navbar') as HTMLElement;
    navbar.classList.toggle('navbar-mobile');
    mobileNavToggle.classList.toggle('fa-list');
    mobileNavToggle.classList.toggle('fa-x');
  }
});
