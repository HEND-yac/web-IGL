import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  @Input() books: Book[] = [];
  @Output() editBook = new EventEmitter<Book>();  // Changé de bookEdit à editBook
  @Output() deleteBook = new EventEmitter<number>();  // Changé de bookDelete à deleteBook

  onEdit(book: Book): void {
    this.editBook.emit(book);
  }

  onDelete(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce livre ?')) {
      this.deleteBook.emit(id);
    }
  }

  getAvailabilityText(isAvailable: boolean): string {
    return isAvailable ? 'Disponible' : 'Indisponible';
  }

  getAvailabilityClass(isAvailable: boolean): string {
    return isAvailable ? 'available' : 'unavailable';
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}