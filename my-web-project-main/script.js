console.log("JS connected!");

// Частина 2: Список
const myProjects = [
  { id: 1, title: "Сайт-візитка", tech: "HTML/CSS" },
  { id: 2, title: "Магазин", tech: "JavaScript" }
];

const list = document.querySelector('#projects-list');
if (list) {
  myProjects.forEach(project => {
    const li = document.createElement('li');
    li.textContent = project.title + " (" + project.tech + ")";
    list.appendChild(li);
  });
}

// Частина 3: Тема
const themeBtn = document.querySelector('#theme-toggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// Частина 4: Модальне вікно
const openBtn = document.querySelector('#open-modal');
const closeBtn = document.querySelector('#close-modal');
const modal = document.querySelector('#modal');
const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#user-name');

openBtn.addEventListener('click', () => modal.classList.add('is-open'));
closeBtn.addEventListener('click', () => modal.classList.remove('is-open'));

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') modal.classList.remove('is-open');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (nameInput.value.trim().length < 2) {
    alert("Ім'я має містити щонайменше 2 символи");
  } else {
    alert("Форму відправлено!");
    modal.classList.remove('is-open');
  }
});