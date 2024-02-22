import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html.svg',
      alt: 'icone de conhecimento de HTML 5'
    },
    {
      src: 'assets/icons/knowledge/css.svg',
      alt: 'icone de conhecimento de CSS 3'
    },
    {
      src: 'assets/icons/knowledge/js.svg',
      alt: 'icone de conhecimento de java script'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'icone de conhecimento de angular'
    }
  ]);
}
