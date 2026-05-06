import { Component, OnInit, signal } from '@angular/core';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  imports: [Menubar],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  items = signal<MenuItem[]>([]);

  ngOnInit(): void {
    this.items.set([
      { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
      { label: 'Products', icon: 'pi pi-box', routerLink: '/products' },
      { label: 'Profile', icon: 'pi pi-user', routerLink: '/profile' },
    ]);
  }
}
