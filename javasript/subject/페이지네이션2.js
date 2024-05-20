const container = document.querySelector('.nation_container');
const data = [
    '../image/bg1.jpg',
    '../image/bg2.jpg',
    '../image/bg3.jpg',
    '../image/bg4.jpg',
    '../image/bg5.jpg'
];
let currentIndex = 0;
let intervalId;
let isRunning = true;

// Create links
for (let i = 0; i < data.length; i++) {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = `${i + 1}`;
    link.setAttribute('class', `nationBox`);
    link.dataset.index = i; // Store the index in a data attribute
    container.appendChild(link);
}

const img = document.querySelector('#main_container img');
const links = document.querySelectorAll('.nationBox');

// Function to change image
const changeImage = () => {
    currentIndex = (currentIndex + 1) % data.length;
    img.src = data[currentIndex];
    links.forEach(link => link.classList.remove('nation1'));
    links[currentIndex].classList.add('nation1');
};

// Start automatic image change
const startInterval = () => {
    intervalId = setInterval(changeImage, 2000);
};

// Stop automatic image change
const stopInterval = () => {
    clearInterval(intervalId);
};

// Toggle auto change on image click
img.addEventListener('click', () => {
    if (isRunning) {
        stopInterval();
    } else {
        startInterval();
    }
    isRunning = !isRunning;
});

// Event listeners for links
links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        stopInterval();
        currentIndex = parseInt(this.dataset.index);
        img.src = data[currentIndex];
        links.forEach(link => link.classList.remove('nation1'));
        this.classList.add('nation1');
        if (isRunning) {
            startInterval();
        }
    });
});

// Initialize
startInterval();