const urlParams = new URLSearchParams(window.location.search);
const editPostId = urlParams.get("id");
const editForm = document.getElementById("editPostFormContainer");
let postToEdit;
let index;

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
            index = i;
            break;
        }
    }
}

function populateForm() {
    editForm.innerHTML = `
        <div class="editPostForm">
            <h1>Edit Post</h1>
            <form action="" onSubmit="">
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
                        <button type="submit" id="updatePostButton" class="form-button">Update Post</button>
                    </div>
                </div>
            </form>
        </div>
    `;
}    

document.getElementById('updatePostButton').addEventListener('click', (e) => {
    e.preventDefault(); 

    posts[index].caption = document.getElementById('postTitle').value;
    posts[index].description = document.getElementById('postDesc').value;
    posts[index].postImage = document.getElementById('postImg').value;

    savePostsToLocalStorage();

    window.history.back();
});

function savePostsToLocalStorage() {
    try {
        localStorage.setItem('posts', JSON.stringify(posts));
        console.log('Posts saved to localStorage');
    } catch (error) {
        console.error('Error saving posts to localStorage:', error);
    }
}
