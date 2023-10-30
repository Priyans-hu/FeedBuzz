// fetching the data from the json file
let posts = [];
fetch('Scripts/posts.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        posts = data;
        // console.log(data); // This is your JSON data
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });


let postId = 753;
const currentDisplay = document.getElementById("addNewPostForm").style.display;
const newPostTitleInput = document.getElementById('newPostTitle');
const newPostDescInput = document.getElementById('newPostDesc');
const newPostImgInput = document.getElementById('newPostImg');



// Function to add a new post
function addPost(postData) {
    postData.caption = postData.caption.charAt(0).toUpperCase() + postData.caption.slice(1)
    postData.description = postData.description.charAt(0).toUpperCase() + postData.description.slice(1)
    posts.unshift(postData);
    updateUI(); // Update the UI to display the new post
    savePostsToLocalStorage();
}



// Function to update a post by postId
function editPostPage(postId) {
    window.location.href = `editPost.html?id=${postId}`;
    updateUI(); // Update the UI to reflect the changes
    savePostsToLocalStorage();
}



// Function to delete a post by postId
function deletePost(postId) {
    posts = posts.filter(post => post.postId !== postId);
    console.log(`Post with id: ${postId}, deleted successfully`);
    updateUI();
    savePostsToLocalStorage();
}



// Function to load posts from localStorage on page load
function loadPostsFromLocalStorage() {
    const savedPosts = JSON.parse(localStorage.getItem('posts'));
    if (savedPosts) {
        posts = savedPosts;
        updateUI();
    }
}



// Function to save posts to localStorage
function savePostsToLocalStorage() {
    localStorage.setItem('posts', JSON.stringify(posts));
}



// Function to update the UI with the current posts data
function updateUI() {
    document.getElementById('postContianer').innerHTML = '';
    // Implement code to display posts on the UI based on the `posts` array
    // You'll need to create HTML elements to display each post, its comments, likes, etc.
    // Loop through the `posts` array and create/update the necessary DOM elements.
    for (let i = 0; i < posts.length; i++) {
        postId++;
        const post = posts[i];
        const newPost = `
        <div class="postCard">
            <div class="postContent" postId=${post.postId}>
                <div class="postImg">
                    <img src="${post.postImage}" alt="">
                </div>
                <div class="postInfo">
                    <div class="postCaption">
                        <h1>${post.caption}</h1>
                    </div>
                    <div id="menuBtnCont" class="menuBtnCont">
                        <button class="editPostBtn" title="Edit post" onClick="editPostPage(${post.postId})"><i class="fa-regular fa-pen-to-square"></i></button>
                        <button class="deletePostBtn" title="Delete post" onClick="confirmDeletion(${post.postId})"><i class="fa-regular fa-trash-can"></i></button>
                    </div>
                    <div class="postDesc">
                        <p>${post.description}</p>
                    </div>
                    <div class="likeCountContainer"><i class="fa-solid fa-heart"></i>${post.likeCount}</div>
                    <div class="commentContainer">${post.comments.length}10k comments</div>
                    <div class="postDetails">
                        <div class="authorName">
                            <p>Author: ${post.authorName}</p>
                        </div>
                        <div class="CreationDate">
                            Posted on: ${post.creationDateTime}
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        `;
        document.getElementById('postContianer').innerHTML += newPost;
    }
}



// Event listeners for adding, updating, and deleting posts
document.getElementById('addPostButton').addEventListener('click', (e) => {
    // stopping the page from reloading
    e.preventDefault();

    // hiding the form
    document.getElementById("addNewPostForm").style.display = 'none';

    // creating the object of new post
    const newPostData = {
        postId: postId++ /* Generate a unique postId */,
        authorName: 'YourName',
        creationDateTime: new Date().toLocaleString(),
        caption: newPostTitleInput.value,
        description: newPostDescInput.value,
        postImage: newPostImgInput.value,
        likeCount: 0,
        comments: [],
    };

    // adding new post
    addPost(newPostData);

    // giving user the confirmation
    window.alert("Post added");

    // clearing the value of input fields
    newPostImgInput.value = '';
    newPostDescInput.value = '';
    newPostImgInput.value = '';
});