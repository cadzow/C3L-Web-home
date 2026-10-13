function setVisibility(id) {
    
    document.querySelectorAll('button[id^="topic"]')
    var divs = document.getElementsByTagName("div"), i;
 
    for (i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
    }
    document.getElementById(id).value = 'Show Layer';
    document.getElementById(id).style.display = 'Block';
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}