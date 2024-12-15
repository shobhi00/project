// Carousel logic (optional for dynamic multiple slides)
let stories = [
    {
        text: "Rupesh Kanna found himself in between jobs in 2016. He started a blog, and wrote about his past experience as a lab technician...",
        image: "person.jpg"
    },
    {
        text: "Another success story goes here. This is dynamic content.",
        image: "person2.jpg"
    }
];

let currentIndex = 0;

function updateStory() {
    const storyText = document.querySelector('.story .text blockquote p');
    const storyImage = document.querySelector('.story .image img');

    storyText.textContent = stories[currentIndex].text;
    storyImage.src = stories[currentIndex].image;
}

function nextStory() {
    currentIndex = (currentIndex + 1) % stories.length;
    updateStory();
}

function prevStory() {
    currentIndex = (currentIndex - 1 + stories.length) % stories.length;
    updateStory();
}
