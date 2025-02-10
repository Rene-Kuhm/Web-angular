import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-tutorials',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule
  ],
  template: `
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold mb-8">{{ 'TUTORIALS.TITLE' | translate }}</h1>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <mat-card *ngFor="let tutorial of tutorials" class="hover:shadow-lg transition-shadow duration-300">
          <mat-card-content class="p-6">
            <div class="flex items-center mb-4">
              <mat-icon [class]="tutorial.iconColor" class="mr-3">{{tutorial.icon}}</mat-icon>
              <h2 class="text-xl font-bold">{{tutorial.title}}</h2>
            </div>
            <p class="text-gray-600 mb-4">{{tutorial.description}}</p>
            <div class="mb-4">
              <div class="flex justify-between text-sm mb-1">
                <span>{{ 'TUTORIALS.PROGRESS' | translate }}</span>
                <span>{{tutorial.progress}}%</span>
              </div>
              <mat-progress-bar mode="determinate" [value]="tutorial.progress"></mat-progress-bar>
            </div>
            <button mat-raised-button color="primary" class="w-full">
              {{ tutorial.progress === 0 ? ('TUTORIALS.START' | translate) : ('TUTORIALS.CONTINUE' | translate) }}
            </button>
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
export class TutorialsComponent {
  tutorials = [
    {
      title: 'Angular Fundamentals',
      description: 'Learn the core concepts of Angular framework.',
      icon: 'school',
      iconColor: 'text-primary',
      progress: 75
    },
    {
      title: 'TypeScript Basics',
      description: 'Master the essentials of TypeScript programming.',
      icon: 'code',
      iconColor: 'text-secondary',
      progress: 30
    },
    {
      title: 'Web Components',
      description: 'Create reusable web components using modern standards.',
      icon: 'widgets',
      iconColor: 'text-accent',
      progress: 0
    },
    {
      title: 'State Management',
      description: 'Learn how to manage application state effectively.',
      icon: 'account_tree',
      iconColor: 'text-primary',
      progress: 15
    },
    {
      title: 'Testing in Angular',
      description: 'Master unit testing and e2e testing in Angular.',
      icon: 'bug_report',
      iconColor: 'text-secondary',
      progress: 0
    },
    {
      title: 'Angular Performance',
      description: 'Optimize your Angular applications for better performance.',
      icon: 'speed',
      iconColor: 'text-accent',
      progress: 0
    }
  ];
}
