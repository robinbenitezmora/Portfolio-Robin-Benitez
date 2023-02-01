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
    name: 'Crypto Coins',
    description:
      'We can provide you with real-time data on the prices and market trends of different cryptocurrencies, as well as its historical data to help you analyze market movements and make informed investment decisions.',
    image: './images/crypto_coins.png',
    technologies: ['html', 'css', 'JavaScript', 'React', 'Redux'],
    link: 'https://gregarious-pasca-272a68.netlify.app/',
    source: 'https://github.com/robinbenitezmora/crypto-coins',
  },
  {
    name: 'My Budget App',
    description:
      'This application allows you to input their income and expenses, and provides a visual representation of their financial situation in real-time. It often provides features to help to understand their spending habits and make informed decisions about their finances.',
    image: './images/my_budget_app.png',
    technologies: ['html', 'css', 'JavaScript', 'Ruby on Rails', 'PostgreSQL'],
    link: 'https://my-budget-manager-c423.onrender.com/',
    source: 'https://github.com/robinbenitezmora/My-Budget-Manager',
  },
  {
    name: 'Weather',
    description:
      'This application allows you to view current weather conditions, including temperature, humidity, wind speed, and precipitation. The user-friendly interface and visual representation of weather information makes it easy for you to stay informed about the weather and plan accordingly.',
    image: './images/weather.png',
    technologies: ['html', 'css', 'JavaScript', 'React', 'Redux'],
    link: 'https://moonlit-queijadas-da638a.netlify.app/',
    source: 'https://github.com/robinbenitezmora/capstone3',
  },
  {
    name: 'TV Shows',
    description:
      'This application allows you to keep track of the TV shows you watch and discover new ones. It allows users to create a list of shows they are currently watching, as well as write comments and ratings. The application makes it a convenient tool for individuals to manage their TV watching habits.',
    image: './images/tvseries.png',
    technologies: ['html', 'css', 'JavaScript'],
    link: 'https://gregarious-melba-45d9be.netlify.app/',
    source: 'https://github.com/robinbenitezmora/Capstone-2',
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
    tech.forEach((item) => {
      techShow += `<li class="badget">${item}</li>`;
    });

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
document.getElementById('form').addEventListener('submit', (event) => {
  const email = document.getElementById('email').value;
  if (email !== email.toLowerCase()) {
    event.preventDefault();
    const emailError = document.getElementById('email-error');
    emailError.classList.add('active');
  }
});

// Local Storage
const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userMessage = document.getElementById('message-area');

function saveData() {
  const userData = {
    name: userName.value,
    email: userEmail.value,
    message: userMessage.value,
  };
  localStorage.setItem('userData', JSON.stringify(userData));
}

userName.addEventListener('keyup', saveData);
userEmail.addEventListener('keyup', saveData);
userMessage.addEventListener('keyup', saveData);

const savedUserData = localStorage.getItem('userData');
document.getElementById('name').value = JSON.parse(savedUserData).name;
document.getElementById('email').value = JSON.parse(savedUserData).email;
document.getElementById('message-area').value = JSON.parse(savedUserData).message;
