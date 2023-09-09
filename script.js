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

ScrollReveal().reveal('.card-container1', { delay: 300, origin: 'right' });

ScrollReveal().reveal('.card-container2', { delay: 300, origin: 'left' });

ScrollReveal().reveal('#skills', { delay: 300, origin: 'right' });


// modal function to open and close  //
$(document).ready(function () {
    // Modal elements
    var modal = document.getElementById('modal');
    var span = document.getElementsByClassName("close-btn")[0];

    // Open the modal
    $(".allSquareLogo, .foreBearLogo").click(function () {
        var projectDescription = "";
        if ($(this).hasClass('allSquareLogo')) {
            projectDescription = "MERN based application meticulously crafted to redefine golf's post-round dynamics. The app's central ethos is simplicity and fairness: upon game completion, winners are instantly recognized, ensuring that camaraderie thrives, while disputes take a back seat. A top priority was placed on User Experience (UX), leading to the development of a single-page application using React.js. Its component-based architecture guarantees a streamlined and efficient user interface.";
        } else if ($(this).hasClass('foreBearLogo')) {
            projectDescription = "ForeBear is a clothing and lifestyle brand inspired by golf. We transform golf wear classics with a modern streetwear twist, combining comfort, design and personal style so you look and feel great wherever life takes you.";
        }
        $('#modal-description').text(projectDescription);
        modal.style.display = "block";
    });

    // Close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // Close the modal if user clicks outside
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

$(document).ready(function () {
    // Get the modal
    var modal = document.getElementById('contactModal');

    // Get the button that opens the modal
    var btn = document.querySelector('contact-btn');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close-btn")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

$(document).ready(function () {
    // Open the contact modal
    $('#contactBtn').click(function (e) {
        e.preventDefault();
        $('#contactModal').show();
    });

    // Close the contact modal
    $('.contact-close-btn').click(function () {
        $('#contactModal').hide();
    });
});
