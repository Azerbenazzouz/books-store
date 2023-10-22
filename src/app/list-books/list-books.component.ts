import { Component } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent {
  serch = "";
  btn = 1;
  book : Book = new Book(0, "", "", 0);
  books : Book[] = [
    new Book(1, "L'homme qui voulait être heureux", "Laurent Gounelle", 15),
    new Book(2, "Le jour où j'ai appris à vivre", "Laurent Gounelle", 15),
    new Book(3, "Les dieux voyagent toujours incognito", "Laurent Gounelle", 15),
    new Book(4, "Le philosophe qui n'était pas sage", "Laurent Gounelle", 15),
    new Book(5, "Le meilleur de soi", "Guy Corneau", 15)
  ];
  
  newBook? : Book[] = this.books;
  
  setBtn(btn : number){
    this.btn = btn;
    if(this.btn == 1){
      this.book = new Book(this.genererId(), "", "", 0);
    }
  }
  constructor() { 
    
  }
  
  ngOnInit(): void {
    
  }
  genererId(): number {
    if(this.books.length == this.books[this.books.length - 1].id){
      return this.books.length + 1;
    }else{
      return this.books[this.books.length - 1].id + 1;
    }
  }
  ajoutBook() {
    this.books.push(this.book);
    this.book = new Book(this.genererId(), "", "", 0);
  }

  supprimerBook(id : number){
    this.books.forEach((book, index) => {
      if(book.id == id){
        this.books.splice(index, 1);
      }
    }
    );
  }
  
  setBookInfo(id : number){
    this.books.forEach((Book, index) => {
      if(Book.id == id){
        this.book = Book;
      }
    }
    );
  }

  changeBook(id : number){
    this.books.forEach((book, index) => {
      if(book.id == id){
        this.book = book;
      }
    }
    );
  }
  
  filterBook(){ 
    return this.books.filter(
      (book) => book.title.includes(this.serch)
    )
  }

  rechercherBookClick(){
    if(this.serch != ""){
      this.newBook = this.books.filter(
        (book) => book.title.includes(this.serch)
      )
    }else{
      this.newBook = this.books;
    }
  }


}
