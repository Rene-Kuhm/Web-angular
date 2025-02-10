import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  template: `
    <mat-toolbar color="primary" class="px-4">
      <span class="flex-1">WebDev Hub</span>
      <button mat-icon-button [matMenuTriggerFor]="languageMenu" aria-label="Language selector">
        <mat-icon>language</mat-icon>
      </button>
      <mat-menu #languageMenu="matMenu">
        <button mat-menu-item (click)="switchLanguage('en')">
          <span>English</span>
        </button>
        <button mat-menu-item (click)="switchLanguage('es')">
          <span>Español</span>
        </button>
      </mat-menu>
    </mat-toolbar>
    
    <router-outlet></router-outlet>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
    }
    
    mat-toolbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
    }
    
    router-outlet + * {
      margin-top: 64px;
    }
  `]
})
export class AppComponent implements OnInit {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use(localStorage.getItem('language') || 'en');
  }

  ngOnInit() {
    // Inicializar el idioma desde localStorage si existe
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      this.translate.use(savedLang);
    }
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }
}
