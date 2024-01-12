import { nanoid } from 'nanoid';
import './style.css';

const passwordBtnEl = document.querySelector('button');
const diplayPasswordEl = document.querySelector('h2');

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  diplayPasswordEl.innerHTML = randomPassword;
});
