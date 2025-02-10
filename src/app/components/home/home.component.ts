import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    TranslateModule
  ]
})
export class HomeComponent {
  technologies = [
    { name: 'TECHNOLOGIES.ITEMS.ANGULAR', icon: 'code' },
    { name: 'TECHNOLOGIES.ITEMS.REACT', icon: 'web' },
    { name: 'TECHNOLOGIES.ITEMS.VUE', icon: 'widgets' },
    { name: 'TECHNOLOGIES.ITEMS.NODEJS', icon: 'dns' },
    { name: 'TECHNOLOGIES.ITEMS.PYTHON', icon: 'code' },
    { name: 'TECHNOLOGIES.ITEMS.TYPESCRIPT', icon: 'language' }
  ];
}
