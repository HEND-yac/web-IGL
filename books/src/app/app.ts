import { Component, signal } from '@angular/core';
import { BookContainerComponent } from './components/book-container/book-container.component';

@Component({
  selector: 'app-root',
  imports: [BookContainerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('books');
}
