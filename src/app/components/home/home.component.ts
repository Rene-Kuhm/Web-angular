import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ]
})
export class HomeComponent {
  technologies = [
    { name: 'Angular', icon: 'code' },
    { name: 'React', icon: 'web' },
    { name: 'Vue', icon: 'widgets' },
    { name: 'Node.js', icon: 'dns' },
    { name: 'Python', icon: 'code' },
    { name: 'TypeScript', icon: 'language' }
  ];
}
