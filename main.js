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
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    image: './images/card1.svg',
    technologies: ['html', 'css', 'JavaScript'],
    link: 'https://www.tripadvisor.co/Attractions-g652402-Activities-Manizales_Caldas_Department.html',
    source: 'https://github.com/robinbenitezmora/Portfolio-Robin-Benitez',
  },
  {
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    image: './images/card2.svg',
    technologies: ['html', 'css', 'JavaScript'],
    link: 'https://www.tripadvisor.co/Attractions-g652402-Activities-Manizales_Caldas_Department.html',
    source: 'https://github.com/robinbenitezmora/Portfolio-Robin-Benitez',
  },
  {
    name: 'Facebook 360',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    image: './images/card3.svg',
    technologies: ['html', 'css', 'JavaScript'],
    link: 'https://www.tripadvisor.co/Attractions-g652402-Activities-Manizales_Caldas_Department.html',
    source: 'https://github.com/robinbenitezmora/Portfolio-Robin-Benitez',
  },
  {
    name: 'Uber Navigation',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.',
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
const popupImage = document.getElementById('modal-image');

const openModal = (projectNumber = null) => {
  if (projectNumber != null) {
    const tech = projects[projectNumber].technologies;
    let techShow = '';
    tech.forEach((item) => { techShow += `<li>${item}</li>`; });

    popup.style.width = '100%';
    popup.style.left = '0';
    popup.style.top = '0';
    popupTitle.innerText = projects[projectNumber].name;
    popupDescription.innerText = projects[projectNumber].description;
    btnDetailLive.href = projects[projectNumber].link;
    btnDetailSource.href = projects[projectNumber].source;
    popupImage.src = projects[projectNumber].image;
  }
};

const closeModal = () => {
  popup.style.width = '0%';
  popup.style.left = '-100%';
};

openPopup.addEventListener('click', openModal);
closePopup.addEventListener('click', closeModal);
