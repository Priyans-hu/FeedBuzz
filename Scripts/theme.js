let allIElements = document.querySelectorAll("#menuBtnCont button i");
let postInfoElements = document.querySelectorAll('.postInfo');
const themeBtn = document.getElementById("changeThemeBtn");
const themeIcon = document.getElementById("themeIcon");

themeBtn.addEventListener("click", () => {
    const theme = urlParams.get("theme");
    
    if (theme != "light") {
        let currentUrl = new URL(window.location);
        currentUrl.searchParams.set('theme', 'light');
        window.location.href = currentUrl.href;
    } else {
        let currentUrl = new URL(window.location);
        currentUrl.searchParams.delete('theme', 'light');
        window.location.href = currentUrl.href;
    }
})


function applyTheme() {
    const theme = urlParams.get("theme");

    if (theme === "light") {
        themeIcon.classList.add('fa-solid', 'fa-moon');
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
