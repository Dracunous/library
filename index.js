const addBookBtn = document.querySelector("#Addbtn");
const formContainer = document.querySelector(".center");
const bookForm = document.querySelector(".book-form");

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#Author");
const bookInput = document.querySelector("#BOOk");
const pagesInput = document.querySelector("#PAGES");

const bookList = document.querySelector(".allign");
const submi=document.querySelector("#Submit")

const myLibrary=[];

function Book(Title,Author,BOOK,PAGES){
    this.Title=Title;
    this.Author=Author;
    this.BOOK=BOOK;
    this.PAGES=PAGES;
}

function addBookTOLibrary(){

    let Title=titleInput.value;
    let author=authorInput.value;
    let book=bookInput.value;
    let pages=pagesInput.value;
    let booki=new Book(Title,author,book,pages);
    if(myLibrary.some(item=>
        item.Author===author && item.Title===Title
    )){
        alert("This book already Exits")
    }
    else{
    myLibrary.push(booki);
    displayBook(booki);
    }
}

addBookBtn.addEventListener("click",()=>{
    formContainer.style.display="flex";
});


bookForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    addBookTOLibrary();

    bookForm.reset();
    formContainer.style.display="none";
    console.log(myLibrary);
})

function displayBook(booki) {
    const card = document.createElement("div");
    card.classList.add("book-container");

    const title = document.createElement("h3");
    title.textContent = booki.Title;

    const author = document.createElement("p");
    author.textContent = `Author: ${booki.Author}`;

    const type = document.createElement("p");
    type.textContent = `Type: ${booki.BOOK}`;

    const pages = document.createElement("p");
    pages.textContent = `Pages: ${booki.PAGES}`;

    card.append(title, author, type, pages);
    bookList.appendChild(card);
}

