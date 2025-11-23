import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Book, BookCategory } from '../../models/book.model';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnChanges {
  @Input() categories: readonly BookCategory[] = [];
  @Input() bookToEdit: Book | null = null;  // Changé de editingBook à bookToEdit
  @Output() bookSaved = new EventEmitter<Book>();  // Changé de bookSubmitted à bookSaved

  book: Partial<Book> = {
    title: '',
    author: '',
    publisherEmail: '',
    publisherPhone: '',
    releaseDate: '',
    category: '',
    isAvailable: true,
    stock: undefined
  };

  ngOnChanges(): void {
    if (this.bookToEdit) {
      this.book = { ...this.bookToEdit };
    } else {
      this.resetForm();
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid && this.isValidBook(this.book)) {
      // Validation supplémentaire : titre ne doit pas être composé uniquement de chiffres
      if (this.isTitleOnlyNumbers(this.book.title!)) {
        return;
      }

      this.bookSaved.emit(this.book as Book);
      this.resetForm();
      form.resetForm();
    }
  }

  resetForm(): void {
    this.book = {
      title: '',
      author: '',
      publisherEmail: '',
      publisherPhone: '',
      releaseDate: '',
      category: '',
      isAvailable: true,
      stock: undefined
    };
  }

  private isValidBook(book: Partial<Book>): book is Book {
    return !!(
      book.title &&
      book.author &&
      book.publisherEmail &&
      book.releaseDate &&
      book.category
    );
  }

  isTitleOnlyNumbers(title: string): boolean {
    return /^\d+$/.test(title.trim());
  }

  isFieldInvalid(field: any): boolean {
    return field && field.invalid && field.dirty;
  }

  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  getMinDate(): string {
    return '1900-01-01';
  }

  getMaxDate(): string {
    return new Date().toISOString().split('T')[0];
  }

  get isEditMode(): boolean {
    return !!this.bookToEdit;
  }
}