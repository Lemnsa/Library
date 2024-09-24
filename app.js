// book constructor

function Book( title, author, numberPage) {
    this.title = title;
    this.author = author;
    this.numberPage = numberPage;

    this.isRead = function () {
        return false;
    }
}


const myLibrary = [];

function addBookToLibrary() {

}

const openDialog = document.getElementById("btn");
const dialog = document.getElementById("book-info");
const confirmBtn = document.getElementById("confirmBtn");


const title = document.getElementById("title");
const author = document.getElementById("name");
const pageCount = document.getElementById("pages");
const isRead = document.querySelectorAll(".radios span");

// on and close dialog
openDialog.addEventListener("click", () => {
    dialog.showModal();
});


dialog.addEventListener("close", (e) => {
    if (dialog.returnValue === 'default') {
        return;
    }
    else {
        return dialog.returnValue;
    }
})

confirmBtn.addEventListener("click", (event) => { 
    event.preventDefault();
   const book = new Book(title.value, author.value, pageCount.value);
   myLibrary.push(book);
   //console.log(myLibrary);
   dialog.close(book);
});

