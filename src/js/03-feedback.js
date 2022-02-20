import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', throttle(onFormInput));
formRef.addEventListener('submit', onFormSubmit);

checkLocalStorage();

function onFormInput(event) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(createFieldStatusObject()));
}

function onFormSubmit(event) {
    event.preventDefault();
    console.log(createFieldStatusObject());
    formRef.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function createFieldStatusObject() {
    return {
        email: formRef.elements.email.value,
        message: formRef.elements.message.value,
    };
}

function checkLocalStorage() {
    let currentFieldStatus;
    try {
        currentFieldStatus = JSON.parse(localStorage.getItem(STORAGE_KEY));
        formRef.elements.email.value = currentFieldStatus.email;
        formRef.elements.message.value = currentFieldStatus.message;
    } catch (error) {

    };
}