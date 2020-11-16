// const receipt = document.querySelector("#add-receipt");
// const receiptP = document.querySelector("#receipt");
// const reload = document.querySelector("#reload");

// const addButton = document.querySelector("#submit-book")
// const getTitle = document.querySelector("#book-title")
// const getAuthor = document.querySelector("#book-author")
// const getGenre = document.querySelector("#book-genre")
// const getSeries = document.querySelector("#book-series")
// const getLeant = document.querySelector("#book-leant")
// const readTrue = document.querySelector("#read-true")
// // const readFalse = document.querySelector("#read-false")

// let bookRead;

// async function submitBook(){
//     if(readTrue.checked){
//         bookRead = true;
        
//     } else {
//         bookRead = false;
//     }

//     if(getLeant.value){
//         leant = getLeant.value.toLowerCase();
//     } else {
//         leant = ""
//     }
    
//     let bookTitle = getTitle.value.toLowerCase()

//     bookTitle = bookTitle.charAt(0).toUpperCase() + bookTitle.slice(1);

//     let bookAuthor = getAuthor.value.toLowerCase()
//     let bookGenre = getGenre.value.toLowerCase()
//     let bookSeries = getSeries.value.toLowerCase()

//     console.log(`Book has been read: ${bookRead}, Title: ${bookTitle}, Author: ${bookAuthor}, Genre: ${bookGenre},Series: ${bookSeries}, Leant out: ${leant}`)

//     receipt.classList.remove("hidden");
//     receiptP.innerText = `${bookTitle} has been added to the database.`


// const res = await fetch(`/library`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({bookTitle, bookAuthor, bookGenre, bookSeries, bookRead, leant}),
//   });
// }

// addButton.addEventListener("click", submitBook)


// reload.addEventListener("click", () => {document.location.reload()});
