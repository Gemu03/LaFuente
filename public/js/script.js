//Carrusel Start
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);
}
dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};
//Carrusel end
// testimonial section start
const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Cristian Timarán',
    position: 'Egresado',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
      "En el colegio La Fuente, se fomenta el trabajo en equipo y la colaboración entre sus estudiantes, lo cual me enseñó la importancia de unir fuerzas con mis compañeros para lograr avanzar en nuestro aprendizaje. Esta lección hoy en día ha sido fundamental para mi trayectoria profesional. Además de ofrecer una sólida base académica, el colegio me inculcó valores fundamentales como la solidaridad, el respeto y la responsabilidad. Todo esto enmedio de un entorno de aprendizaje enriquecedor y estimulante, donde los profesores se preocupaban verdaderamente por el éxito de sus estudiantes." 
  },
  {
    name: 'MARY LUZ SANCHEZ DIAZ',
    position: 'Egresada',
    photo: "assets/img/fotosComentarios/MaryLuz.jpg",
    text:
      "Mi colegio la Fuente el mejor. En el aprendi hacer una mujer disciplinada, Responsable y llena de valores. Después que salí del colegio he aplicada cada uno de ellos y hoy me siento feliz y orgullosa de ser un gran elemento para la Sociedad. Llena de mucho valores y virtudes." 
  },
  {
    name:"ANGIE PAOLA LEON GOMEZ",
    position:"Egresada",
    photo:"assets/img/fotosComentarios/AngiePaola.jpg",
    text:
    "Hola. saludos, mi opinion sobre el colegio es que tiene muy buen manejo educativo, es un lugar agradable para un estudiante al igual que la compañia y enseñanzas de los profesore, que hacen un rol importante en la institucion, mi experiencia sin duda es todos los momentos que pude estar con la banda de marchas del profesor gonzalo es una experiencia inolvidable."
  }
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}
setInterval(updateTestimonial, 10000);
// testimonial section end