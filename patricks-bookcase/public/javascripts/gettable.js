async function getTable (){
    let res = await fetch("/library")
    // console.log(res);
    const data = await res.json();
    for(i=0; i<data.length; i++){
        let tr = document.createElement("tr")
        let tdTitle = document.createElement("td")
        let tdAuthor = document.createElement("td")
        let tdGenre = document.createElement("td")
        let tdRead = document.createElement("td")
        let tdSeries = document.createElement("td")
        let tdLeant = document.createElement("td")
        let tdEdit = document.createElement("td")

        // Creates a link to the books by id page, with the id as the target. 
        let a = document.createElement("a")
        let link = document.createTextNode(data[i].title);
        a.appendChild(link);
        id = data[i].id;
        a.href = `/book/${id}`;
        tdTitle.appendChild(a);
        
        // Creates a "button" that deletes the book by id
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "X";
        deleteButton.classList.add
        ("table-button");
        let deleteId = data[i].id;
        
        deleteButton.addEventListener("click", () => {
            deleteBook(deleteId)
        })

        
        tdEdit.appendChild(deleteButton);
        

        
        
        
        tdAuthor.innerText = data[i].author;
        tdGenre.innerText = data[i].genre;
        tdRead.innerText = data[i].read;
        tdSeries.innerText = data[i].series;
        tdLeant.innerText = data[i].leant;

        tr.appendChild(tdTitle);
        tr.appendChild(tdAuthor);
        tr.appendChild(tdGenre);
        tr.appendChild(tdRead);
        tr.appendChild(tdSeries);
        tr.appendChild(tdLeant);
        tr.appendChild(tdEdit);
        table.appendChild(tr);
        
}
}