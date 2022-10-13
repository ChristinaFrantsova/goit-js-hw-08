import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

form.addEventListener('input', throttle(onTextareaInput, 500));
form.addEventListener('submit', onFormSubmit);

const LOCALSTORAGE_KEY = 'feedback-form-state';

// 1. Відстежую на формі подію input, і щоразу записуй у локальне сховище об'єкт
// з полями email і message, у яких зберігаю поточні значення полів форми.
// Ключ для сховища рядок "feedback-form-state"

function onTextareaInput(event) {
  const textObject = { email: email.value, message: message.value };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(textObject));
  //   console.log(event);
  //   console.log(textObject);
}
// 2. Під час завантаження сторінки перевіряю стан сховища, і якщо там є збережені дані,
//     заповнюю ними поля форми.В іншому випадку поля повинні бути порожніми.
savedTextArea();

function savedTextArea(event) {
  const savedText = localStorage.getItem(LOCALSTORAGE_KEY);

  if (savedText) {
    console.log(savedText);
    email.value = JSON.parse(savedText).email;
    message.value = JSON.parse(savedText).message;
  }
}
// 3. Під час сабміту форми очищую сховище і поля форми, а також вивожу у консоль
// об'єкт з полями email, message та їхніми поточними значеннями.

function onFormSubmit(event) {
  event.preventDefault();
  console.log({
    email: email.value,
    message: message.value,
  });
  event.target.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
