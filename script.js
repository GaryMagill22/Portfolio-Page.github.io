function setNewImg() {
    $('#garyImg').attr('src', './Gary_Frankie2.png');
}

function setOldImg() {
    $('#garyImg').attr('src', './Gary Profile Page Pic.png');
}

$(document).ready(function () {
    ScrollReveal({
        reset: true,
        distance: '100px',
        duration: 1000,
        delay: 400
    });

    ScrollReveal().reveal('.card-container1', { delay: 300, origin: 'right' });
    ScrollReveal().reveal('.card-container2', { delay: 300, origin: 'left' });
    ScrollReveal().reveal('#skills', { delay: 300, origin: 'right' });

    // Project modal handling
    $(".allSquareLogo, .foreBearLogo").click(function () {
        var projectDescription = "";
        var cardTitle = "";
        if ($(this).hasClass('allSquareLogo')) {
            cardTitle = "All Square";
            projectDescription = "MERN based application meticulously crafted to redefine golf's post-round dynamics. The app's central ethos is simplicity and fairness: upon game completion, winners are instantly recognized, ensuring that camaraderie thrives, while disputes take a back seat. A top priority was placed on User Experience (UX), leading to the development of a single-page application using React.js. Its component-based architecture guarantees a streamlined and efficient user interface.";
        } else if ($(this).hasClass('foreBearLogo')) {
            cardTitle = "ForeBear";
            projectDescription = "ForeBear is a clothing and lifestyle brand inspired by golf. We transform golf wear classics with a modern streetwear twist, combining comfort, design and personal style so you look and feel great wherever life takes you.";
        }
        $('#modal-title').text(cardTitle);
        $('#modal-description').text(projectDescription);
        $('#modal').show();
    });

    $(".close-btn").click(function () {
        $(this).closest('.modal').hide();
    });

    $(window).click(function (event) {
        if ($(event.target).hasClass('modal')) {
            $(event.target).hide();
        }
    });

    // Contact modal handling
    var modal = $('#contactModal');
    var btn = $('#contact-btn');
    var span = $(".close-btn").first();

    btn.click(function () {
        modal.show();
    });

    span.click(function () {
        modal.hide();
    });

    $(window).click(function (event) {
        if ($(event.target).is(modal)) {
            modal.hide();
        }
    });

    // Open the contact modal
    $('#contactBtn').click(function (e) {
        e.preventDefault();
        $('#contactModal').show();
    });

    // Close the contact modal
    $('.contact-close-btn').click(function () {
        $('#contactModal').hide();
    });


    // Skills Modals //

    $(document).ready(function () {
        // Opening the modals
        $('.language').click(function () {
            $('#languagesModal').show();
        });

        $('.libraries').click(function () {
            $('#librariesModal').show();
        });

        $('.databases').click(function () {
            $('#databaseModal').show();
        });

        $('.frameworks').click(function () {
            $('#frameworksModal').show();
        });
        $('.devTools').click(function () {
            $('#devToolsModal').show();
        });



        // Closing the modals
        $('.skills-modal-content').click(function (event) {
            event.stopPropagation(); // This prevents the modal from closing when the content is clicked
        });

        $('.skills-modal').click(function () {
            $(this).hide(); // Hide the modal when anywhere outside the modal content is clicked
        });
    });

});