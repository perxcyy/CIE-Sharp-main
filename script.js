function showInfo(feature){

    var title = document.getElementById("infoTitle");

    var text = document.getElementById("infoText");

    var box = document.getElementById("featureBox");


    if(feature == "progressive"){

        title.innerHTML = "BEGIN YOUR SPELLCRAFT";

        text.innerHTML =
        "Build your foundation by learning variables, data types, operators, and basic C# syntax. Master these essential spells before advancing to more complex concepts.";

    }


    else if(feature == "guided"){

        title.innerHTML = "TURN LOGIC INTO CODE";

        text.innerHTML =
        "Learn how to transform problems into step-by-step solutions using conditions, loops, and logical thinking.";

    }


    else if(feature == "gamification"){

        title.innerHTML = "USE C# WITH PURPOSE";

        text.innerHTML =
        "C# is more than just writing code. Learn how programming concepts work together to create useful applications and solve real-world problems.";

    }


    else if(feature == "progress"){

        title.innerHTML = "PRACTICE, LEARN, IMPROVE";

        text.innerHTML =
        "Don't be afraid to make mistakes. Practice writing code, understand your errors, and improve your programming skills one concept at a time.";

    }


    else if(feature == "feedback"){

        title.innerHTML = "Immediate Feedback & Error Support";

        text.innerHTML =
        "CIE-Sharp provides immediate feedback through simple error explanations, hints, error categorization, correction attempts, and retry options.";

    }


    box.style.display = "flex";

}




function closeInfo(){

    document.getElementById("featureBox").style.display = "none";

}



/* RESEARCHERS */
function showResearchers(){

    document.getElementById("researcherBox").style.display = "flex";

}

/* CLOSE RESEARCHERS */
function closeResearchers(){

    document.getElementById("researcherBox").style.display = "none";

}

var currentResearcher = 0;

var researchers = document.querySelectorAll(".researcher-slide");


function showResearcher(index){

    researchers.forEach(function(slide){
        slide.classList.remove("active");
    });

    researchers[index].classList.add("active");

    document.getElementById("researcherNumber").innerHTML =
        (index + 1) + " / " + researchers.length;
}



/*RESEARCHER DATA*/

var currentResearcher = 0;

var researchers = [

    {
        name: "Marciales, Raynan A.",
        role: "Main Developer",
        image: "images/marciales.jpg",
        description:
        "Responsible for the development and implementation of the CIE-Sharp web-based microgame learning material."
    },

    {
        name: "Inquig, Precious Gold B.",
        role: "Research Leader",
        image: "images/inquig.jpg",
        description:
        "Serves as the research leader who helps coordinate the research activities and development of the CIE-Sharp instructional material."
    },

    {
        name: "Domingo, Noe D.",
        role: "Researcher & Developer",
        image: "images/domingo.jpg",
        description:
        "Contributed to the research and development activities of the CIE-Sharp learning material."
    },

    {
        name: "Gidayawan, Joses D.",
        role: "Researcher & Developer",
        image: "images/gidayawan.jpg",
        description:
        "Contributed to the research and development activities of the CIE-Sharp learning material."
    },

    {
        name: "Sorinio, Bea A.",
        role: "Researcher & Developer",
        image: "images/sorinio.jpg",
        description:
        "Contributed to the research and development activities of the CIE-Sharp learning material."
    }

];


/* =========================
   OPEN RESEARCHER BOX
========================= */

function showResearchers(){

    currentResearcher = 0;

    document.getElementById("researcherBox").style.display = "flex";

    document.querySelector(".researcher-profile").style.display = "flex";

    document.querySelector(".researcher-navigation").style.display = "flex";

    document.querySelector(".researcher-school").style.display = "block";

    document.getElementById("researchTeamSummary").style.display = "none";

    showResearcher();

}


/* =========================
   SHOW RESEARCHER
========================= */

function showResearcher(){

    var researcher = researchers[currentResearcher];

    document.getElementById("researcherName").innerHTML =
        researcher.name;

    document.getElementById("researcherRole").innerHTML =
        researcher.role;

    document.getElementById("researcherDescription").innerHTML =
        researcher.description;

    document.getElementById("researcherImage").src =
        researcher.image;


    /* COUNTER */

    document.getElementById("researcherNumberBottom").innerHTML =
        (currentResearcher + 1) + " / " + researchers.length;


    /* PREVIOUS BUTTON */

    document.getElementById("prevResearcher").disabled =
        currentResearcher === 0;


    /* NEXT BUTTON */

    if(currentResearcher === researchers.length - 1){

        document.getElementById("nextResearcher").innerHTML =
            "View Research Team →";

    }

    else{

        document.getElementById("nextResearcher").innerHTML =
            "Next →";

    }

}


/* =========================
   NEXT RESEARCHER
========================= */

function nextResearcher(){

    if(currentResearcher < researchers.length - 1){

        currentResearcher++;

        showResearcher();

    }

    else{

        showResearchTeam();

    }

}


/* =========================
   PREVIOUS RESEARCHER
========================= */

function previousResearcher(){

    if(currentResearcher > 0){

        currentResearcher--;

        showResearcher();

    }

}


/* =========================
   SHOW FINAL SUMMARY
========================= */

