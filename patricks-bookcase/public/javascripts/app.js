const table = document.querySelector("#db");
const button = document.querySelector("#display")

let mainTitle = "Library of Patrick"

document.title = mainTitle + " : " + document.title;

window.addEventListener("load", getTable)
