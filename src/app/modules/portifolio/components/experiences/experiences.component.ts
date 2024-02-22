import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary:{
        strong: 'Experiência I',
        p: 'none | Jan 2024',
      },
      text: '<p>Lorem ipsum dolor sit amet. Aut dolorum laboriosam in unde rerum ut fuga libero rem esse tenetur qui sunt neque. Qui dolores ducimus qui quod magni ea voluptas cumque est sint illo vel praesentium reiciendis et voluptatem excepturi. Qui vero libero eos autem officia et corporis blanditiis aut quia molestiae hic quas nisi et suscipit perferendis et sequi nisi.<br><br>Qui corrupti veritatis sit sint expedita cum autem nihil et distinctio temporibus eum voluptas repellendus cum tempore distinctio. At dolorum ullam et corrupti quibusdam quo facere quas qui consequatur explicabo aut sint ipsum? Quo aliquam earum aut perferendis voluptatem qui quam enim aut quasi saepe. Ut quam eius et tempore quam in quasi perspiciatis sed voluptatibus amet eos libero accusantium est quidem atque 33 illo reprehenderit.</p>',
    },
    {
      summary:{
        strong: 'Experiência II',
        p: 'none | Jan 2024',
      },
      text: '<p>Lorem ipsum dolor sit amet. Aut dolorum laboriosam in unde rerum ut fuga libero rem esse tenetur qui sunt neque. Qui dolores ducimus qui quod magni ea voluptas cumque est sint illo vel praesentium reiciendis et voluptatem excepturi. Qui vero libero eos autem officia et corporis blanditiis aut quia molestiae hic quas nisi et suscipit perferendis et sequi nisi.<br><br>Qui corrupti veritatis sit sint expedita cum autem nihil et distinctio temporibus eum voluptas repellendus cum tempore distinctio. At dolorum ullam et corrupti quibusdam quo facere quas qui consequatur explicabo aut sint ipsum? Quo aliquam earum aut perferendis voluptatem qui quam enim aut quasi saepe. Ut quam eius et tempore quam in quasi perspiciatis sed voluptatibus amet eos libero accusantium est quidem atque 33 illo reprehenderit.</p>',
    },
    {
      summary:{
        strong: 'Experiência II',
        p: 'none | Jan 2024',
      },
      text: '<p>Lorem ipsum dolor sit amet. Aut dolorum laboriosam in unde rerum ut fuga libero rem esse tenetur qui sunt neque. Qui dolores ducimus qui quod magni ea voluptas cumque est sint illo vel praesentium reiciendis et voluptatem excepturi. Qui vero libero eos autem officia et corporis blanditiis aut quia molestiae hic quas nisi et suscipit perferendis et sequi nisi.<br><br>Qui corrupti veritatis sit sint expedita cum autem nihil et distinctio temporibus eum voluptas repellendus cum tempore distinctio. At dolorum ullam et corrupti quibusdam quo facere quas qui consequatur explicabo aut sint ipsum? Quo aliquam earum aut perferendis voluptatem qui quam enim aut quasi saepe. Ut quam eius et tempore quam in quasi perspiciatis sed voluptatibus amet eos libero accusantium est quidem atque 33 illo reprehenderit.</p>',
    },
  ]);
}
