
if (!localStorage.getItem('email') || !localStorage.getItem('password')) {
    alert("You are not signed in. Please sign in to continue.");
    window.location.href = "signin.html";  // Redirect to sign-in page if not signed in
}



let currentIndex = 0;

function moveSlide(direction) {
    const cards = document.querySelector('.property-cards');
    const totalCards = document.querySelectorAll('.property').length;  // 10 cards in total
    const cardWidth = document.querySelector('.property').offsetWidth + 20; // Including margin

    // Update current index
    currentIndex += direction;

    // Looping behavior for cards
    if (currentIndex < 0) currentIndex = 0;  // Don't go beyond the first card
    if (currentIndex >= totalCards) currentIndex = totalCards - 1;  // Don't go beyond the last card

    // Move the slider container
    cards.style.transform = `translateX(-${cardWidth * currentIndex}px)`;

    // Show the "View More Listings" button once the last card is reached
    if (currentIndex === totalCards - 1) {
        document.getElementById('viewMoreBtn').style.display = 'block';
    } else {
        document.getElementById('viewMoreBtn').style.display = 'none';
    }
}

// Ensure the button is displayed if we're at the last card initially
document.addEventListener("DOMContentLoaded", function () {
    const totalCards = document.querySelectorAll('.property').length;

    // If the page loads with the slider showing the last card, show the "View More Listings" button
    if (currentIndex === totalCards - 1) {
        document.getElementById('viewMoreBtn').style.display = 'block';
    } else {
        document.getElementById('viewMoreBtn').style.display = 'none';
    }
});


