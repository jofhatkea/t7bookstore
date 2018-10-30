// global varaibales
//2. grab template
const template = document.querySelector("#bookTemplate").content;
const loader = document.querySelector(".hollowLoader")

//1. fetch content
function getBooks(){
  fetch("https://t7.kea-alt-del.dk/wp-json/wp/v2/book?_embed")
    .then(res => res.json())
    .then(showBooks)
}
function showBooks(bookList){
  hideLoader();
  bookList.forEach(showSingleBook)
}
function showSingleBook(book){
  console.log(book)
  //, make a copy of the template
  const copy = template.cloneNode(true);
  copy.querySelector("h1").textContent=book.title.rendered;
  copy.querySelector(".author span").textContent= book.acf.author;

  copy.querySelector(".body").innerHTML = book.content.rendered;
  //find the image
  if(book._embedded){
     copy.querySelector("img").src=book._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url;
  } else {
     copy.querySelector("img").remove()
  }


  copy.querySelector(".youtube").innerHTML=book.acf.youtube_video

  document.querySelector("main").appendChild(copy)
}

function showLoader(){
  loader.classList.remove("hidden")
}
function hideLoader(){
  loader.classList.add("hidden")
}

getBooks();
showLoader();



// populate

// show (append) it
