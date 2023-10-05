function addBook() {

    
    const book = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    const div = document.getElementById('books');
    const bookEntry = document.createElement('div');
    bookEntry.classList.add('book-entry'); 
    const bookelement = document.createElement('p');
    bookelement.textContent = `"${book}" by ${author}`;


    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';

    removeButton.addEventListener('click', function () {
        div.removeChild(bookEntry); 
    });

    bookEntry.appendChild(bookelement);
    bookEntry.appendChild(removeButton);

    div.appendChild(bookEntry);

    // Clear input fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
}
