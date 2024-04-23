export class Books{
    constructor(bookName, bookISBN){
        this.bookName = bookName;
        this.bookISBN = bookISBN;
    }
    getBookName(){
        return this.bookName;
    }
    getBookISBN(){
        return this.bookISBN;
    }
}