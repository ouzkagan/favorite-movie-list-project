/*jshint esversion:6*/
class Storage{

    static addFilmToStorage(newFilm){
        let films=this.getFilmsFromStorage();
    
        /* 
        [
            {title:"asdasd",director:"asdasd,url:"asdasd"}
            {title:"asdasd",director:"asdasd,url:"asdasd"}
        ]
        */
    
        films.push(newFilm);
        localStorage.setItem("films",JSON.stringify(films));
    
    
        
    }
    
    static getFilmsFromStorage(){
        let films;
    
        if(localStorage.getItem("films")==null){
            films=[];
        }else{
            films=JSON.parse(localStorage.getItem('films'));
        }
        
        return films;
    }
    
    static deleteFilmFromStorage(element){
        let filmTitle=element.parentNode.parentNode.childNodes[3].textContent;
    
        let films = this.getFilmsFromStorage();
    
        films.forEach(function(film,index){
            if(film.title===filmTitle){
                films.splice(index,1);
            }
        });
    
        localStorage.setItem("films",JSON.stringify(films));
    }
    static deleteAllFilmsFromStorage(){
        // let films=this.getFilmsFromStorage();
        // films=[];
    
        // localStorage.setItem("films",JSON.stringify(films));
        localStorage.removeItem("films");
    }
}