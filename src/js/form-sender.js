(function () {
    const myForm = document.getElementById('form-order');
    const button = document.getElementById('form-send-button');
    button.addEventListener('click', (e) => {

        if (validateForm(myForm)) {
            e.preventDefault();
            const formData = new FormData();
            formData.append('name', myForm.elements.name.value);
            formData.append('phone', myForm.elements.phone.value);
            formData.append('comment', myForm.elements.comment.value);
            formData.append('to', 'webpuritycg@gmail.com');

            const xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.send(formData);
            xhr.addEventListener('load', () => {
                showModal(xhr.response.message);
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
        if (!validateField(myForm.elements.street)) {
            valid = false;
        }
        if (!validateField(myForm.elements.house)) {
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

    function showModal(message) {
        const overlay = document.querySelector('.order-overlay');
        const text = overlay.querySelector('.order-overlay__text');
        const box = overlay.querySelector('.order-overlay__box');
        const buttonClose = overlay.querySelector('.order-overlay__close');

        overlay.style.animation = 'fadeIn .4s ease both';
        box.style.animation = 'bounceScaleIn .4s ease both';
        text.textContent = message;
        document.body.style.overflow = 'hidden';
        overlay.style.visibility = 'visible';
        overlay.style.transition = 'visibility 0s';


        function hideOverlay() {
            overlay.style.opacity = '0';
            document.body.style.overflow = 'initial';
            overlay.style.animation = 'fadeOut .4s ease both';
            box.style.animation = 'bounceScaleOut .4s ease both';
            overlay.style.visibility = 'hidden';
            overlay.style.transition = 'visibility 0s .4s';
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                hideOverlay();
            }
        });

        buttonClose.addEventListener('click', (e) => {
            hideOverlay();
        });
    }
})();