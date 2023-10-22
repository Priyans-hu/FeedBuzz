const urlParams = new URLSearchParams(window.location.search);
    const loggedIn = urlParams.get("loggedIn");

    if (loggedIn === "true") {
        document.getElementById('headerAddPostBtn').style.display = 'initial';
        document.getElementById('logInBtn').style.display = 'none';
        const decodedUsername = decodeURIComponent(urlParams.get('username'));
        console.log("Logged in as " + decodedUsername);
    }