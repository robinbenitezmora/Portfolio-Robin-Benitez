const openSlideMenu = document.querySelector('.menu');
const closeSlideMenu = document.querySelector('.cls');
const closeNav = document.querySelector('.items');

openSlideMenu.addEventListener('click', () => {
  document.getElementById('slide_menu').classList.add('active');
});

closeSlideMenu.addEventListener('click', () => {
  document.getElementById('slide_menu').classList.remove('active');
});

closeNav.addEventListener('click', () => {
  document.getElementById('slide_menu').classList.remove('active');
});

const projects = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/card1.svg',
    technologies: ['html', 'css', 'JavaScript'],
    link: 'https://www.tripadvisor.co/Attractions-g652402-Activities-Manizales_Caldas_Department.html',
    source: 'https://github.com/robinbenitezmora/Portfolio-Robin-Benitez',
  },
  {
    name: 'Multi-Post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    image: './images/card2.svg',
    technologies: ['html', 'css', 'JavaScript'],
    link: 'https://www.tripadvisor.co/Attractions-g652402-Activities-Manizales_Caldas_Department.html',
    source: 'https://github.com/robinbenitezmora/Portfolio-Robin-Benitez',
  },
  {
    name: 'Facebook 360',
    description: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    image: './images/card3.svg',
    technologies: ['html', 'css', 'JavaScript'],
    link: 'https://www.tripadvisor.co/Attractions-g652402-Activities-Manizales_Caldas_Department.html',
    source: 'https://github.com/robinbenitezmora/Portfolio-Robin-Benitez',
  },
  {
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    image: './images/card4.svg',
    technologies: ['html', 'css', 'JavaScript'],
    link: 'https://www.tripadvisor.co/Attractions-g652402-Activities-Manizales_Caldas_Department.html',
    source: 'https://github.com/robinbenitezmora/Portfolio-Robin-Benitez',
  },
];

const popup = document.getElementById('modal');
const popupTitle = document.getElementById('modal-title');
const popupDescription = document.getElementById('modal-description');
const popupLanguajes = document.getElementById('modal-technologies');
const btnDetailLive = document.getElementById('modal-see-live');
const btnDetailSource = document.getElementById('modal-see-source');
const popupImageMobile = document.getElementById('modal-image-mobile');
const popupImageDesktop = document.getElementById('modal-image-desktop');

const openModal = (projectNumber = null) => {
  if (projectNumber != null) {
    const tech = projects[projectNumber].technologies;
    let techShow = '';
    tech.forEach((item) => { techShow += `<li class="badget">${item}</li>`; });

    popup.style.width = '100%';
    popup.style.left = '0';
    popup.style.top = '0';
    popupTitle.innerText = projects[projectNumber].name;
    popupDescription.innerText = projects[projectNumber].description;
    popupLanguajes.innerHTML = techShow;
    btnDetailLive.href = projects[projectNumber].link;
    btnDetailSource.href = projects[projectNumber].source;
    popupImageMobile.src = projects[projectNumber].image;
    popupImageDesktop.src = projects[projectNumber].image;
  }
};

const closeModal = () => {
  popup.style.width = '0%';
  popup.style.left = '-100%';
};

openModal();
closeModal();

// Validation of the form
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');

function validateName () {
  const name = document.getElementById('name');
  if (name.value.length === 0) {
    nameError.innerText = 'Your name is required';
    return false;
  } if (!name.value.match(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/)) {
    nameError.innerText = 'Write your name correctly';
    return false;
  }
  nameError.innerHTML = '<span class="fa-solid fa-circle-check"></span>';
  return true;
}

function validateEmail () {
  const email = document.getElementById('email');
  if (email.value.length === 0) {
    emailError.innerText = 'Your email is required';
    return false;
  } if (!email.value.match(/^[a-z._\-[0-9]*[@][a-z]*\.[a-z]{2,4}$/)) {
    emailError.innerText = 'Write your email correctly';
    return false;
  }
  emailError.innerHTML = '<span class="fa-solid fa-circle-check"></span>';
  return true;
}

function validateMessage () {
  const message = document.getElementById('message-area');
  if (message.value.length === 0) {
    messageError.innerText = 'Your message is required';
    return false;
  } if (message.value.length < 5 || message.value.length > 500) {
    messageError.innerText = 'Write your message between 5 and 500 characters';
    return false;
  }
  messageError.innerHTML = '<span class="fa-solid fa-circle-check"></span>';
  return true;
}

function validateForm () {
  if (validateName() && validateEmail()) {
    submitError.style.display = 'none';
    return true;
  }
  submitError.style.display = 'block';
  submitError.innerText = 'Please fill out the form correctly';
  setTimeout(function() { submitError.style.display = 'none'; }, 3000);
  return false;
}

function validateFormSubmit () {
  if (validateForm()) {
    document.getElementById('form').submit();
  }
}