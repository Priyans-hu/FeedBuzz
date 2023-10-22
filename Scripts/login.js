let loggedIn = false;
let loggedUser;

// Function to load JSON data from a file using fetch
function loadJSON(callback) {
    fetch('Scripts/accounts.json')
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Error loading JSON:', error));
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log(username, password);

    // Load JSON data and compare credentials
    loadJSON(function(data) {
        const user = data.find(user => user.username === username && user.password === password);

        if (user) {
            alert('Login successful!');
            loggedIn = true;
            loggedUser = user.username;
            const encodedUsername = encodeURIComponent(user.username);
            window.location.href = `index.html?loggedIn=true&username=${encodedUsername}&id=${user.userId}`;
        } else {
            alert('Login failed. Please try again.');
        }
    });
});

function hideLoginButton() {
    document.getElementById('logInBtn').style.display = 'none';
}

if (loggedIn) {
    hideLoginButton();
}