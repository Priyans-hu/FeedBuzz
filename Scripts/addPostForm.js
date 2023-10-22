// writing the html of the form
document.getElementById('addNewPostForm').innerHTML = `
    <div class="inputContianer">
        <div class="form-group">
            <label for="newPostTitle" class="form-label">Title</label>
            <input type="text" name="newPostTitle" id="newPostTitle" placeholder="Enter title for new post" class="form-input" required>
        </div>
        <div class="form-group">
            <label for="newPostDesc" class="form-label">Description</label>
            <input type="text" name="newPostDesc" id="newPostDesc" placeholder="Enter Description of new post" class="form-input" required>
        </div>
        <div class="form-group">
            <label for="newPostImg" class="form-label">Image URL</label>
            <input type="text" name="newPostImg" id="newPostImg" placeholder="Enter URL of image" class="form-input" required>
        </div>
        <div class="form-actions">
            <button type="submit" id="addPostButton" class="form-button">Add Post</button>
        </div>
    </div>
`;

// JavaScript to toggle the menu on button click
document.querySelector('.menu-button').addEventListener('click', function () {
    const menu = document.querySelector('.main-nav ul');
    menu.classList.toggle('show');
});

const toggleForm = () => {
    const currentDisplay = document.getElementById("addNewPostForm").style.display;

    if (currentDisplay === 'none') {
        document.getElementById("addNewPostForm").style.display = 'block';
    } else {
        document.getElementById("addNewPostForm").style.display = 'none';
    }
};