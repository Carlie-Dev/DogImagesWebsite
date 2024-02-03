/**
 * 
 * @param {object} skininput
 * @returns {} -void
 * @example
 * 
 */

function imagechanger(skininput){
    document.querySelector('#mainImage').src = skininput.src;
    //For console reference
    console.log(skininput);
}