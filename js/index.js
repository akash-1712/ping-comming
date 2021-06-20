const form = document.querySelector(".form");
const email = document.querySelector(".input-email-address");

const emailCheck = function (email) {
  const checker =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return email.match(checker);
};
const removeMessage = function (cls) {
  document.querySelectorAll(cls)?.forEach((val) => {
    val.remove();
  });
};
const submitForm = function (event) {
  event.preventDefault();
  if (emailCheck(email.value) && email.value != "") {
    const markup = ` <p class="message">Form Submit successfully.</p>`;
    form.insertAdjacentHTML("beforeend", markup);
    email.style.border = "2px solid hsl(223, 87%, 63%)";
    removeMessage(".error");
    email.value = "";
  } else {
    const markup = `<p class="error">${email.dataset.email}</p>`;
    form.insertAdjacentHTML("beforeend", markup);
    email.style.border = "2px solid hsl(354, 100%, 66%) ";
    removeMessage(".message");
  }
};
form.addEventListener("submit", submitForm);
