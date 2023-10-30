const userCard = document.getElementById('accountCard');

let currUser = null; // Initialize currUser as null
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
        const index = urlParams.get('id');
        renderUserCard(index); // Call the rendering function here
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
    
function getIndexAndRender(){
    const index = urlParams.get('id');
    renderUserCard(index);
}
    
function renderUserCard(index) {
    currUser = users[index - 1];
    userCard.innerHTML = `
        <div class="userData" id="userData">
            <div class="userImg">
                <img src="${currUser.profilepicture}" alt="${currUser.username}">
            </div>
            <div class="userInfo">
                <div class="userUsername"><h1>${currUser.name}</h1><p>@${currUser.username}</p></div>
                <div class="userStats">
                    <div class="userPostsCount"><h3>${currUser.postCount}</h3><p>Posts</p></div>
                    <div class="userFollowersCount"><h3>${currUser.followers}</h3><p>Followers</p></div>
                    <div class="userFollowingCount"><h3>${currUser.following}</h3><p>Following</p></div>
                </div>
                <div class="userBio"><p>${currUser.bio}</p></div>
            </div>
        </div>
    `;
}