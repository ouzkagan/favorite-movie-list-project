/*jshint esversion:6*/
const form = document.getElementById("film-form");

const titleElement=document.getElementById("title");
const directorElement=document.getElementById("director");
const urlElement=document.getElementById("url");

const cardBodyf=document.getElementsByClassName("card-body")[0];
const cardBodys=document.getElementsByClassName("card-body")[1];

const clearFilms=document.getElementById("clear-films");

///OBJe URETMEYGEREK KALMADI
//EVENTS

eventListeners();

function eventListeners(){

    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films=Storage.getFilmsFromStorage();
        UI.loadFilmsToUI(films);
    });
    cardBodys.addEventListener("click",deleteFilm);
    clearFilms.addEventListener("click",deleteAllFilms);
}
function addFilm(e){
    const title=titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;

    if(title===""||director===""||url===""){
       //hata
       UI.displayMessage("danger","Lütfen Boşlukları Doldurunuz");

    }else{
        const newFilm= new Film(title,director,url);

        UI.addFilmToUI(newFilm);//Arayüze Film Ekleme

        Storage.addFilmToStorage(newFilm);

        UI.displayMessage("success","Başarılı İşlem afferin");
    }
    UI.clearInputs(titleElement,directorElement,urlElement);

    e.preventDefault();
}

function deleteFilm(e){

    if(e.target.id=="delete-film") {
        UI.deleteFilmFromUI(e.target);

        Storage.deleteFilmFromStorage(e.target);
    }

    e.preventDefault();
}

function deleteAllFilms(){
    if(confirm("Emin misin mi ki ?")){
        UI.deleteAllFilmsFromUI();
        Storage.deleteAllFilmsFromStorage();
    }
}
