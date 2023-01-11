const favoriteBooks = [];
const GREAT = "great"

// define addFavoriteBook function
const addFavoriteBook = (book) => {
    if (!book.toLowerCase().includes(GREAT)) {
        favoriteBooks.push(book)
    }
}

// define printFavoriteBook function
const printFavoriteBooks = (bookList) => {
    console.log("Favorite Book List")
    console.log("=================")
    for (let i = 0; i < bookList.length; i++){
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