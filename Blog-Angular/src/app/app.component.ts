import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-blog';

  posts = [
    {
      title: 'Post1',
      content: 'Encore un bout de code pour le bien etre de la tradittion',
      loveIts: 24,
      created_at: 'Wed Oct 30 2018 16:33:22'
    },
    {
      title: 'Post2',
      content: 'Encore cette histoire qui casse la tete',
      loveIts: 0,
      created_at: 'Wed Oct 27 2018 16:33:22'
    },
    {
      title: 'Post3',
      content: 'Encore un bout de code pour le bien etre de la tradittion',
      loveIts: 12,
      created_at: 'Wed Oct 12 2018 16:33:22'
    },
    {
      title: 'Post4',
      content: 'Encore un bout de code pour le bien etre de la tradittion',
      loveIts: 10,
      created_at: 'Wed Oct 01 2018 16:33:22'
    }
  ];
}
