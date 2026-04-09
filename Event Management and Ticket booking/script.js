// Smooth scroll
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});


const slide = document.querySelectorAll('.slide');
const bg = document.querySelector('.bg');

let current = 0;

function updateSlider() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'left', 'right', 'hidden');

        if (index === current) {
            slide.classList.add('active');

            // Change background dynamically
            bg.style.backgroundImage = `url(${slide.querySelector('img').src})`;
        } 
        else if (index === (current - 1 + slides.length) % slides.length) {
            slide.classList.add('left');
        } 
        else if (index === (current + 1) % slides.length) {
            slide.classList.add('right');
        } 
        else {
            slide.classList.add('hidden');
        }
    });
}


// Click control
slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        current = index;
        updateSlider();
    });
});

let slides = document.querySelectorAll('.slide');
let index = 0;

function updateSlider() {
    slides.forEach(slide => slide.classList.remove('active'));

    slides[index].classList.add('active');
}

// Auto slide
setInterval(() => {
    index++;
    if (index >= slides.length) index = 0;
    updateSlider();
}, 3000);

// Click to focus
slides.forEach((slide, i) => {
    slide.addEventListener('click', () => {
        index = i;
        updateSlider();
    });
});
function openModal(src) {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup-img").src = src;
}

function closeModal() {
    document.getElementById("popup").style.display = "none";
}
let total = 0;

function addToCart(name, price) {
    let li = document.createElement("li");
    li.innerText = name + " - Rs " + price;

    document.getElementById("cart").appendChild(li);

    total += price;
    document.getElementById("total").innerText = total;
}
function placeOrder(e) {
    e.preventDefault();
    document.getElementById("success").innerText =
        "🎉 Order Placed Successfully!";
}