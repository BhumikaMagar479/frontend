const hamburger = document.getElementById ('hamburger');
const navlinks = document.getElementById ('nav-links');

 hamburger.addEventListener('click',() => {
 nav-links.classList.toggle('active');
});
const text = "Hi I'm Huba!";
const typedText = document.getElementById('typed-text');
let index = 0;

function type(){
    if (index < text.length){
        typedText.textContent += text.charAt(index);
        index++;
        setTimeout(type,150);
    }
}
type();

const projects = [
  {
    image: "image/coat.webp",
    title: "Animated Navbar",
    description: "A responsive navigation bar with smooth animation an",
  },
  {
    image: "image/coat.webp",
    title: "HYML CSS",
    description: "A responsive navigation bar with smooth animations an",
  },
  {
    image: "image/coat.webp",
    title: "Landing space",
    
    description: "A responsive navigation bar with smooth animations an",
  },
];
const container = document.getElementById("project-container");
projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
    <img scr="${project.image}" alt="${project.title}" />
    <h3>${project.title}</h3>
    <p>${project.description}</p>
  `;
    container.appendChild(card);
});