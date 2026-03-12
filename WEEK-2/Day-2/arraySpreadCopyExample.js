/*
Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise


*/

class Book{
    title;
    author;
    pages;
    isAvailable;

    constructor(title,author,pages,isAvailable){
        this.title=title
        this.author=author
        this.pages=pages
        this.isAvailable=isAvailable
    }

    borrow(){
      if(this.isAvailable==false){
        return " book is not available"
      }
      return true

      }

    returnBook(){
        if(this.isAvailable==true){
            return 'book is available'
        }
        return false
        

    }
    getInfo(){
        return `the  ${this.title}  by ${this.author} (${this.pages})`
    }

   isLongBook(){
    if (this.pages>300){
        return 'the book is long'
    }
    return false

    
   }
}

let b1=new Book('arya','rahul',200,true)
let b2= new Book('harry','potter',400,false)
let b3=new Book('1984','Nolan',270,true)
let b4=new Book()
console.log(b1.getInfo())
console.log(b1.borrow())
console.log(b1.isLongBook())