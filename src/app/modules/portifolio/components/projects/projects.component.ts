import { Component, signal } from '@angular/core';

import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/teste.jpg',
      alt: 'apenas um teste, ainda não há nada aqui...',
      title: 'Teste',
      width: '110px',
      height: '100px',
      description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>',
      links: [
        {
          name: 'Conheça o sitema',
          href: '',
        }
      ]
    }
  ])
}
