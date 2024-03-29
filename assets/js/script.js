  // Function to show the loader
  function showLoader() {
    document.getElementById('loader').style.display = 'flex';
}

// Function to hide the loader
function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}

// Example usage: show loader when the page starts loading
window.addEventListener('load', function() {
    showLoader(); // Show loader when the page starts loading
    // After some delay (e.g., 2 seconds), hide the loader
    setTimeout(hideLoader, 2000); // Example: Hide loader after 2 seconds
});


AOS.init();