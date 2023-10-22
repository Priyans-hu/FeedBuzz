function confirmDeletion(postID) {
    var content = `
        <div class='dialog-overlay' style="color: white">
            <div class='dialog'>
                <header>
                    <h3>Confirm Delete?</h3>
                    <i class='fa fa-close'></i>
                </header>
                <div class='dialog-msg'>
                    <p>Are you sure you want to delete this post? (This action can't be undone)</p>
                </div>
                <footer>
                    <div class='controls'>
                        <button class='button button-danger doAction'>Yes</button>
                        <button class='button button-default cancelAction'>No</button>
                    </div>
                </footer>
            </div>
        </div>`;

    let overlay = document.createElement('div');
    overlay.innerHTML = content.trim();
    overlay = overlay.firstChild;

    document.body.prepend(overlay);

    overlay.querySelector('.doAction').addEventListener('click', function () {
        deletePost(postID);
        overlay.style.display = 'none';
        overlay.remove();
    });

    const closeElements = overlay.querySelectorAll('.fa-close, .cancelAction');
    closeElements.forEach(function (element) {
        element.addEventListener('click', function () {
            overlay.style.display = 'none';
            overlay.remove();
        });
    });
}