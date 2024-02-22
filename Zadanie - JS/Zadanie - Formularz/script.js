function blurFunction() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const dob = document.getElementById('dob');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    name.addEventListener("focus", function () {
        addErrorStylesOnBlur(name, 'Proszę podać imię i nazwisko.');
    });
    email.addEventListener("focus", function () {
        addErrorStylesOnBlur(email, 'Proszę podać poprawny adres email.');
    });
    dob.addEventListener("focus", function () {
        addErrorStylesOnBlur(dob, 'Proszę podać datę urodzenia.');
    });
    password.addEventListener("focus", function () {
        addErrorStylesOnBlur(password, 'Hasło musi mieć co najmniej 8 znaków, w tym przynajmniej jedną cyfrę.');
    });
    confirmPassword.addEventListener("focus", function () {
        addErrorStylesOnBlur(confirmPassword, 'Powtórzone hasło nie zgadza się z hasłem.');
    });
}

// Funkcja dodająca gwiazdkę błędu do pola
function addErrorStar(inputId) {
    const inputElement = document.getElementById(inputId);
    const errorStarId = inputId + 'Star';

    // Sprawdzenie, czy gwiazdka błędu już istnieje
    if (!document.getElementById(errorStarId)) {
        const errorStar = document.createElement('span');
        errorStar.id = errorStarId;
        errorStar.className = 'error-star';
        errorStar.innerHTML = ' *';
        inputElement.parentNode.insertBefore(errorStar, inputElement.nextSibling);
    }
}

function addErrorStylesOnBlur(inputElement, errorMessage) {
    inputElement.addEventListener("blur", function () {
        const errorStarId = inputElement.id + 'Star';
        const errorList = document.getElementById('errorList');

        if (!inputElement.value.trim()) {
            inputElement.classList.add('error-border');
            addErrorStar(errorStarId);

            // Check if the error message is already in the errorList
            if (!errorList.innerHTML.includes(errorMessage)) {
                errorList.innerHTML += '<div>' + errorMessage + '</div>';
                errorFrame.style.display = 'block';
            }
        } else {
            inputElement.classList.remove('error-border');
            removeErrorStar(errorStarId);

            // Remove the error message from the errorList
            errorList.innerHTML = errorList.innerHTML.replace('<div>' + errorMessage + '</div>', '');
        }
    });
}

// Funkcja usuwająca gwiazdkę błędu z pola
function removeErrorStar(inputId) {
    const errorStar = document.getElementById(inputId + 'Star');
    if (errorStar) {
        errorStar.parentNode.removeChild(errorStar);
    }
}

function validateForm() {
  // Pobieranie wartości pól formularza
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const dob = document.getElementById('dob').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const description = document.getElementById('description').value;
  const nameBlur = document.getElementById('name');
    const emailBlur = document.getElementById('email');
    const dobBlur = document.getElementById('dob');
    const passwordBlur = document.getElementById('password');
    const confirmPasswordBlur = document.getElementById('confirmPassword');
    const descriptionBlur = document.getElementById('description');

    nameBlur.addEventListener("blur", blurFunction);
    emailBlur.addEventListener("blur", blurFunction);
    dobBlur.addEventListener("blur", blurFunction);
    passwordBlur.addEventListener("blur", blurFunction);
    confirmPasswordBlur.addEventListener("blur", blurFunction);
    descriptionBlur.addEventListener("blur", blurFunction);

  // Pobieranie elementu listy błędów
  const errorList = document.getElementById('errorList');

  // Flaga określająca, czy formularz jest poprawny
  let isValid = true;

  // Ukrycie ramki błędów na początku walidacji
  errorFrame.style.display = 'none';

  // Resetowanie błędów
  errorList.innerHTML = '';
  
  // Walidacja imienia i nazwiska
  if (!name.trim()) {
      isValid = false;
      document.getElementById('name').classList.add('error-border');
      addErrorStar('nameStar');
      errorList.innerHTML += '<div>Proszę podać imię i nazwisko.</div>';
  } else {
      document.getElementById('name').classList.remove('error-border');
      removeErrorStar('nameStar');
  }

  // Walidacja adresu email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      isValid = false;
      document.getElementById('email').classList.add('error-border');
      addErrorStar('emailStar');
      errorList.innerHTML += '<div>Proszę podać poprawny adres email.</div>';
  } else {
      document.getElementById('email').classList.remove('error-border');
      removeErrorStar('emailStar');
  }

  // Walidacja daty urodzenia
  if (!dob) {
      isValid = false;
      document.getElementById('dob').classList.add('error-border');
      addErrorStar('dobStar');
      errorList.innerHTML += '<div>Proszę podać datę urodzenia.</div>';
  } else {
      document.getElementById('dob').classList.remove('error-border');
      removeErrorStar('dobStar');
  }

  // Walidacja hasła
  const passwordRegex = /^(?=.*\d).{8,}$/;
  if (!passwordRegex.test(password)) {
      isValid = false;
      document.getElementById('password').classList.add('error-border');
      addErrorStar('passwordStar');
      errorList.innerHTML += '<div>Hasło musi mieć co najmniej 8 znaków, w tym przynajmniej jedną cyfrę.</div>';
  } else {
      document.getElementById('password').classList.remove('error-border');
      removeErrorStar('passwordStar');
  }

  // Walidacja powtórzonego hasła
  if (password !== confirmPassword) {
      isValid = false;
      document.getElementById('confirmPassword').classList.add('error-border');
      addErrorStar('confirmPasswordStar');
      errorList.innerHTML += '<div>Powtórzone hasło nie zgadza się z hasłem.</div>';
  } else {
      document.getElementById('confirmPassword').classList.remove('error-border');
      removeErrorStar('confirmPasswordStar');
  }

  // Walidacja opisu
  if (description.length > 20) {
      isValid = false;
      document.getElementById('description').classList.add('error-border');
      addErrorStar('descriptionStar');
      errorList.innerHTML += '<div>Opis może mieć maksymalnie 20 znaków.</div>';
  } else {
      document.getElementById('description').classList.remove('error-border');
      removeErrorStar('descriptionStar');
  }

  // Wyświetlenie ramki błędów, jeśli formularz jest niepoprawny
  if (!isValid) {
      errorFrame.style.display = 'block';
  }

  // Jeśli formularz jest poprawny, można wysłać dane
  if (isValid) {
      alert('Formularz został pomyślnie wysłany!');
  }
}
