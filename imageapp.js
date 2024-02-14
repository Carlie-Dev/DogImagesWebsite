
/**
 * Author: Carlie Peters
 * @param {object} ev  
 * @returns {} - void
 *
 */
function UpdateLargeImage(ev){

    console.log(ev.target.id + ' was clicked');
    let mainDiv = document.getElementById('mainImageDisplay');
    mainDiv.innerHTML = "";

    let myImage = document.createElement("img");
    myImage.src = ev.target.src;
    myImage.alt = ev.target.alt;

    myImage.className = ev.target.getAttribute("data-class");

    

    //document.querySelector('#mainImage').src = ev.target.src;
    // document.querySelector('#mainImageDisplay').className = ev.target.getAttribute("data-class");

    mainDiv.appendChild(myImage);

}

//These are the event listeners
document.getElementById('ellephoenix').addEventListener('click', UpdateLargeImage);

document.getElementById('mobster').addEventListener('click', UpdateLargeImage);

document.getElementById('ice_king').addEventListener('click', function (ev){

    UpdateLargeImage(ev);
});

document.getElementById('woman').addEventListener('click', (ev)=>{
    UpdateLargeImage(ev);
    
});


/**
 * 
 * 
 */

///Main image
// document.getElementById('mainImage').addEventListener('click',function(ev){

//     console.log(ev.target.id);
//     console.log('Was clicked');

//     let myImage = document.createElement("img");
//     myImage.src = "images/" + "ellephoenixTransparent.png";
//     myImage.alt = "This is the main image"

//     document.querySelector('#mainImage').id = ;
    
// })

//Former Code
// function imagechanger(skininput){
//     document.querySelector('#mainImage').src = skininput.src;
//     //For console reference
//     console.log(skininput);
// } 