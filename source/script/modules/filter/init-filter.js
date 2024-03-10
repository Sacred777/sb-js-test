import jsonData from "../../../../public/projects.json";

export function initialDataWork() {
  const template = document.querySelector('[data-template="project-card"]').content;

  const parentElement = document.querySelector('[data-project="parent"]');
  parentElement.style.opacity = 1;

  function fillCardWithData(cardTemplate, data) {
    const cardClone = cardTemplate.cloneNode(true);
    cardClone.querySelector('.product-card').classList.add(...data.classes);
    cardClone.querySelector('.product-card__title').textContent = data.title;
    cardClone.querySelector('.product-card__label').textContent = data.label;
    cardClone.querySelector('.product-card__img').src = data.src;
    cardClone.querySelector('.product-card__img').height = data.height;
    cardClone.querySelector('.product-card__img').width = data.width;
    cardClone.querySelector('.product-card__img').alt = data.alt;
    cardClone.querySelector('.product-card__date').textContent = data.date;
    if (!data.hit) {
      cardClone.querySelector('.product-card__hit').style.display = "none";
    }
    cardClone.querySelector('.product-card__shadow-link').href = data.href;
    return cardClone;
  }

  function renderCards(data) {
    data.forEach(item => {
      const card = fillCardWithData(template, item);
      parentElement.appendChild(card);
    });
  }

  renderCards(jsonData);
}
