import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { IProjects } from '../../interface/IProjects.interface';
import { DialogProjectComponent } from '../dialog/dialog-project/dialog-project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: '../../../../../assets/icons/idk.svg',
      alt: 'apenas um teste, ainda não há nada aqui...',
      title: 'Teste',
      width: '40px',
      height: '40px',
      description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>',
      links: [
        {
          name: 'Conheça o sitema',
          href: '',
        }
      ]
    },
    {
      src: '../../../../../assets/icons/idk.svg',
      alt: 'apenas um teste, ainda não há nada aqui...',
      title: 'Teste',
      width: '40px',
      height: '40px',
      description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>',
      links: [
        {
          name: 'Conheça o sitema',
          href: '',
        }
      ]
    },
    {
      src: '../../../../../assets/icons/idk.svg',
      alt: 'apenas um teste, ainda não há nada aqui...',
      title: 'Teste',
      width: '40px',
      height: '40px',
      description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>',
      links: [
        {
          name: 'Conheça o sitema',
          href: '',
        }
      ]
    },
  ]);

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectComponent, {
      data,
      panelClass: EDialogPanelClass.projects
    })
  }
}
