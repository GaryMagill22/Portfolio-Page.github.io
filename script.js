function setNewImg() {
    $('#garyImg').attr('src', './Gary_Frankie2.png');
}

function setOldImg() {
    $('#garyImg').attr('src', './Gary_Profile_Page_Pic.png');
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

    // ===================================================================================================== //

    // project slides for All Square

    // Define your slide descriptions in the global scope
    const slideDescriptions = [
        "Experience the convenience of my golf betting app's dashboard. Designed for golf enthusiasts seeking friendly competition, my app allows you to bet and engage in popular golf games with ease. My streamlined scorecard eliminates any scoring confusion, and when your golfing session ends, and everyone has signed the scorecard, my app handles the payouts seamlessly, letting you focus on enjoying your time on the course.",
        "Welcome to the All Square home screen, the command center for your golfing journey. The vertical navbar stands prominently, offering quick access to various app sections. It's your compass through the All Square universe. At the top, you'll find my distinctive All Square logo, a testament to my commitment to excellence in design. This is where your golfing adventures begin, where you can initiate new rounds, create lobbies, or join games using lobby codes. Simply choose your desired game, specify your course, and let the golfing fun begin.",
        "This page serves as a comprehensive catalog of all the golf games available in my database. It's not just a list; it's an interactive repository of golfing possibilities. Each game is neatly organized within accordions, waiting for you to unfold the excitement. When you click on an accordion, it unveils an intricate description of how the game is played, including the rules, strategies, and the fun twists that make each game unique. Additionally, you'll find information on the minimum number of players required to enjoy the game to its fullest and how the scoring works, ensuring you're well-prepared for a thrilling golfing experience.",
        "Welcome to the individual style scorecard page. All lobby players effortlessly load into the scorecard, receiving real-time updates on their devices, keeping everyone engaged. The lobby creator has full control, while spectators have buttons disabled to prevent interference. The top left displays the game name, and the top right shows the hole number. After each hole, the scorecard updates with points and scores. At the bottom, you'll see the betting amount, ensuring everyone knows the stakes.",
        "Your dedicated profile hub,where your golfing identity takes center stage. Your username is proudly displayed at the top, accompanied by your handicap, providing a snapshot of your golfing skills. Stay on top of your finances with your digital wallet balance showcased prominently, giving you the flexibility to add more funds for future bets or cash out your winnings. The logout option is readily available for your convenience. The top navbar offers easy access to different app sections, ensuring you can seamlessly explore all the app has to offer.",
        "This is where your golfing journey unfolds—on the page dedicated to your past rounds. Each round is thoughtfully categorized by date, game, and the course played. With a single click, you can delve deeper into each round, revealing the victorious player and their winnings. Additionally, you'll find a detailed scorecard showcasing your total points and score.",
        "As the golf game concludes, you'll be directed to a page that presents the round totals. Here, you'll find a comprehensive summary of each player's or team's total score and points, ensuring transparency and fairness. To maintain integrity, everyone must 'sign the scorecard.' Once all participants have provided their digital signatures, the winnings are automatically transferred to the victors' digital wallets. Additionally, you have the option to save the round for future reference, allowing you to revisit your golfing triumphs or learn from your experiences.",
        "This is the page that offers a glimpse into the world of team games. You have the opportunity to craft a team identity by selecting a team name and adding your players. Just like the individual scorecard, the team scorecard is managed by the lobby creator, ensuring uniformity in gameplay. All players can enjoy real-time score and hole updates, enhancing the competitive spirit. When your game concludes, your round is saved, capturing the team names you've chosen for posterity. A quick scroll to the bottom serves as a reminder of the betting amount, ensuring everyone is aware of what's on the line.",
        // ... and so on for each slide
    ];

    // Global scope functions for slide controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    // Declare slideIndex in the global scope to ensure it's accessible by all functions
    let slideIndex = 1; // Initialize slideIndex to 1 to start from the first slide

    function showSlides(n) {
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1; } // Wrap back to the first slide
        if (n < 1) { slideIndex = slides.length; } // Wrap to the last slide


        // Update the slide description
        document.getElementById("slide-description").innerText = slideDescriptions[slideIndex - 1];

        if (n > slides.length) {
            slideIndex = 1; // Wrap back to the first slide
        } else if (n < 1) {
            slideIndex = slides.length; // Wrap to the last slide
        }

        // Hide all slides
        for (let slide of slides) {
            slide.style.display = "none";
        }

        // Remove 'active' class from all dots
        for (let dot of dots) {
            dot.className = dot.className.replace(" active", "");
        }

        // Show the active slide and highlight the active dot
        // Checking if the elements exist before trying to change style or class
        if (slides[slideIndex - 1]) {
            slides[slideIndex - 1].style.display = "block";
        }
        if (dots[slideIndex - 1]) {
            dots[slideIndex - 1].className += " active";
        }

        // Update the slide description
        let textContainer = document.getElementById("slide-description");
        textContainer.innerText = slideDescriptions[slideIndex - 1];

    }

    // Document ready function
    $(document).ready(function () {
        // You should call showSlides here to initialize the slideshow when the document is ready
        showSlides(slideIndex);

        // Event handlers for next/prev buttons
        $('.prev').click(function () {
            plusSlides(-1);
        });

        $('.next').click(function () {
            plusSlides(1);
        });

        // Event handlers for dots
        $('.dot').each(function (index) {
            $(this).click(function () {
                currentSlide(index + 1);
            });
        });

    });




    // Project modal handling
    $(".allSquareLogo, .foreBearLogo").click(function () {
        var projectDescription = "";
        var projectTitle = "";
        if ($(this).hasClass('allSquareLogo')) {
            projectTitle = 'All Square';
            projectDescription = "I developed an innovative MERN-stack golf application designed to infuse the passion of the sport with a touch of friendly competition. This app reinvents post-round dynamics, allowing golf enthusiasts to place friendly wagers on their games. Upon completion of a round, my system immediately recognizes and compensates the winner via Stripe, emphasizing the spirit of the sport and minimizing disputes. Through meticulous UX design, we achieved a streamlined single-page application, built on React's component-based architecture, ensuring both aesthetic appeal and optimal performance. On the server-side, Node.js plays a pivotal role, offering rapid data processing and swift user request responses. Moreover, the integration of Golf Course APIs provides users with invaluable course data, assisting in maintaining balanced and competitive games. The app boasts real-time features powered by Socket.io, permitting users to join games, place bets, and receive live score updates simultaneously. This, combined with MongoDB's intricate data models, allows for sophisticated operations and queries on user profiles, betting histories, and detailed game data. With React's modern capabilities, I adeptly employed Hooks and the Context API, paving the way for efficient state management and bolstered application performance.  <a href='https://www.allsquare.club'>www.allsquare.club</a>";
            $('#forebearTitle').text(projectTitle);

        } else if ($(this).hasClass('foreBearLogo')) {
            console.log("ForeBear logo clicked!");
            projectTitle = 'ForeBear';
            projectDescription = "ForeBear is a golf-inspired clothing and lifestyle brand, breathing a fresh streetwear essence into timeless golf wear staples. Born from my profound appreciation for the distinct charm of golf, I didn't embark on this journey as a traditional designer, but as an enthusiast seeking to address a void I recognized in the market. Merging comfort, contemporary design, and individual style, ForeBear delivers an elevated casual wardrobe, designed not only for the greens but also for the dynamic rhythm of daily life beyond the course. <a href='https://www.wearforebear.com'>www.wearforebear.com</a>";

        }
        $('#allsquareTitle').text(projectTitle);
        $('#modal-description').html(projectDescription);
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



