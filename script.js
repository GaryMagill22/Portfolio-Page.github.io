function setNewImg() {
    $('#garyImg').attr('src', './Gary_Frankie2.png');
}

function setOldImg() {
    $('#garyImg').attr('src', './Gary Profile Page Pic.png');
}

$(document).ready(function () {
    ScrollReveal({
        reset: true,
        distance: '300px',
        duration: 1000,
        delay: 400
    });

    ScrollReveal().reveal('.card-container1', { delay: 300, origin: 'right' });
    ScrollReveal().reveal('.card-container2', { delay: 300, origin: 'left' });
    ScrollReveal().reveal('#skills', { delay: 300, origin: 'right' });
    ScrollReveal().reveal('#projects', { delay: 300, origin: 'left' });

    // Project modal handling
    $(".allSquareLogo, .foreBearLogo").click(function () {
        var projectDescription = "";
        var projectTitle = "";
        if ($(this).hasClass('allSquareLogo')) {
            projectTitle = 'All Square';
            projectDescription = "I developed an innovative MERN-stack golf application designed to infuse the passion of the sport with a touch of friendly competition. This app reinvents post-round dynamics, allowing golf enthusiasts to place friendly wagers on their games. Upon completion of a round, our system immediately recognizes and compensates the winner via Stripe, emphasizing the spirit of the sport and minimizing disputes. Through meticulous UX design, we achieved a streamlined single-page application, built on React's component-based architecture, ensuring both aesthetic appeal and optimal performance. On the server-side, Node.js plays a pivotal role, offering rapid data processing and swift user request responses. Moreover, the integration of Golf Course APIs provides users with invaluable course data, assisting in maintaining balanced and competitive games. The app boasts real-time features powered by Socket.io, permitting users to join games, place bets, and receive live score updates simultaneously. This, combined with MongoDB's intricate data models, allows for sophisticated operations and queries on user profiles, betting histories, and detailed game data. With React's modern capabilities, I adeptly employed Hooks and the Context API, paving the way for efficient state management and bolstered application performance.";
            $('#forebearTitle').text(projectTitle);

        } else if ($(this).hasClass('foreBearLogo')) {
            console.log("ForeBear logo clicked!");
            projectTitle = 'ForeBear';
            projectDescription = "ForeBear is a golf-inspired clothing and lifestyle brand, breathing a fresh streetwear essence into timeless golf wear staples. Born from my profound appreciation for the distinct charm of golf, I didn't embark on this journey as a traditional designer, but as an enthusiast seeking to address a void I recognized in the market. Merging comfort, contemporary design, and individual style, ForeBear delivers an elevated casual wardrobe, designed not only for the greens but also for the dynamic rhythm of daily life beyond the course.";

        }
        $('#allsquareTitle').text(projectTitle);
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

anime({
    targets: 'svg path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 9000,
    delay: function (el, i) { return i * 500 },
    direction: 'alternate',
    loop: true
});



