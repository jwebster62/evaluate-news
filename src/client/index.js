import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

import { urlValid } from "./js/urlChecker";
import { handleSubmit } from "./js/formHandler";

const form = document.querySelector("#main-form");
const urlInput = document.querySelector("#url");
const submitBtn = document.querySelector("#main-form input[type=submit]");
const errorContainer = document.querySelector("#main-form .error");

urlInput.addEventListener("keyup", e => {
    if (urlValid(e.target.value)) errorContainer.classList.add("hidden");
    else errorContainer.classList.remove("hidden");
});

form.addEventListener("submit", e => {
    e.preventDefault();
    const url = urlInput.value;

    if (urlValid(url)) {
        submitBtn.value = "Loading.......";
        handleSubmit(url, submitBtn);
    }
});
/*
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(registration => {
        console.log("SW registered: ", registration);
      })
      .catch(registrationError => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
*/