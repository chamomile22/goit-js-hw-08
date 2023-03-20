import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('.feedback-form input[name="email"]');
const textareaMessage = document.querySelector(
  '.feedback-form textarea[name="message"]'
);

const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(handleSaveInputed, 500));
form.addEventListener('submit', handleFormSubmit);

function handleSaveInputed(event) {
  const savedInfo = {
    email: inputEmail.value,
    message: textareaMessage.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(savedInfo));
}

function fillWithSaved() {
  const data = localStorage.getItem(LOCALSTORAGE_KEY);
  if (data) {
    const info = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    inputEmail.value = info.email;
    textareaMessage.value = info.message;
  }
}

function handleFormSubmit(event) {
  event.preventDefault();

  const submittedInfo = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  console.log(submittedInfo);
  // console.log(`${}`);
  event.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

fillWithSaved();
