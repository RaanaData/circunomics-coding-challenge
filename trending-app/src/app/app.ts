import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReposList } from "./component/repos-list/repos-list";


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ReposList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('trending-app');
}
