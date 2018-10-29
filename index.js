// global varaibales
//2. grab template
const template = document.querySelector("#bookTemplate").content;

//1. fetch content
function getBooks(){
  fetch("https://t7.kea-alt-del.dk/wp-json/wp/v2/book")
    .then(res => res.json())
    .then(showBooks)
}
function showBooks(bookList){

  bookList.forEach(showSingleBook)
}
function showSingleBook(book){
  console.log(book.title.rendered)
  //, make a copy of the template
  const copy = template.cloneNode(true);
  copy.querySelector("h1").textContent=book.title.rendered;
  document.querySelector("main").appendChild(copy)
}

getBooks();




// populate

// show (append) it
