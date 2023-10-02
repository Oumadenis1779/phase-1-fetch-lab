function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch ('https://anapioficeandfire.com/api/books')
  .then((response) => {
    if(!response.ok){
      throw new Error ('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    
    renderBooks(data);
  })
}


document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

function renderBooks(books){
  const main = document.querySelector('main');
  books.forEach(book =>{
    const h2 = document.createElement('h2');
    h2.innerHeight = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});