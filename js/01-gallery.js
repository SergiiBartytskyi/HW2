import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

// Task
// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні.
// Подивися демо відео роботи галереї.
// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// 2. Реалізація делегування на ul.gallery і отримання url великого зображення.
// 3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.Використовуй CDN сервіс jsdelivr і
// додай у проект посилання на мініфіковані(.min) файли бібліотеки.
// 4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// 5. Заміна значення атрибута src елемента < img > в модальному вікні перед відкриттям.Використовуй готову розмітку
// модального вікна із зображенням з прикладів бібліотеки basicLightbox.
//
// Розмітка елемента галереї
// Посилання на оригінальне зображення повинно зберігатися в data-атрибуті source на елементі < img >, і вказуватися
// в href посилання.Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

// <li class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </li>

//     Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач буде
// перенаправлений на іншу сторінку.Заборони цю поведінку за замовчуванням.

// Закриття з клавіатури
// УВАГА
// Наступний функціонал не обов'язковий для здавання завдання, але буде хорошою додатковою практикою.

// Додай закриття модального вікна після натискання клавіші Escape.Зроби так, щоб прослуховування клавіатури було
// тільки доти, доки відкрите модальне вікно.Бібліотека basicLightbox містить метод для програмного закриття
// модального вікна.

const galleryEl = document.querySelector(".gallery");
const markup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(items) {
	return items
		.map(({ preview, original, description }) => {
			return `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
		})
		.join("");
}

galleryEl.innerHTML = markup;
galleryEl.addEventListener("click", onGalleryClick);

function onGalleryClick(e) {
	e.preventDefault();
	const image = e.target;

	if (image.nodeName !== "IMG") {
		return;
	}

	const instance = basicLightbox.create(`
       
        <img src="${image.dataset.source}" width="800" height="600">
`);
	instance.show();

	galleryEl.addEventListener("keydown", e => {
		if (e.code === "Escape") {
			instance.close();
		}
		return galleryEl.removeEventListener;
	});
}
