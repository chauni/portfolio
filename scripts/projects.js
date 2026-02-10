const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
const imageContainer = document.getElementById("imageContainer");
const captionContainer = document.getElementById("captionContainer");
const galleryImage = document.getElementById("galleryImage");
const galleryCaption = document.getElementById("galleryCaption");

const projectImages = [
    {
        src: "../images/portfolio-assets/ecommerce-site/nubook-landing.png", 
        alt: "image of an book e-commerce site's home page", 
        caption: "NuBook E-Commerce site - Home Page"
    },
    {
        src: "../images/portfolio-assets/ecommerce-site/nubook-products.png", 
        alt: "image of an book e-commerce site", 
        caption: "NuBook E-Commerce site - Product Page"
    },
    {
        src: "../images/portfolio-assets/ecommerce-site/nubook-checkout.png", 
        alt: "image of an book e-commerce site", 
        caption: "NuBook E-Commerce site - Checkout Page"
    }
]

let imageIndex = 0;

function showImage() {
    galleryImage.src = projectImages[imageIndex].src;
    galleryImage.alt = projectImages[imageIndex].alt;

    galleryCaption.textContent = projectImages[imageIndex].caption;
}

showImage();

previousBtn.addEventListener("click", () => {
    imageIndex--;
    if (imageIndex < 0) {
        imageIndex = projectImages.length - 1;
    }
    showImage();
})

nextBtn.addEventListener("click", () => {
    imageIndex++;
    if (imageIndex >= projectImages.length) {
        imageIndex = 0
    }
    showImage();
})

