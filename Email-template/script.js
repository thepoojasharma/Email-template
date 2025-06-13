// Ensure the DOM is fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {
    // Get the CTA button element by its ID
    const ctaButton = document.getElementById('cta-button');

    // Check if the ctaButton exists before adding an event listener
    if (ctaButton) {
        // Add a click event listener to the CTA button
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default action of the anchor tag (e.g., navigating to '#')

            // Display a message indicating redirection (in a real app, this would be a redirect or modal)
            // Note: window.alert() is generally avoided in production web apps for better user experience.
            // For a simple demo, it serves the purpose of showing an action.
            console.log('Redirecting to purchase page...');
            // In a real application, you might do something like:
            // window.location.href = 'https://your-purchase-page.com';
            // Or show a custom modal:
            // showCustomAlertDialog('Redirecting to purchase page...');
        });
    }

    // Function to optimize image source based on screen width for responsiveness
    function optimizeImages() {
        // Get the image element within the banner section
        const img = document.querySelector('.banner img');
        if (!img) return; // Exit if image element is not found

        const screenWidth = window.innerWidth; // Get the current viewport width
        let newSrc = img.src; // Start with the current image source

        // Check screen width and update image source accordingly
        // This simulates loading different image resolutions for different screen sizes
        if (screenWidth < 768) {
            // For mobile devices, change width to 800
            newSrc = newSrc.replace(/w=\d+/, 'w=800');
        } else if (screenWidth < 1200) {
            // For tablet-like sizes, change width to 1200
            newSrc = newSrc.replace(/w=\d+/, 'w=1200');
        } else {
            // For larger screens, ensure it's at least 1400 (or revert to original if changed)
            newSrc = newSrc.replace(/w=\d+/, 'w=1400');
        }

        // Only update the src if it has actually changed to avoid unnecessary reloads
        if (img.src !== newSrc) {
            img.src = newSrc;
        }
    }

    // Initialize image optimization when the window loads
    window.addEventListener('load', optimizeImages);
    // Re-optimize images when the window is resized
    window.addEventListener('resize', optimizeImages);
});
