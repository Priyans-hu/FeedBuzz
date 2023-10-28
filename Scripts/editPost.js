const urlParams = new URLSearchParams(window.location.search);
const editPostId = urlParams.get("id");
const editForm = document.getElementById("editPostFormContainer");
let postToEdit;

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
        fetchPost();
        populateForm();
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

function fetchPost() {
    for (var i = 0; i < posts.length; i++) {
        console.log("Checking post with postId: " + posts[i].postId);
        if (posts[i].postId == editPostId) {
            postToEdit = posts[i];
            break;
        }
    }
}

function populateForm() {
    editForm.innerHTML = `
        <div class="editPostForm">
            <h1>Edit Post</h1>
            <form>
                <div class="inputContianer">
                    <div class="form-group">
                        <label for="PostTitle" class="form-label">Title</label>
                        <input type="text" name="PostTitle" id="postTitle" placeholder="Enter title" class="form-input" value="${postToEdit.caption}" required>
                    </div>
                    <div class="form-group">
                        <label for="PostDesc" class="form-label">Description</label>
                        <input type="text" name="PostDesc" id="postDesc" placeholder="Enter Description" class="form-input" value="${postToEdit.description}" required>
                    </div>
                    <div class="form-group">
                        <label for="PostImg" class="form-label">Image URL</label>
                        <input type="text" name="PostImg" id="postImg" placeholder="Enter URL of image" class="form-input" value="${postToEdit.postImage}" required>
                        <div>
                            <img src=${postToEdit.postImage} width="50%">
                        </div>
                    </div>
                    <div class="form-actions">
                        <button type="submit" id="updatePostButton" class="form-button" onClick="updatePost(e)">Update Post</button>
                    </div>
                </div>
            </form>
        </div>
    `;
}    

function updatePost(e) {
    e.preventDefault(); 
    postToEdit.caption = document.getElementById('postTitle').value;
    postToEdit.desc = document.getElementById('postDesc').value;
    postToEdit.postImage = document.getElementById('postImage').value;
    
    savePostsToLocalStorage();
    
    window.history.back();
}

// Function to save posts to localStorage
function savePostsToLocalStorage() {
    localStorage.setItem('posts', JSON.stringify(posts));
}
