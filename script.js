function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

// prototype
Book.prototype.info = function() {
    let sentence = this.title + " by " + this.author + ", " + this.pages + " pages, ";
    if (this.haveRead) {
        sentence += "have read.";
    }
    else {
        sentence += "not read yet.";
    }
    return sentence;
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(book1.info());