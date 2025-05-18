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
    image: "image/ss.png",
    title: "BMI Calculator",
    description: "A calculator to calculate Body Mass Index.",
    src: "http://127.0.0.1:5500/frontend/BMI/index.html",
    
  },
   {
  image: "image/coat.webp",
     title: "HTML CSS",
     description: "A responsive navigation bar with smooth animations an",
     src: "http://127.0.0.1:5500/frontend/BMI/index.html",
    
  },
  
   {
     image: "image/coat.webp",
    title: "Landing space",
    description: "A responsive navigation bar with smooth animations an",
    src: "http://127.0.0.1:5500/frontend/BMI/index.html",
    
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
    <a href="${project.src}">View Project</a>
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
const people= [
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
const peopleContainer = document.getElementById("people-container");
people.forEach(people=> { 
  const card = document.createElement("div");
  card.className="people-card";

  card.innerHTML = `
    <img src="${people.image}" alt="${people.title}">
   
    <h3>${people.title}</h3>
    <p>${people.description}</p>
  `;
peopleContainer.appendChild(card);
}
);
 