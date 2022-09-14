var columnNumber = 0;

let button = document.getElementById("button");
let navbar = document.getElementsByClassName("navbar");
let lien = document.getElementsByClassName("lien");
let parentElement = document.getElementById("block_content");
let new_column = document.createElement("div");
new_column.hasAttribute("class");
parentElement.append(new_column);


function addColumn(parentID) {
    let parentElement = document.getElementById(parentID);
    columnNumber ++;

}


button.addEventListener('mouseover', (e)=> {
    e.target.style.backgroundColor= "orange";
    console.log(button);
});


button.addEventListener('mouseout', (e)=> {
    e.target.style.backgroundColor= "";

});

button.addEventListener('click', (e)=> {
    // récupération de l'élement parent
    let parentElement = document.getElementById("parent_id");
    // incrémentation du numéro de colonne
    columnNumber ++;
    // récupération du nom de la colonne dans columnName
    let columnName = 'column' + columnNumber.toString();
    let lienName = 'lien' + columnNumber.toString();

    //Création de l'élément
    let newColumnElement = document.createElement("div");
    let lien = document.createElement("a");
    newColumnElement.setAttribute('id', columnName);
    newColumnElement.classList.add("column");
    newColumnElement.classList.add("has-background-primary");
    newColumnElement.classList.add("has-text-centered");
    lien.setAttribute('id', lienName);
    lien.classList.add("lien");
    lien.innerText = "cliquez !"
    newColumnElement.append(lien);
    parentElement.append(newColumnElement)

    lien.addEventListener('click', (event)=> {
        deleteColumn(event, columnName);
    });


});

function deleteColumn(event, id) {

    console.log(event);

    let element = document.getElementById(id);
    element.parentElement.removeChild(element);
}

lien[0].addEventListener()
navbar[0].autofocus = true;
navbar[0].localName = "div";
navbar[0].ariaHidden = true;
console.log(navbar);