const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
const imageContainer = document.getElementById("imageContainer");
const captionContainer = document.getElementById("captionContainer");
const galleryImage = document.getElementById("galleryImage");
const galleryCaption = document.getElementById("galleryCaption");
const cardContainer = document.getElementById("cardContainer");

// const projectImages = [
//     {
//         src: "../images/portfolio-assets/ecommerce-site/nubook-landing.png", 
//         alt: "image of an book e-commerce site's home page", 
//         caption: "NuBook E-Commerce site - Home Page"
//     },
//     {
//         src: "../images/portfolio-assets/ecommerce-site/nubook-products.png", 
//         alt: "image of an book e-commerce site", 
//         caption: "NuBook E-Commerce site - Product Page"
//     },
//     {
//         src: "../images/portfolio-assets/ecommerce-site/nubook-checkout.png", 
//         alt: "image of an book e-commerce site", 
//         caption: "NuBook E-Commerce site - Checkout Page"
//     }
// ]

// let imageIndex = 0;

// function showImage() {
//     galleryImage.src = projectImages[imageIndex].src;
//     galleryImage.alt = projectImages[imageIndex].alt;

//     galleryCaption.textContent = projectImages[imageIndex].caption;
// }

// showImage();

// previousBtn.addEventListener("click", () => {
//     imageIndex--;
//     if (imageIndex < 0) {
//         imageIndex = projectImages.length - 1;
//     }
//     showImage();
// })

// nextBtn.addEventListener("click", () => {
//     imageIndex++;
//     if (imageIndex >= projectImages.length) {
//         imageIndex = 0
//     }
//     showImage();
// })

function displayProjects() {
    projectData.map((project) => {
        createCard(project.title, project.src, project.alt, project.caption, project.href, project.icon)
    })
}

function createCard(title, src, alt, caption, href, icon) {
    const cardTitle = document.createElement('h2')

    cardTitle.textContent = title
    const card = document.createElement('div')
    card.classList.add("card")

    const cardImg = document.createElement('img')
    cardImg.classList.add("card-img")
    cardImg.src = src
    cardImg.alt = alt

    const cardCaption = document.createElement('p')
    cardCaption.textContent = caption

    const cardBtnIcon = document.createElement('img')
    cardBtnIcon.classList.add("link-icon")
    if (!icon) {
        cardBtnIcon.style.display = "none"
    }
    cardBtnIcon.src = icon

    const cardBtn = document.createElement('a')
    cardBtn.innerHTML = "View Project"
    cardBtn.href = href
    cardBtn.classList.add("card-link")

    cardBtn.appendChild(cardBtnIcon)

    card.appendChild(cardImg)
    card.appendChild(cardTitle)
    card.appendChild(cardCaption)
    card.appendChild(cardBtn)

    cardContainer.appendChild(card)
    return card
}

displayProjects();