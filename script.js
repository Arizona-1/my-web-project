console.log("JS connected!");

const projects = [
  { id: 1, title: "Сайт-візитка", tech: "HTML/CSS" },
  { id: 2, title: "Todo App", tech: "JavaScript" },
  { id: 3, title: "Портфоліо", tech: "HTML/CSS/JS" }
];

const container = document.querySelector('#projects-container');
const searchInput = document.querySelector('#search-input');

function createProjectCard(project) {
  return `
    <div class="project-card">
      <h3>${project.title}</h3>
      <p>${project.tech}</p>
    </div>
  `;
}

function renderProjects(list) {
  if (!container) return;

  const html = list
    .map(project => createProjectCard(project))
    .join('');

  container.innerHTML = html;
}

renderProjects(projects);

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const value = searchInput.value.toLowerCase();

    const filtered = projects.filter(project =>
      project.title.toLowerCase().includes(value)
    );

    renderProjects(filtered);
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