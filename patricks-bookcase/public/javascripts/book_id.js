const idTitle = document.querySelector("#id-title");
const idAuthor = document.querySelector("#id-author");
const idGenre = document.querySelector("#id-genre");
const idSeries = document.querySelector("#id-series");
const idRead = document.querySelector("#id-read");
const idLeant = document.querySelector("#id-leant");

let url = document.location.href

id = url.charAt(url.length-1);

async function idBookGet(){
    let response = await fetch(`/library/${id}`);
    let data = await response.json();

    idTitle.innerText = data[0].title;
    idAuthor.innerText = `Author: ${data[0].author}`;
    idGenre.innerText = `Genre: ${data[0].genre}`;
    idSeries.innerText = `Series: ${data[0].series}`;
    idRead.innerText = `Read: ${data[0].read}`;
    idLeant.innerText= `Leant: ${data[0].leant}`
}



idBookGet()