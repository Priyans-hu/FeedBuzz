const form = document.getElementById('signUpForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const userBioInput = document.getElementById('userBio');

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
    const userBio = userBioInput.value;

    const maxUserId = Math.max(...users.map(user => user.userId));
    const newUser = {
        "userId": maxUserId + 1,
        "username": username,
        "name": username,
        "password": password,
        "profilepicture": "https://i.pinimg.com/280x280_RS/77/0f/b7/770fb75f5e81e4c2dbe8934f246aeeab.jpg",
        "bio": userBio,
        "postCount": 0,
        "followers": 0,
        "following": 0
    };

    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));

    window.location.href = `index.html?loggedIn=true&username=${username}&id=${newUser.userId}`;
});