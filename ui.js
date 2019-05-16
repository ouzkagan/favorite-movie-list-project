/*jshint esversion:6*/
class UI{
    
    static addFilmToUI(newFilm){
        //console.log(newFilm.title);
        /*
        <tr>
        <td><img src="" class="img-fluid img-thumbnail"></td>
        <td></td>
        <td></td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
        */
    
        const filmList=document.getElementById("films");
        
        filmList.innerHTML+=
        `
            <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr>
        `;
        console.log(films);
    };
    static clearInputs(el1,el2,el3){
        el1.value="";
        el2.value="";
        el3.value="";
    };
    
    static displayMessage(type,message){
        /*
        <div class="alert alert-success" role="alert">
        This is a success alert—check it out!
        </div>
        */
       const bilgi = document.createElement("div");
    
       bilgi.className=`alert alert-${type}`;
       bilgi.innerHTML=message;
    
       cardBodyf.appendChild(bilgi);
      
       setTimeout(function(){
        bilgi.remove();
       }, 1000);
    
    }
    static loadFilmsToUI(films){
        const filmList=document.getElementById("films");
    
        films.forEach(function(film){
            filmList.innerHTML+=`
            <tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr>
            `;
        });
    
    }
    static deleteFilmFromUI(element){
        element.parentNode.parentNode.remove();
    }
    static deleteAllFilmsFromUI(){
        const filmList=document.getElementById("films");
    
        // filmList.innerHTML="";
    
        while(filmList.firstElementChild !== null){
            filmList.firstElementChild.remove();
        }
    }
}


// function UI(){

// }
// UI.prototype.addFilmToUI=function(newFilm){
//     //console.log(newFilm.title);
//     /*
//     <tr>
//     <td><img src="" class="img-fluid img-thumbnail"></td>
//     <td></td>
//     <td></td>
//     <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
//     </tr>
//     */

//     const filmList=document.getElementById("films");
    
//     filmList.innerHTML+=
//     `
//         <tr>
//         <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
//         <td>${newFilm.title}</td>
//         <td>${newFilm.director}</td>
//         <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
//         </tr>
//     `;
//     console.log(films);
// };
// UI.prototype.clearInputs=function(el1,el2,el3){
//     el1.value="";
//     el2.value="";
//     el3.value="";
// };

// UI.prototype.displayMessage=function(type,message){
//     /*
//     <div class="alert alert-success" role="alert">
//     This is a success alert—check it out!
//     </div>
//     */
//    const bilgi = document.createElement("div");

//    bilgi.className=`alert alert-${type}`;
//    bilgi.innerHTML=message;

//    cardBodyf.appendChild(bilgi);
  
//    setTimeout(function(){
//     bilgi.remove();
//    }, 1000);

// }
// UI.prototype.loadFilmsToUI=function(films){
//     const filmList=document.getElementById("films");

//     films.forEach(function(film){
//         filmList.innerHTML+=`
//         <tr>
//         <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
//         <td>${film.title}</td>
//         <td>${film.director}</td>
//         <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
//         </tr>
//         `;
//     });

// }
// UI.prototype.deleteFilmFromUI=function(element){
//     element.parentNode.parentNode.remove();
// }
// UI.prototype.deleteAllFilmsFromUI=function(){
//     const filmList=document.getElementById("films");

//     // filmList.innerHTML="";

//     while(filmList.firstElementChild !== null){
//         filmList.firstElementChild.remove();
//     }
// }
