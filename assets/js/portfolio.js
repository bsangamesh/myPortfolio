console.log("welcome");
//mselect modal
var aboutme = document.querySelector(".aboutme_modal");
var skills = document.querySelector(".skills_modal");
var experiance = document.querySelector(".experiance_modal");
var education = document.querySelector(".education_modal");
var contact = document.querySelector(".contact_modal");

// Get the button that opens the modal
var aboutLink = document.getElementById("aboutLink");
var skillsLink = document.getElementById("skillsLink");
var expLink = document.getElementById("expLink");
var eduLink = document.getElementById("eduLink");
var contLink = document.getElementById("contLink");
var meLink = document.getElementById("meLink");
var headingGroupAnimate = document.getElementById("headingGroup");

meLink.addEventListener("click", function() {

    aboutme.style.display = "none";
    skills.style.display = "none";
    experiance.style.display = "none";
    contact.style.display = "none"
    education.style.display = "none";

});
$('#meLink').on('click', function() {
    $('.navbar-collapse').collapse('hide');
});

// Get the <span> element that closes the modal
var spanOfAbout = document.getElementsByClassName("close")[0];
var spanOfSkills = document.getElementsByClassName("close")[1];
var spanOfExp = document.getElementsByClassName("close")[2];
var spanOfEdu = document.getElementsByClassName("close")[3];
var spanOfCont = document.getElementsByClassName("close")[4];

aboutLink.addEventListener("click", function() {
    aboutme.style.display = "block";
    skills.style.display = "none";
    experiance.style.display = "none";
    contact.style.display = "none"
    education.style.display = "none"
});

skillsLink.addEventListener("click", function() {
    skills.style.display = "block";
    aboutme.style.display = "none";
    experiance.style.display = "none";
    contact.style.display = "none";
    education.style.display = "none";
});

expLink.addEventListener("click", function() {
    experiance.style.display = "block";
    aboutme.style.display = "none";
    skills.style.display = "none";
    contact.style.display = "none"
    education.style.display = "none";
});

eduLink.addEventListener("click", function() {
    education.style.display = "block"
    skills.style.display = "none";
    aboutme.style.display = "none";
    experiance.style.display = "none";
    contact.style.display = "none"
});

contLink.addEventListener("click", function() {
    contact.style.display = "block"
    experiance.style.display = "none";
    aboutme.style.display = "none";
    skills.style.display = "none";
    education.style.display = "none";
});




// When the user clicks on <span> (x), close the modal
spanOfAbout.onclick = function() {
    aboutme.style.display = "none";
}

spanOfSkills.onclick = function() {
    skills.style.display = "none";
}

spanOfExp.onclick = function() {
    experiance.style.display = "none";
}

spanOfEdu.onclick = function() {
    education.style.display = "none";
}

spanOfCont.onclick = function() {
    contact.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == aboutme || event.target == skills || event.target == experiance ||
        event.target == education || event.target == contact) {
        aboutme.style.display = "none";
        skills.style.display = "none";
        experiance.style.display = "none";
        contact.style.display = "none"
        education.style.display = "none";
    }
}