function showResearchTeam(){

    document.querySelector(".researcher-profile").style.display =
        "none";

    document.querySelector(".researcher-navigation").style.display =
        "none";

    document.querySelector(".researcher-school").style.display =
        "none";

    document.getElementById("researchTeamSummary").style.display =
        "block";

}


/* =========================
   CLOSE RESEARCHER BOX
========================= */

function closeResearchers(){

    document.getElementById("researcherBox").style.display =
        "none";

}

/* =========================================================
   FLOATING BUTTONS
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const backToTop = document.getElementById("backToTop");

    const characterFab = document.getElementById("characterFab");

    const characterModal =
        document.getElementById("characterModal");

    const closeCharacterModal =
        document.getElementById("closeCharacterModal");

    const createCharacter =
        document.getElementById("createCharacter");

    const characterName =
        document.getElementById("characterName");

    const characterType =
        document.getElementById("characterType");

    const characterEmoji =
        document.getElementById("characterEmoji");

    const characterAvatar =
        document.getElementById("characterAvatar");

    const characterPreviewName =
        document.getElementById("characterPreviewName");

    const characterResult =
        document.getElementById("characterResult");


    /* =====================================================
       BACK TO TOP
       ===================================================== */

    function updateBackToTop() {

        if (!backToTop) return;

        const scrollPosition =
            window.scrollY + window.innerHeight;

        const pageHeight =
            document.documentElement.scrollHeight;

        /*
           Show only when within 260px
           of the bottom of the website.
        */

        const nearBottom =
            pageHeight - scrollPosition <= 260;

        backToTop.classList.toggle(
            "is-visible",
            nearBottom
        );
    }


    window.addEventListener(
        "scroll",
        updateBackToTop,
        { passive: true }
    );

    window.addEventListener(
        "resize",
        updateBackToTop
    );

    updateBackToTop();


    /* Back to top click */

    if (backToTop) {

        backToTop.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* =====================================================
       CHARACTER CREATOR
       ===================================================== */


    function openCharacterCreator() {

        if (!characterModal) return;

        characterModal.classList.add("is-open");

        characterModal.setAttribute(
            "aria-hidden",
            "false"
        );

        if (characterFab) {

            characterFab.setAttribute(
                "aria-expanded",
                "true"
            );

        }

        setTimeout(function () {

            if (characterName) {
                characterName.focus();
            }

        }, 100);

    }


    function closeCharacterCreator() {

        if (!characterModal) return;

        characterModal.classList.remove("is-open");

        characterModal.setAttribute(
            "aria-hidden",
            "true"
        );

        if (characterFab) {

            characterFab.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }


    /* Open */

    if (characterFab) {

        characterFab.addEventListener(
            "click",
            openCharacterCreator
        );

    }


    /* Close */

    if (closeCharacterModal) {

        closeCharacterModal.addEventListener(
            "click",
            closeCharacterCreator
        );

    }


    /* Close by clicking outside */

    if (characterModal) {

        characterModal.addEventListener(
            "click",
            function (event) {

                if (event.target === characterModal) {

                    closeCharacterCreator();

                }

            }
        );

    }


    /* Close with ESC */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                characterModal &&
                characterModal.classList.contains("is-open")
            ) {

                closeCharacterCreator();

            }

        }
    );


    /* =====================================================
       LIVE CHARACTER PREVIEW
       ===================================================== */

    function updateCharacterPreview() {

        if (characterAvatar && characterEmoji) {

            characterAvatar.textContent =
                characterEmoji.value;

        }


        if (characterPreviewName) {

            const name =
                characterName.value.trim();

            characterPreviewName.textContent =
                name || "Your Character";

        }

    }


    if (characterName) {

        characterName.addEventListener(
            "input",
            updateCharacterPreview
        );

    }


    if (characterEmoji) {

        characterEmoji.addEventListener(
            "change",
            updateCharacterPreview
        );

    }


    /* =====================================================
       SAVE CHARACTER
       ===================================================== */

    function saveCharacter() {

        const name =
            characterName.value.trim() ||
            "Player";

        const type =
            characterType.value;

        const emoji =
            characterEmoji.value;


        const character = {

            name: name,
            type: type,
            emoji: emoji

        };


        localStorage.setItem(
            "cieSharpCharacter",
            JSON.stringify(character)
        );


        characterResult.textContent =
            name +
            " is ready! Your " +
            type +
            " character has been created.";


        updateCharacterPreview();

    }


    if (createCharacter) {

        createCharacter.addEventListener(
            "click",
            saveCharacter
        );

    }


    /* =====================================================
       LOAD PREVIOUS CHARACTER
       ===================================================== */

    function loadCharacter() {

        const savedCharacter =
            localStorage.getItem(
                "cieSharpCharacter"
            );


        if (!savedCharacter) return;


        try {

            const character =
                JSON.parse(savedCharacter);


            if (characterName) {

                characterName.value =
                    character.name || "";

            }


            if (characterType) {

                characterType.value =
                    character.type || "Code Ranger";

            }


            if (characterEmoji) {

                characterEmoji.value =
                    character.emoji || "🧙";

            }


            updateCharacterPreview();

        }

        catch (error) {

            console.log(
                "Could not load saved character."
            );

        }

    }


    loadCharacter();

});