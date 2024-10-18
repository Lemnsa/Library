// book constructor

// function Book( title, author, numberPage) {
//     this.title = title;
//     this.author = author;
//     this.numberPage = numberPage;

//     this.isRead = function () {
//         return false;
//     }
// }

class Book {
    #title = '';
    #author = '';
    #numberOfPage = 0;

    constructor(title, author, numberPage) {
        this.#author = author;
        this.#numberOfPage = numberPage;
        this.#title = title;
    }

    get title(){
        return this.#title;
    }

    get author(){
        return this.#author;
    }

    get pages(){
        return this.#numberOfPage;
    }

    set setTitle(newTitle) {
        this.#title = newTitle;
    }

    set setAuthor(newAuthor) {
        this.#author = newAuthor;
    }

    set setNumberOfPage(newnumberOfPage) {
        this.#numberOfPage = newnumberOfPage;
    }

    // methods
    Read() {
        return true;
    }


}

const myLibrary = [];
const myCards = [];

const openDialog = document.getElementById('btn');
const dialog = document.getElementById("book-info");
const confirmBtn = document.getElementById("confirmBtn");
const container = document.querySelector('.container');


const titleField = document.getElementById("title");
const authorField = document.getElementById("name");
const pageCount = document.getElementById("pages");
const isRead = document.querySelectorAll(".radios span input");

// on and close dialog
openDialog.addEventListener("click", () => {
    dialog.showModal();
});


dialog.addEventListener("close", (e) => {
    if (dialog.returnValue === 'default') {
        return;
    }
});

confirmBtn.addEventListener("click", (event) => { 
    event.preventDefault();
   const book = new Book(title.value, authorField.value, pageCount.value);
   const pages = book.pages;
   const author = book.author;
   const name = book.title;
   myLibrary.push(book);
   addBookToLibrary(author, pages, name);
   dialog.close();
});

console.log(myLibrary);

function addBookToLibrary(authorN, pagesC, titled) {
    const card = document.createElement("article");
    card.setAttribute("class", "card");
    const author = document.createElement("div");
    const authorName = document.createElement("h3");
    authorName.innerText = authorN;
    authorName.setAttribute("class", "author-name");
    author.innerText = 'Author:' +authorN;
    author.appendChild(authorName);

    const page = document.createElement("div");
    const pageNumber = document.createElement("p");
    //  pageNumber.innerText = book.numberPage;
    pageNumber.setAttribute("class", "page-number");
    page.innerText = 'Pages: '+pagesC+' ';
    page.appendChild(pageNumber);

    const title = document.createElement("div");
    title.setAttribute("class", "title-container");
    const titleH1 = document.createElement("h1");
    titleH1.setAttribute("class", "title");
    titleH1.setAttribute("style", "font-weight: 700; font-size: 32px;");
    const titleSpan = document.createElement("span");
    titleSpan.innerText = "Read";
    titleSpan.setAttribute("class", "status");
    titleH1.innerText = titled;
    changeStatus(titleSpan);


    title.appendChild(titleH1);
    title.appendChild(titleSpan);

    const btns = document.createElement("div");
    btns.setAttribute("class", "buttons");
    const btnRead = document.createElement("button");
    const btnRemove = document.createElement("button");

    btnRead.textContent = "Read";
    btnRemove.textContent = "Remove";

    btns.appendChild(btnRead);
    btns.appendChild(btnRemove);

    card.appendChild(author);
    card.appendChild(page);
    card.appendChild(title);
    card.appendChild(btns);
    container.appendChild(card);
    myCards.push(card);
    removeBook();
    changeStatusOnClick();
    }


    function changeStatus(status) {
        for(const radioBtn of isRead) {
            if(radioBtn.checked) {
                if(radioBtn.value === "read") {
                    status.setAttribute("id", "read");
                }
            }
        }
    }

function removeBook() {
    myCards.forEach(card => {
        let btns = card.querySelectorAll(".card .buttons button");
        const btnsArray = [...btns];
        // console.log(btnsArray);
        btnsArray[1].addEventListener("click", () => {
            // console.log(btnsArray[1]);
            container.removeChild(card);
            let index = myCards.indexOf(card);
            myLibrary.splice(index, 1);
        })
    }
    )
}

function changeStatusOnClick () {
    myCards.forEach(card => {
        let btns = card.querySelectorAll(".card .buttons button");
        let span = card.querySelector(".card div .status");
        const btnsArray = [...btns];
        // console.log(btnsArray);
        btnsArray[0].addEventListener("click", () => {
            span.classList.toggle("completed");
        })
    }
    )
}
