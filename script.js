document.getElementById('uploadButton').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function() {
    var file = this.files[0];

    if (file && file.size < 15 * 1024 * 1024) { // 15 MB
        // TODO: Upload the file
        // You need to implement this part with server-side programming
        console.log('File selected:', file);
    } else {
        alert('Please select a file of maximum size 15 MB.');
    }
});
