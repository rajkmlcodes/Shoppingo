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







// JavaScript code for modal functionality
document.addEventListener("DOMContentLoaded", function () {
    // Get the modal element
    const modal = document.getElementById("productModal");

    // Get the modal content elements
    const modalImg = document.getElementById("modalImg");
    const modalTitle = document.getElementById("modalTitle");
    const modalRatings = document.getElementById("modalRatings");
    const modalDescription = document.getElementById("modalDescription");
    const modalPrice = document.getElementById("modalPrice");

    // Get all product elements
    const products = document.querySelectorAll(".product");

    // Loop through each product and add a click event listener
    products.forEach((product) => {
        product.addEventListener("click", function () {
            // Get the product details
            const imgSrc = product.querySelector("img").src;
            const title = product.querySelector("h3").textContent;
            const description = product.querySelector("p").textContent;
            const price = product.querySelector(".price").textContent;

            // Open the modal and populate with product details
            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modalPrice.textContent = price;

            // You can implement ratings logic here if needed

            // Close the modal when the close button is clicked
            const closeBtn = document.querySelector(".close");
            closeBtn.addEventListener("click", function () {
                modal.style.display = "none";
            });

            // Close the modal when clicking outside the modal content
            window.addEventListener("click", function (event) {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            });
        });
    });
});







// // JavaScript code for modal functionality
// document.addEventListener("DOMContentLoaded", function () {
//     // Get the modal element
//     const modal = document.getElementById("productModal");

//     // Get the modal content elements
//     const modalImg = document.getElementById("modalImg");
//     const modalTitle = document.getElementById("modalTitle");
//     const modalRatings = document.getElementById("modalRatings");
//     const modalDescription = document.getElementById("modalDescription");
//     const modalPrice = document.getElementById("modalPrice");
//     const additionalImages = document.querySelector(".additional-images");

//     // Get all product elements
//     const products = document.querySelectorAll(".product");

//     // Loop through each product and add a click event listener
//     products.forEach((product) => {
//         product.addEventListener("click", function () {
//             // Get the product details
//             const imgSrc = product.querySelector("img").src;
//             const title = product.querySelector("h3").textContent;
//             const description = product.querySelector("p").textContent;
//             const price = product.querySelector(".price").textContent;

//             // Clear any existing additional images
//             additionalImages.innerHTML = "";

//             // Open the modal and populate with product details
//             modal.style.display = "block";
//             modalImg.src = imgSrc;
//             modalTitle.textContent = title;
//             modalDescription.textContent = description;
//             modalPrice.textContent = price;

//             // You can implement ratings logic here if needed

//             // Close the modal when the close button is clicked
//             const closeBtn = document.querySelector(".close");
//             closeBtn.addEventListener("click", function () {
//                 modal.style.display = "none";
//             });

//             // Close the modal when clicking outside the modal content
//             window.addEventListener("click", function (event) {
//                 if (event.target === modal) {
//                     modal.style.display = "none";
//                 }
//             });

//             // Create and append additional product images
//             for (let i = 1; i <= 3; i++) {
//                 const additionalImg = document.createElement("img");
//                 additionalImg.src = `additional-image-${i}.jpg`; // Replace with actual image URLs
//                 additionalImg.alt = `Additional Image ${i}`;
//                 additionalImg.classList.add("additional-image");

//                 // Add click event listener to update the main image
//                 additionalImg.addEventListener("click", function () {
//                     modalImg.src = additionalImg.src;
//                 });

//                 additionalImages.appendChild(additionalImg);
//             }
//         });
//     });
// });








// JavaScript code for modal functionality
document.addEventListener("DOMContentLoaded", function () {
    // Get the modal element
    const modal = document.getElementById("productModal");

    // Get the modal content elements
    const modalImg = document.getElementById("modalImg");
    const modalTitle = document.getElementById("modalTitle");
    const modalRatings = document.getElementById("modalRatings"); // Ratings container
    const modalDescription = document.getElementById("modalDescription");
    const modalPrice = document.getElementById("modalPrice");
    const additionalImages = document.querySelector(".additional-images");

    // Get all product elements
    const products = document.querySelectorAll(".product");

    // Loop through each product and add a click event listener
    products.forEach((product) => {
        product.addEventListener("click", function () {
            // Get the product details
            const imgSrc = product.querySelector("img").src;
            const title = product.querySelector("h3").textContent;
            const description = product.querySelector("p").textContent;
            const price = product.querySelector(".price").textContent;

            // Clear any existing additional images and ratings
            additionalImages.innerHTML = "";
            modalRatings.innerHTML = "";

            // Replace this with your actual rating logic
            const ratingsCount = 4.5; // Replace with the actual rating count (e.g., 4.5 stars)

            // Create and append the rating stars
            for (let i = 0; i < ratingsCount; i++) {
                const star = document.createElement("i");
                star.classList.add("bi", "bi-star-fill", "star");
                modalRatings.appendChild(star);
            }

            // Open the modal and populate with product details
            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modalPrice.textContent = price;

            // Close the modal when the close button is clicked
            const closeBtn = document.querySelector(".close");
            closeBtn.addEventListener("click", function () {
                modal.style.display = "none";
            });

            // Close the modal when clicking outside the modal content
            window.addEventListener("click", function (event) {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            });

            // Create and append additional product images
            for (let i = 1; i <= 3; i++) {
                const additionalImg = document.createElement("img");
                additionalImg.src = `additional-image-${i}.jpg`; // Replace with actual image URLs
                additionalImg.alt = `Additional Image ${i}`;
                additionalImg.classList.add("additional-image");

                // Add click event listener to update the main image
                additionalImg.addEventListener("click", function () {
                    modalImg.src = additionalImg.src;
                });

                additionalImages.appendChild(additionalImg);
            }
        });
    });
});
