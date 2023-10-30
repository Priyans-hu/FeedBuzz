const urlParams = new URLSearchParams(window.location.search);
const loggedIn = urlParams.get("loggedIn");

// Change the display property for all elements with class 'editPostBtn'
const editPostButtons = document.getElementsByClassName('editPostBtn');

// Change the display property for all elements with class 'deletePostBtn'
const deletePostButtons = document.getElementsByClassName('deletePostBtn');

if (loggedIn === "true") {
    document.getElementById('headerAddPostBtn').style.display = 'initial';
    document.getElementById('logInBtn').style.display = 'none';
    const decodedUsername = decodeURIComponent(urlParams.get('username'));

    showButtons();    

    console.log("Logged in as " + decodedUsername);
}

function showButtons() {
    for (let i = 0; i < editPostButtons.length; i++) {
        editPostButtons[i].style.display = 'initial';
    }
    for (let i = 0; i < deletePostButtons.length; i++) {
        deletePostButtons[i].style.display = 'initial';
    }
}