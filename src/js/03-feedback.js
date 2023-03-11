//Adding lodash throttle from library
import { after, throttle } from 'lodash';
// Setting localStorage key as "feedback-form-state"
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector(`.feedback-form`);
const email = document.querySelector(`[name="email"]`);
const message = document.querySelector(`[name="message"]`);
const savedData = {};
// After reload  use saved data from localStorage and  put it in form if localStorage is empty empty should be empty too.
afterReload();
// Tracking email and message input event and saving it  in localStorage
// localStorage should update every 500 ms using lodash.throttle.
form.addEventListener('input', throttle(handleInput, 500));
// After sending form clear storage and imputs and put data object from send form in console.
form.addEventListener('submit', handleSubmit);

function handleInput(event) {
  savedData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
}

function handleSubmit(event) {
  event.preventDefault();
  const praseData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (praseData) {
    console.log(praseData);
  }
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function afterReload() {
  const praseData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (praseData) {
    email.value = praseData.email;
    message.value = praseData.message;
  } else {
    email.value = '';
    message.value = '';
  }
}
