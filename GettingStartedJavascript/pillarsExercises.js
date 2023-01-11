const GREAT = "great";
const BOOK_API = "https://some.url/api";

// Exercise 2: move add and print functions to Bookshelf class.
class Bookshelf {
    constructor(favoriteBooks) {
        this.favoriteBooks = favoriteBooks;
    }
    addFavoriteBook(book) {
        if (!book.toLowerCase().includes(GREAT)) {
            this.favoriteBooks.push(book)
        }
    }
    // #Exercise 1: make sure there's no type accidental type coercion
    printFavoriteBooks() {
        console.log("Favorite Book List")
        console.log("=================")
        for (let i = 0; i < this.favoriteBooks.length; i++){
            const stringifiedBook = String(this.favoriteBooks[i])
            console.log(`${i}: ${stringifiedBook}`)
        }
    }
}

function loadBooks(bookshelf) {
    fakeAjax(BOOK_API, function populateBookshelf(bookList) {
        for(let book of bookList) {
            bookshelf.addFavoriteBook(book)
        }
        bookshelf.printFavoriteBooks();
    })

}

function fakeAjax(url, cb) {
    console.log(`Fetching data from: ${url}`)
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	}, 1500);
}

const myShelf = new Bookshelf([]);

loadBooks(myShelf);