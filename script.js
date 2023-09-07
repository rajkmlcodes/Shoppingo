// JavaScript code for handling the hamburger menu
const hamburgerButton = document.getElementById('hamburger');
const navbarMenu = document.querySelector('.navbar-menu');

hamburgerButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});



// code for hero
const first = () => {
    document.getElementById("slide").src = "./images/4.png";
  };
  setInterval(first, 4000);
  
  const second = () => {
    document.getElementById("slide").src = "./images/2.png";
  };
  setInterval(second, 8000);
  
  const third = () => {
    document.getElementById("slide").src = "./images/1.png";
  };
  setInterval(third, 12000);
  
  const fourth = () => {
    document.getElementById("slide").src = "./images/3.png";
  };
  setInterval(fourth, 16000);





// JavaScript code for search functionality

// Function to perform the search
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const allProducts = document.querySelectorAll('.product');

    // Hide all products
    allProducts.forEach(product => {
        product.style.display = 'none';
    });

    // Show products that match the search term
    allProducts.forEach(product => {
        const productText = product.textContent.toLowerCase();
        if (productText.includes(searchTerm)) {
            product.style.display = 'block';
        }
    });

    // Hide section headings
    const sectionHeadings = document.querySelectorAll('h2');
    sectionHeadings.forEach(heading => {
        heading.style.display = 'none';
    });
}

// Listen for the Enter key press in the search input field
document.getElementById('searchInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        // Prevent the default form submission behavior
        event.preventDefault();
        // Call the searchProducts function to perform the search
        searchProducts();
    }
});



// JavaScript code for scroll functionality
const carousels = document.querySelectorAll('.product-carousel');

carousels.forEach((carousel, index) => {
    let isGrabbing = false;
    let startX = 0;
    let scrollLeft = 0;

    carousel.addEventListener('mousedown', (e) => {
        isGrabbing = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isGrabbing = false;
    });

    carousel.addEventListener('mouseup', () => {
        isGrabbing = false;
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isGrabbing) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });

    carousel.addEventListener('scroll', () => {
        if (isGrabbing) return;
        scrollLeft = carousel.scrollLeft;
    });
});


