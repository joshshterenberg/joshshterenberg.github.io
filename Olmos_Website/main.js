// JavaScript file, links to index.html


//Actions for when the user scrolls
window.onscroll = function() {scrollFunction()};
window.addEventListener("hashchange", offsetAnchor);
function offsetAnchor() {
    if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 90);
    }
}

//Actions for when the page is a phone
window.onload = function() {loadFunction()};
function loadFunction() {
    if (screen.width <= 830) {
        document.getElementById("header").style.padding = "15px 0px";
        document.getElementById("phonemenu").style.display = "inline-block";
        document.getElementById("phonemenu").style.margin = "0 2.5vw 0 0";
        document.getElementById("phonemenu").style.fontSize = "4.5vw";
        document.getElementById("phonemenu").innerHTML = "☰";
        
        var l = document.getElementsByTagName("p");
        for (var i = 0; i < l.length; i++) {
            l[i].style.fontSize = "12px";
        }
        var w = document.getElementsByTagName("h3");
        for (var i = 0; i < w.length; i++){
            w[i].style.fontSize = "12px";
        }
        var r = document.getElementsByClassName("navClass");
        for (var i = 0; i < r.length; i++) {
            r[i].style.width = "8%";
            r[i].style.margin = "0 3%";
        }
        document.getElementById("logo").style.margin = "0 auto";
        document.getElementById("logo").style.padding = "0 0 0 10px";
        document.getElementById("logo").style.maxWidth = "26%";
        document.getElementById("phonemenu").innerHTML = "☰";
        document.getElementById("buttonWrapper").style.margin = "0 0 0 0";
        var x = document.getElementsByClassName("smallPics");
        var y = document.getElementsByClassName("name");
        var z = document.getElementsByClassName("instrumentName");
        var a = document.getElementsByClassName("boys");
        var b = document.getElementsByClassName("testText");
        var c = document.getElementsByClassName("testName");
        for (var i = 0; i < x.length; i++) {
            x[i].style.width = "26%";
            y[i].style.fontSize = "12px";
            z[i].style.fontSize = "10px";
        }
        for (var i = 0; i < a.length; i++) {
            a[i].style.width = "30px";
        }
        for (var i = 0; i < b.length; i++) {
            b[i].style.fontSize = "5vw";
            c[i].style.fontSize = "2.5vw";
        }
        
        //Filename splits
        var fileName = location.pathname.split("/").slice(-1);
        if (fileName == "contact.html") {
            document.getElementById("fillerImage").style.marginTop = "50px";
            document.getElementById("subbutton").style.width = "50%";
        }
        if (fileName == "donate.html") {
            document.getElementById("liii").style.fontSize = "3.5vw";
            document.getElementById("liii2").style.fontSize = "3.5vw";
            document.getElementById("supportTitle").style.fontSize = "10vw";
            document.getElementById("spacerH12").style.marginTop = "0px";
            document.getElementById("donateButton").style.width = "200px";
        }
        if (fileName == "index.html") {
            document.getElementById("fillerImage").style.marginTop = "50px";
            document.getElementById("hider").style.display = "inherit";
        }
        if (fileName == "summer.html") {
            document.getElementById("spacerH13").style.marginTop = "0";
            document.getElementById("recordings").getElementsByTagName("DIV")[0].style.margin = "0 auto";
            document.getElementById("recordings").getElementsByTagName("DIV")[1].style.margin = "0 auto";
        }
        if (fileName == "artists.html") {
            document.getElementById("spacerH1").style.marginTop = "0";
        }
        if (fileName == "current.html") {
            document.getElementById("fillerImage").style.marginTop = "50px";
        }
        var p = document.getElementsByClassName("bigboy");
        for (var i = 0; i < p.length; i++) {
            p[i].style.fontSize = "22px";
        }
    }
}

//Actions for minimizing the top nav bar
function scrollFunction() {
    if ((document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) && (screen.width > 830)) {
        document.getElementById("logo").style.maxWidth = "15%";
        document.getElementById("logo").style.margin = "0.5% 0 0.5% 2%";
        //document.getElementById("navPics").style.display = "none";
        //document.getElementById("headUL").style.float = "right";
        //document.getElementById("headUL").style.margin = "0 -5% 2% 0";
        //document.getElementById("headerNav").style.marginTop = "2.2%";
        document.getElementById("phonemenu").innerHTML = "☰";
        document.getElementById("phonemenu").style.margin = "5px 3vw 0 0";
        document.getElementById("buttonWrapper").style.marginTop = "0";
    } else if (screen.width > 830) {
        document.getElementById("logo").style.maxWidth = "15%";
        document.getElementById("logo").style.margin = "0.5% 0 0.5% 2%";
        //document.getElementById("navPics").style.display = "inherit";
        //document.getElementById("headUL").style.float = "none";
        //document.getElementById("headUL").style.margin = "0 auto 2% auto";
        //document.getElementById("headerNav").style.marginTop = "21%";
        document.getElementById("phonemenu").innerHTML = "☰";
        document.getElementById("phonemenu").style.margin = "5px 3vw 0 0";
        document.getElementById("buttonWrapper").style.marginTop = "0px";
    }
}

//Actions for the mini nav bar
function openNav() {
    document.getElementById("mySidebar").style.width = "290px";
    var moveBack = window.innerWidth - 290;
    document.getElementById("mySidebar").style.left = String(moveBack) + "px";
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("mySidebar").style.left = String(window.innerWidth) + "px";
}

//Covid / supporter button actions
function openCOVID() {
    var b = document.getElementById("covidbutton");
    if (b.innerHTML === "COVID-19 live audience regulations") {
        document.getElementById("coviddetails").style.display = "inherit";
    } else {
        document.getElementById("coviddetails").style.display = "none";
    }
}
function closeCOVID() {
    document.getElementById("coviddetails").style.display = "none";
}
    
//Function for setting the colors of the images on hover
function hover(element, replacement) {
    element.setAttribute('src', replacement);
}

//All the modal stuff
var modals = document.getElementsByClassName("modal");
var btns = document.getElementsByClassName("myBtn");
var spans = document.getElementsByClassName("close");
btns[0].onclick = function() {
    modals[0].style.display = "block";
}
btns[1].onclick = function() {
    modals[1].style.display = "block";
}
btns[2].onclick = function() {
    modals[2].style.display = "block";
}
btns[3].onclick = function() {
    modals[3].style.display = "block";
}
spans[0].onclick = function() {
    modals[0].style.display = "none";
}
spans[1].onclick = function() {
    modals[1].style.display = "none";
}
spans[2].onclick = function() {
    modals[2].style.display = "none";
}
spans[3].onclick = function() {
    modals[3].style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal[0]) {
        modal[0].style.display = "none";
    }
    if (event.target == modal[1]) {
        modal[1].style.display = "none";
    }
    if (event.target == modal[2]) {
        modal[2].style.display = "none";
    }
    if (event.target == modal[3]) {
        modal[3].style.display = "none";
    }
}