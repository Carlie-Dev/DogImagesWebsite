
/**
 * 
 * @param {object} ev  
 * @returns {} - void
 *
 */
function addImage(ev){
    console.log(ev.target.id + ' was clicked');
    

    let myImage = document.createElement("img");
    myImage.src = "images/" + ev.target.src;
    myImage.alt = "This is a minecraft skin"

    document.querySelector('#mainImage').src = ev.target.src;

}

//These are the event listeners
document.getElementById('ellephoenix').addEventListener('click', addImage);

document.getElementById('mobster').addEventListener('click', addImage);

document.getElementById('ice_king').addEventListener('click', addImage);

document.getElementById('woman').addEventListener('click', addImage);




//Main image code from lesson
// document.getElementById('mainImage').addEventListener('click',function(ev){

//     console.log(ev.target.id);
//     console.log('Was clicked');

//     let myImage = document.createElement("img");
//     myImage.src = "images/" + ev.target.src;
//     myImage.alt = "This is the main image"

//     document.querySelector('#mainImage').src = ev.target.src;
    
// })

//Former Code
// function imagechanger(skininput){
//     document.querySelector('#mainImage').src = skininput.src;
//     //For console reference
//     console.log(skininput);
// } 