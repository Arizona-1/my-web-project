console.log("JS connected!");

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

const themeBtn = document.querySelector('#theme-toggle');
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });
}

const openBtn = document.querySelector('#open-modal');
const closeBtn = document.querySelector('#close-modal');
const modal = document.querySelector('#modal');
const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#user-name');

if (openBtn && modal) {
  openBtn.addEventListener('click', () => modal.classList.add('is-open'));
}

if (closeBtn && modal) {
  closeBtn.addEventListener('click', () => modal.classList.remove('is-open'));
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal) modal.classList.remove('is-open');
});

if (form && nameInput && modal) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (nameInput.value.trim().length < 2) {
      alert("Ім'я має містити щонайменше 2 символи");
    } else {
      alert("Форму відправлено!");
      modal.classList.remove('is-open');
    }
  });
}