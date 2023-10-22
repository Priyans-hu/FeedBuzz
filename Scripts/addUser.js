const form = document.getElementById('signUpForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

let users = [];

fetch('Scripts/accounts.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        users = data;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

    localStorage.setItem('users', JSON.stringify(users));

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    const maxUserId = Math.max(...users.map(user => user.userId));
    const newUser = {
        "userId": maxUserId + 1,
        "username": username,
        "name": username,
        "password": password,
        "profilepicture": "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
        "bio": "I'm a software developer and nature enthusiast.",
        "postCount": 0,
        "followers": 0,
        "following": 0
    };

    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));

    window.location.href = `index.html?loggedIn=true&username=${username}&id=${newUser.userId}`;
});