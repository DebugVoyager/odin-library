const myLibrary = [];

function Book(title, author, category, publishedYear, id) {
    this.title = title;
    this.author = author;
    this.category = category;
    this.publishedYear = publishedYear;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, category, publishedYear) {
    const newBook = new Book(title, author, category, publishedYear);
    myLibrary.push(newBook);
}