const form = document.querySelector('#form');
const firstname = document.querySelector('#first-name');
const lastname = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener('submit', e => {
    e.preventDefault();

    let firstName = firstname.value.trim();
    let lastName = lastname.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (firstName === '') {
        errorFunction(firstname, 'First name cannot be empty')
    } else {
        successFunction(firstname)
    }
    if (lastName === '') {
        errorFunction(lastname, 'Last name cannot be empty')
    } else {
        successFunction(lastname)
    }
    if (emailValue === '') {
        errorFunction(email, 'Email cannot be empty')
    } else if(!emailValue.match(pattern)) {
        errorFunction(email, 'Not a valid email')
    }
    else {
        successFunction(email)
    }
    if (passwordValue === '') {
        errorFunction(password, 'Password cannot be empty')
    } else {
        successFunction(password)
    }
});

function errorFunction(req, message) {
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message;
    req.className += 'error';
    span.className += 'error-text';
}

function successFunction(req) {
    req.className += 'success';
}