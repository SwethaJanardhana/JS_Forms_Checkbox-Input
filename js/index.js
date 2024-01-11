console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]');

hideTosError();
hideSuccessmessage();

function hideTosError() {
  tosError.setAttribute("hidden", "");
}
function showTosError() {
  tosError.removeAttribute("hidden");
}

function displaySuccessmessage() {
  successMessage.removeAttribute("hidden");
}

function hideSuccessmessage() {
  successMessage.setAttribute("hidden", "");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (tosCheckbox.checked) {
    displaySuccessmessage();
  } else {
    showTosError();
  }
});

tosCheckbox.addEventListener("input", (event) => {
  if (event.target.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});
