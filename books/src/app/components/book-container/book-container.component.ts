import { Component } from '@angular/core';
import { Book, BOOK_CATEGORIES } from '../../models/book.model';
import { BookFormComponent } from '../book-form/book-form.component';
import { BookListComponent } from '../book-list/book-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-container',
  standalone: true,
  imports: [CommonModule, BookFormComponent, BookListComponent],
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.css']
})
export class BookContainerComponent {
  books: Book[] = [
    {
      id: 1,
      title: "Le Petit Prince",
      author: "Antoine de Saint-Exupéry",
      publisherEmail: "contact@gallimard.fr",
      publisherPhone: "12345678",
      releaseDate: "1943-04-06",
      category: "Roman",
      isAvailable: true,
      stock: 15
    },
    {
      id: 2,
      title: "Une brève histoire du temps",
      author: "Stephen Hawking",
      publisherEmail: "info@bantam.com",
      publisherPhone: "87654321",
      releaseDate: "1988-03-01",
      category: "Science",
      isAvailable: true,
      stock: 8
    },
    {
      id: 3,
      title: "L'Art de la guerre",
      author: "Sun Tzu",
      publisherEmail: "contact@flammarion.fr",
      publisherPhone: "11223344",
      releaseDate: "2005-01-15",
      category: "Histoire",
      isAvailable: false,
      stock: 0
    }
  ];

  categories = BOOK_CATEGORIES;
  nextId = 4;

  // Propriété simple pour savoir si on est en mode édition
  get isEditing(): boolean {
    return this.bookToEdit !== null;
  }

  // Variables simples
  bookToEdit: Book | null = null;
  filteredBooks: Book[] = [...this.books];

  constructor() {
    this.filteredBooks = this.books;
  }

  // Méthode simple pour sauvegarder un livre
  onBookSaved(book: Book): void {
    if (this.bookToEdit) {
      // Modification
      const index = this.books.findIndex(b => b.id === this.bookToEdit!.id);
      this.books[index] = book;
      this.bookToEdit = null;
    } else {
      // Ajout
      book.id = this.nextId++;
      this.books.push(book);
    }
    this.updateList();
  }

  // Méthode simple pour éditer
  onEditBook(book: Book): void {
    this.bookToEdit = book;
  }

  // Méthode simple pour supprimer
  onDeleteBook(id: number): void {
    this.books = this.books.filter(book => book.id !== id);
    this.updateList();
  }

  // Méthode simple pour rechercher
  onSearch(searchText: string): void {
    if (searchText.trim() === '') {
      this.filteredBooks = this.books;
    } else {
      this.filteredBooks = this.books.filter(book => 
        book.title.toLowerCase().includes(searchText.toLowerCase()) ||
        book.author.toLowerCase().includes(searchText.toLowerCase())
      );
    }
  }

  // Méthode simple pour mettre à jour la liste
  private updateList(): void {
    this.filteredBooks = this.books;
  }

  get totalBooks(): number {
    return this.books.length;
  }

  get availableBooks(): number {
    return this.books.filter(book => book.isAvailable).length;
  }
}