const myForm = document.getElementById('form-order');
const button = document.getElementById('form-send-button');

button.addEventListener('click', (e) => {
    e.preventDefault();
    if (validateForm(myForm)) {
        const formData = new FormData(myForm);
        formData.append('name', myForm.elements.name.value);
        formData.append('phone', myForm.elements.phone.value);
        formData.append('comment', myForm.elements.comment.value);
        formData.append('to', 'webpuritycg@gmail.com');

        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(JSON.stringify(formData));

        xhr.addEventListener('load', () => {
            console.log(xhr.response);
        })
    }
});

function validateForm(form) {
    let valid = true;
    if (!validateField(myForm.elements.name)) {
        valid = false;
    }
    if (!validateField(myForm.elements.phone)) {
        valid = false;
    }
    if (!validateField(myForm.elements.comment)) {
        valid = false;
    }
    return valid;
}

function validateField(field) {
    return field.checkValidity();
}