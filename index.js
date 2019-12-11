let elements = [ 
    "vicContent",
    "fedContent",
    "lr-content",
    "headBlurb",
    "donateContent",
    "WAContent",
    "SAContent",
    "NTContent",
    "NSWContent",
    "QLDContent",
    "memberShip",
    "frontpage",
    "boxMenu",
    "infoContent"
]

let texts = [
    "Test",
    "fedContenttext",
    "memberForm",
    "hbContent",
    "donationContent",
    "LandingPage",
    "SAContenttext",
    "WAContenttext",
    "vicContenttext",
    "QLDContenttext",
    "NTContenttext",
    "NSWContenttext",
    "memberFormhead",
    "membershipContent",
    "headBackground",
    "fedContenthead",
    "SAContenthead",
    "WAContenthead",
    "vicHeading",
    "QLDContenthead",
    "NTContenthead",
    "NSWContenthead",
    "dont",
    "do",
    "Dheading",
    "hbHeading",
    "memberHeading",
    "mHeading",
    "koHeading",
    "formDiv",
    "accordionForm",
    "fullMemBtn",
    "assMemBtn",
    "fundsTransferText",
    "infoContent"
]
let stateToggle = true;
function ToggleStateBoxes() {
    if (stateToggle) {
        $('#stateLawBox').html("State Laws &#x25b2;&#xfe0e;");
        $('.hidden').addClass("displayed");
        $('.displayed').removeClass("hidden");
        stateToggle = false;
    }
    else {
        $('#stateLawBox').html("State Laws &#x25bc;&#xfe0e;");
        $('.displayed').addClass("hidden");
        $('.hidden').removeClass("displayed");
        stateToggle = true;
    }    
}

function TextDown() {
    for (var i = 0; i < texts.length; i++){
        var fs = $(`#${texts[i]}`).css("font-size");
        $(`#${texts[i]}`).css("font-size",`calc(${fs} - 30%)`);
    }
    $(`.lawBox`).css("font-size",`calc(${$(`.lawBox`).css("font-size")} - 30%)`);
    $(`.myBtn`).css("font-size",`calc(${$(`.myBtn`).css("font-size")} - 30%)`);
}

function TextUp() {
    for (var i = 0; i < texts.length; i++){
        var fs = $(`#${texts[i]}`).css("font-size");
        $(`#${texts[i]}`).css("font-size",`calc(${fs} + 30%)`);
    }
    $(`.lawBox`).css("font-size",`calc(${$(`.lawBox`).css("font-size")} + 30%)`);
    $(`.myBtn`).css("font-size",`calc(${$(`.myBtn`).css("font-size")} + 30%)`);
}

// Removed heading highlight functionality:
let headings = [
    "headBackground",
    "fedContenthead",
    "SAContenthead",
    "WAContenthead",
    "vicHeading",
    "QLDContenthead",
    "NTContenthead",
    "NSWContenthead",
    "dont",
    "do",
    "Dheading",
    "hbHeading",
    "memberHeading"
]

var headinfClick = true;
function headingChange() {
    if (headinfClick == true) {        
        for (var i = 0; i < headings.length; i++){
            $(`#${headings[i]}`).css("background-color","#ffd394");
        }
        headinfClick = false;
    } 
    else if (headinfClick == false) {
        for (var i = 0; i < headings.length; i++){
            $(`#${headings[i]}`).css("background-color","#fdfdfd");
        }
        headinfClick = true;
    }
}

function ShowContent(content){    
    for (var i = 0; i < elements.length; i++){
        if (elements[i] == content) {
            $(`#${elements[i]}`).css("display", "block");
        }
        else {
            $(`#${elements[i]}`).css("display", "none");
        }        
    }
    jQuery('html,body').animate({ scrollTop: 0 }, 0);    
}

function openNav() {
    if ($("#mySidenav").css("width") == "150px"){
        $("#mySidenav").css("width", "0px")
    }
    else {        
        $("#mySidenav").css("width", "150px");
        $("#myTopnav").addClass("topnav");
    }    
}

function closeNav() {
    $("#mySidenav").css("width", "0");
    $("#myTopnav").addClass("topnav");
}

function Neg() {
    document.getElementById("negative");
}

function googleTranslateElementInit() {
        new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

$(document).on("scroll", function () {
    if
        ($(document).scrollTop() > 86) {
        $("#banner").addClass("shrink");
    }
    else {
        $("#banner").removeClass("shrink");
    }
});
