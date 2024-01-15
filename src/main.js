import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';

const passwordBtnEl = document.querySelector('button');
const diplayPasswordEl = document.querySelector('h2');

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  diplayPasswordEl.innerHTML = randomPassword;
});

diplayPasswordEl.addEventListener('click', (event) => {
  copy(event.target.innerHTML);
  alert('Senha copiada com sucesso!');
});
