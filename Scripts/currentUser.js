const userCard = document.getElementById('accountCard');

userCard.innerHTML = `
    <div class="userData">
        <div class="userImg">
            <img src="https://images.unsplash.com/photo-1565396488538-0cdbd7c7ef18?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNleHklMjBnaXJsfGVufDB8fDB8fHww" alt="">
        </div>
        <div class="userInfo">
            <div class="userUsername"><h1>John Doe</h1><p>@user1</p></div>
            <div class="userStats">
                <div class="userPostsCount"><h3>69</h3><p>Posts</p></div>
                <div class="userFollowersCount"><h3>69</h3><p>Followers</p></div>
                <div class="userFollowingCount"><h3>69</h3><p>Following</p></div>
            </div>
            <div class="userBio"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nisi maiores corrupti unde expedita tempore!</p></div>
        </div>
    </div>
`;