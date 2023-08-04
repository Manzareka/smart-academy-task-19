const form = document.querySelector("#sign-up");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passError = document.querySelector("#password-error");
const emailError = document.querySelector("#email-error");
const userNameError = document.querySelector("#username-error");
const modal = document.querySelector("#sign-up-modal");
const closeModal = document.querySelector(".modal-close");
const inputs = document.querySelectorAll("input");
const btn = document.querySelector(".open-sign-in");

const number = document.querySelector("#number");
const numberError = document.querySelector("#number-error");
const tel = document.querySelector("#tel");
const telError = document.querySelector("#tel-error");
const job = document.querySelector("#job");
const jobError = document.querySelector("#job-error");

function isUserNameValid() {
  if (/^\s*$/.test(username.value)) {
    userNameError.innerText = "username is required";
    username.classList.remove("correct");
    username.classList.add("error");
    return false;
  } else {
    userNameError.innerText = "";
    username.classList.remove("error");
    username.classList.add("correct");
    return true;
  }
}

function isEmailValid() {
  if (/^\s*$/.test(email.value)) {
    emailError.innerText = "email not valid";
    email.classList.remove("correct");
    email.classList.add("error");
    return false;
  } else if (!/@gmail.com$/.test(email.value)) {
    emailError.innerText = "email not valid";
    email.classList.remove("correct");
    email.classList.add("error");
    return false;
  } else {
    emailError.innerText = "";
    email.classList.remove("error");
    email.classList.add("correct");
    return true;
  }
}

function isPasswordValid() {
  if (password.value.length < 8) {
    passError.innerText = "password must be at least 8 characters";
    password.classList.remove("correct");
    password.classList.add("error");
    return false;
  } else {
    passError.innerText = "";
    password.classList.remove("error");
    password.classList.add("correct");
    return true;
  }
}

// Personal Number

function isNumberValid() {
  if (!/[0-9]/.test(number.value)) {
    numberError.innerText = "Personal number must consist of 11 numbers";
    number.classList.remove("correct");
    number.classList.add("error");
    return false;
  } else if (number.value.length !== 11) {
    numberError.innerText = "Personal number must consist of 11 numbers";
    number.classList.remove("correct");
    number.classList.add("error");
    return false;
  } else {
    numberError.innerText = "";
    number.classList.remove("error");
    number.classList.add("correct");
    return true;
  }
}

// Mobile Number

function isTelValid() {
  if (!/[0-9]/.test(tel.value)) {
    telError.innerText = "Mobile number must consist of 9 numbers";
    tel.classList.remove("correct");
    tel.classList.add("error");
    return false;
  } else if (tel.value.length !== 9) {
    telError.innerText = "Personal number must consist of 9 numbers";
    tel.classList.remove("correct");
    tel.classList.add("error");
    return false;
  } else {
    telError.innerText = "";
    tel.classList.remove("error");
    tel.classList.add("correct");
    return true;
  }
}

// Job Description

function isJobValid() {
  if (job.value.length > 50) {
    jobError.innerText = "Maximum number of symbols 50";
    job.classList.remove("correct");
    job.classList.add("error");
    return false;
  } else {
    jobError.innerText = "";
    job.classList.remove("error");
    job.classList.add("correct");
    return true;
  }
}

username.addEventListener("input", isUserNameValid);
email.addEventListener("input", isEmailValid);
password.addEventListener("input", isPasswordValid);
number.addEventListener("input", isNumberValid);
tel.addEventListener("input", isTelValid);
job.addEventListener("input", isJobValid);

form.addEventListener("submit", (e) => {
  const isUserNameValid = isUserNameValid();
  const isEmailValid = isEmailValid();
  const isPasswordValid = isPasswordValid();

  const isNumberValid = isNumberValid();
  const isTelValid = isTelValid();
  const isJobValid = isJobValid();

  if (
    isUserNameValid &&
    isEmailValid &&
    isPasswordValid &&
    isNumberValid &&
    isTelValid &&
    isJobValid
  ) {
    form.submit();
    form.reset();
    inputs.forEach((el) => el.classList.remove("correct"));
    modal.classList.add("open");
  }
});
