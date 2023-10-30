let allIElements = document.querySelectorAll("#menuBtnCont button i");
let postInfoElements = document.querySelectorAll('.postInfo');

function applyTheme() {
    const theme = urlParams.get("theme");

    if (theme === "light") {
        addLightTheme();
    }
}

function addLightTheme() {
    document.body.style.backgroundColor = "#ebebeb";

    for (let i = 0; i < allIElements.length; i++) {
        allIElements[i].classList.add("light");
    }    

    for (let i = 0; i < postInfoElements.length; i++) {
        postInfoElements[i].classList.add('light');
    }    

    document.getElementById('userInteractionArea').classList.add('light');
    document.getElementById('userData').classList.add('light');
}    

applyTheme();
