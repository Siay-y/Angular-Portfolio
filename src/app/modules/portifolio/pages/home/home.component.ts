import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ExperiencesComponent } from '../../components/experiences/experiences.component';
import { HeaderComponent } from '../../components/header/header.component';
import { KnowledgeComponent } from '../../components/knowledge/knowledge.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    KnowledgeComponent,
    ExperiencesComponent,
    ProjectsComponent,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
