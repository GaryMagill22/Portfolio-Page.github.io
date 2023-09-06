function setNewImg() {
    document.getElementById("garyImg").src = "./Gary_Frankie2.png"
}

function setOldImg() {
    document.getElementById("garyImg").src = "./Gary Profile Page Pic.png"
}


ScrollReveal({
    reset: true,
    distance: '100px', 
    duration: 1000, 
    delay: 400
}); 

ScrollReveal().reveal('.card-container1', { delay: 500, origin: 'right'});

ScrollReveal().reveal('.card-container2', { delay: 600, origin: 'left'});

ScrollReveal().reveal('#skills', { delay: 700, origin: 'right'});
