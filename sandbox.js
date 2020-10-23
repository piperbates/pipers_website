//gh icon

let ghIcon = document.querySelector("#gh-icon");

function ghImageChange(){
    ghIcon.src = "images/gh2.png";
}

function ghImageChangeBack(){
    ghIcon.src = "images/gh.png";
}

ghIcon.addEventListener("mouseover", ghImageChange);
ghIcon.addEventListener("mouseout", ghImageChangeBack);



//twitter icon

let twIcon = document.querySelector("#tw-icon");

function twImageChange(){
    twIcon.src = "images/tw2.png";
}

function twImageChangeBack(){
    twIcon.src = "images/tw.png";
}

twIcon.addEventListener("mouseover", twImageChange);
twIcon.addEventListener("mouseout", twImageChangeBack);

//Insta icon



let igIcon = document.querySelector("#ig-icon");

function igimageChange(){
    igIcon.src = "images/ig2.jpg";
}

function igimageChangeBack(){
    igIcon.src = "images/ig.jpg";
}

igIcon.addEventListener("mouseover", igimageChange);
igIcon.addEventListener("mouseout", igimageChangeBack);