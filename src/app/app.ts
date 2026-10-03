import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const phrases = [
  {
    title: 'Покоряй вершины',
  },
  {
    title: 'Радуйся новому дню',
  },
  {
    title: 'Нет ничего невозможного',
  },
  {
    title: 'Все идет по плану',
  },
  {
    title: 'Не жди чуда, а будь им!',
  },
]

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  public phrases = phrases;
  
  protected readonly title = signal('Pulse');
}
