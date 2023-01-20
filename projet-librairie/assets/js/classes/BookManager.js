class BookManager {
    #books;

    constructor(books) {
        this.#books = [];
    }

    get books() {
        return this.#books;
    }

    set books() {
        this.#books = books;
    }

    findAllBooks();
    findBooksById(id);
    findBooksByTitle(title);
    findBooksByAuthor(author);
    findBooksByPublicationsYear(year);
    createBook(book);
    deleteBook(bookId);
    editBook(book);
    save(){

        let stringBooks = JSON.stringify(this.#books);
        sessionStorage.setItem("thisBooks", thisBooks);

    };
    load() {

        let loadBooks = [];
        let  parseBooks = JSON.parse(sessionStorage.getItem("thisBooks"));
        for (let i = 0; i < parseBooks.length; i++) {
        let parseData = JSON.parse(parseBooks[i]);
        let newBook = new Book(parseData.id, parseData.title, parseData.author, parseData.publicationDate, parseData.totalPages, parseData.excerpt, parseData.coverImage);
        loadBooks.push(newBook);
    }
    };
}