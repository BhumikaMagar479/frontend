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
    image: "image/per.jpeg",
    title: "Animated Navbar",
    description: "A responsive navigation bar with smooth animation an",
  },
   {
  image: "image/coat.webp",
     title: "HTML CSS",
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
    <img src="${project.image}" alt="${project.title}" />
    <h3>${project.title}</h3>
    <p>${project.description}</p>
  `;
    container.appendChild(card);
});
const service= [
  {
    image: "image/coat.webp",
    title: "Modern Approach:",
    description: " A Nepalese fashion brand known for its modern stylish.",
    
  },
  {
    image: "image/coat.webp",
    title: "Wide Range of Products:",
    description: "HUBA offers a diverse range of clothing, including tops, bottoms, and sets, catering to various tastes and styles.",
    
  },
 { 
  image: "image/coat.webp",
  title: "Inspiration:",
  description: "HUBA's name, inspired by the Aramaic word for love reflects its commitment to infusing passion and affection into its designs.",
 
},
];
const serviceContainer = document.getElementById("service-container");
service.forEach(service => { 
  const card = document.createElement("div");
  card.className="service-card";

  card.innerHTML = `
    <img src="${service.image}" alt="${service.title}">
   
    <h3>${service.title}</h3>
    <p>${service.description}</p>
  `;
  serviceContainer.appendChild(card);
}
);