import { Component } from '@angular/core';
import { Author, authors } from '../authors.model';

@Component({
  selector: 'author-list',
  template: `
    <author-details
      *ngFor="let author of authors"
      [author]="author"
      (select)="onSelected($event)"
      (delete)="onDelete($event)"
    ></author-details>
    <br />
    <div>
      Currebt selected author : {{ currentAuthor.firstName }}
      {{ currentAuthor.lastName }}
    </div>
  `,
})
export class AuthorListComponent {
  authors = authors;
  currentAuthor = authors[2];

  onSelected(selectedAuthor: Author) {
    this.currentAuthor = selectedAuthor;
  }

  onDelete(id: number) {
    this.authors = this.authors.filter((author) => {
      return author.id !== id;
    });
    if (this.currentAuthor.id === id) {
      this.currentAuthor = this.authors[0];
    }
  }
}
