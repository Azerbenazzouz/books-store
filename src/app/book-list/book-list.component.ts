import { Component } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

    Books = [
      {id:"0",title:"8 wch",auteur:"lewis hamilton",prix:44},
      {id:"1",title:"3 wch",auteur:"sebastian vettel",prix:43},
    ]

    editBook = ( book : any ) => {
      console.log(book);
    }

    deleteBook = ( book : any ) => {
      this.Books = this.Books.filter( b => b.id != book.id);
    }
}
