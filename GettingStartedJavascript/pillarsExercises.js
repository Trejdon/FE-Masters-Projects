const favoriteBooks = [];
const GREAT = "great"

// Three pillars: move add and print functions to Bookshelf class.
class Bookshelf {
    constructor(favoriteBooks) {
        this.favoriteBooks = favoriteBooks;
    }
    addFavoriteBook(book) {
        if (!book.toLowerCase().includes(GREAT)) {
            this.favoriteBooks.push(book)
        }
    }
    printFavoriteBooks(bookList) {
        console.log("Favorite Book List")
    console.log("=================")
    for (let i = 0; i < bookList.length; i++){
        const stringifiedBook = String(bookList[i])
        console.log(`${i}: ${stringifiedBook}`)
    }
    }
}

// define printFavoriteBook function
// #Three pillars: make sure there's no type accidental type coercion
const printFavoriteBooks = (bookList) => {
    console.log("Favorite Book List")
    console.log("=================")
    for (let i = 0; i < bookList.length; i++){
        const stringifiedBook = String(bookList[i])
        console.log(`${i}: ${stringifiedBook}`)
    }

}

addFavoriteBook("A Song of Ice and Fire")
addFavoriteBook("The Great Gatsby")
addFavoriteBook("Crime & Punishment")
addFavoriteBook("Great Expectations")
addFavoriteBook("You Don't Know JS")

// print out favorite books
printFavoriteBooks(favoriteBooks)