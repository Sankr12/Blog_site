document.addEventListener('DOMContentLoaded', function() {
    const addPostForm = document.getElementById('addPostForm');
    const deletePostForm = document.getElementById('deletePostForm');

    if (addPostForm) {
        addPostForm.addEventListener('submit', function(event) {
            // Add your form validation logic here if needed
            // Example: Check if title and content are not empty
            const title = document.getElementById('id_title').value.trim();
            const content = document.getElementById('id_content').value.trim();

            if (!title || !content) {
                alert('Please fill in both title and content');
                event.preventDefault();
            }
        });
    }

    if (deletePostForm) {
        deletePostForm.addEventListener('submit', function(event) {
            // Ask for confirmation before submitting the form
            const confirmation = confirm('Are you sure you want to delete this post?');
            if (!confirmation) {
                event.preventDefault();
            }
        });
    }
});
