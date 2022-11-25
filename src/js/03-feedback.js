import throttle from 'lodash.throttle';

const formData = {};
const formRef = document.querySelector('.feedback-form');
formRef.addEventListener('input', throttle(onFormData, 500));
formRef.addEventListener('submit', onFormSubmit);

dataStartStorage();

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  console.log(JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  // e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function dataStartStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  formData = data;
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  console.log('data.email',data.email);
  console.log('data.message',data.message);
  email.value = (data.email) ? data.email: "";
  message.value = (data.message) ? data.message: "";
};
