import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [
    RouterModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule, 
    CommonModule,
    MatSlideToggleModule
  ]
})
export class NavigationComponent {
  private themeService = inject(ThemeService);
  isDarkMode = this.themeService.isDarkMode();

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
