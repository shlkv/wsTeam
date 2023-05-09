;(function() {

    window.addEventListener('load', function() {

        const apiDomain = 'https://webteamstorm.ru';

        // поля формы для валидации
        let nameInp = document.querySelector('.feedback-form__input--name');
        let emailInp = document.querySelector('.feedback-form__input--email');
        let phoneInp = document.querySelector('.feedback-form__input--phone');
        // let msgInp = document.querySelector('.feedback-form__input--proj');
        
        // модальное окно фидбека
        let modal = document.querySelector('.modalBG')

        let emailErrTxt = document.querySelector('.feedback-form__error--email');
        let phoneErrTxt = document.querySelector('.feedback-form__error--phone');

        // кнопка отправки и ее данные
        let submitBtn = document.querySelector('.feedback-form__submit-btn');
        let submitBtnPreloader = document.querySelector('.submit-btn-loader'); // прелоадер для кнопки
        let submitBtnTxt = submitBtn.querySelector('.submit-btn-txt');

        // классы, которые будем переключать у элементов
        let modalHideClass = 'info-modal--hidden';
        let preloaderHiddenClass = 'submit-btn-loader--hidden';
        let infoModal; // сюда получаем модалку для вывода инфы о результате отправки


        // валидация полей: селекта и поля для ввода телефона
        function checkErrState() {
            let errState = false;
            const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            if (phoneInp.value.trim() === '') {
                phoneErrTxt.style.display = 'block';
                errState = true;
            } else {
                phoneErrTxt.style.display = 'none';
            }

            if (emailInp.value.trim() === '' || !emailReg.test(emailInp.value.trim())) {
                emailErrTxt.style.display = 'block';
                errState = true;
            } else {
                emailErrTxt.style.display = 'none';
            }

            return errState;
        }

        // сбрасывает введенные данные в форме
        function resetForm() {
            phoneInp.value = '';
            emailInp.value = '';
            nameInp.value = '';
            // msgInp.value = '';
        }

        function showModal(text) {
            infoModal.classList.remove(modalHideClass);
            submitBtnPreloader.classList.add(preloaderHiddenClass);
            submitBtnTxt.style.display = '';

            infoModal.textContent = text;

            setTimeout(() => {
                infoModal.classList.add(modalHideClass);
                submitBtn.removeAttribute('disabled', 'disabled');
            }, 3000);
        }

        // валидация формы и ее отправка
        async function submit(evt) {
            evt.preventDefault();

            if (checkErrState()) {
                return;
            }
            modal.style.display = "none";
            // делаем кнопку некликабельной и ставим прелоадер
            submitBtn.setAttribute('disabled', 'disabled');
            submitBtnTxt.style.display = 'none';
            submitBtnPreloader.classList.remove(preloaderHiddenClass);

            // формируем объект с данными для отправки на сервер
            let dataToSend = new FormData();
            dataToSend.append('name', nameInp.value);
            dataToSend.append('phone', phoneInp.value);
            dataToSend.append('email', emailInp.value);
            // dataToSend.append('message', msgInp.value);
            dataToSend.append('source', 'SEO-продвижение');

            try {
                // отправляем данные
                let response = await fetch(`${apiDomain}/api/ajax-send-order`, {
                    method: 'POST',
                    body: dataToSend
                });

                let json = await response.json();

                if (json.result == 'success') {
                    infoModal = document.querySelector('.success-modal');
                    resetForm();
                } else {
                    infoModal = document.querySelector('.error-modal');
                }

                showModal(json.message);
            } catch (err) {
                console.log(err);
                infoModal = document.querySelector('.error-modal');
                showModal('Ошибка: данные не отправлены');
            }

        } // submit

        // ----------------------
        submitBtn.addEventListener('click', (evt) => submit(evt));

    });

})()