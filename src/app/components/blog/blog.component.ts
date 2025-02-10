import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  template: `
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold mb-8">{{ 'BLOG.TITLE' | translate }}</h1>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <mat-card *ngFor="let post of blogPosts" class="hover:shadow-lg transition-shadow duration-300">
          <img mat-card-image [src]="post.image" [alt]="post.title" class="h-48 w-full object-cover">
          <mat-card-content class="p-6">
            <h2 class="text-xl font-bold mb-2">{{post.title}}</h2>
            <p class="text-gray-600 mb-4">{{post.excerpt}}</p>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-500">{{post.date | date}}</span>
              <button mat-button color="primary">
                {{ 'BLOG.READ_MORE' | translate }}
                <mat-icon class="ml-2">arrow_forward</mat-icon>
              </button>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class BlogComponent {
  blogPosts = [
    {
      title: 'Getting Started with Angular',
      excerpt: 'Learn the basics of Angular and how to create your first application.',
      image: 'assets/images/blog/angular.jpg',
      date: new Date('2025-02-01')
    },
    {
      title: 'Mastering TypeScript',
      excerpt: 'Deep dive into TypeScript features and best practices.',
      image: 'assets/images/blog/typescript.jpg',
      date: new Date('2025-02-05')
    },
    {
      title: 'Web Development Trends 2025',
      excerpt: 'Explore the latest trends in web development.',
      image: 'assets/images/blog/trends.jpg',
      date: new Date('2025-02-08')
    }
  ];
}
