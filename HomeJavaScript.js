'use strict'
fetch("https://api.thecatapi.com/v1/images/search?format=json&limit=12")
    .then((response) => response.json())
    .then((data) => {  
        for (let i=0;i<12;i++) {
            let catImage = data[i].url;
            let catId = data[i].id;
            let gallery = document.querySelector(".gallery");
            let div = document.createElement("div");
            gallery.appendChild(div);
            div.classList.add("parent");
            let eimg = document.createElement("img");            
            let eh4 = document.createElement("h4");
            eh4.innerHTML = "ID: " + `${catId}`;           
            eimg.setAttribute('src', `${catImage}`);            
            
            div.appendChild(eimg);
            div.appendChild(eh4);
        }
    })
    .catch((e) => console.log(e));