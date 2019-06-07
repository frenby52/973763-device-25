var contacts_link = document.querySelector(".contacts-link");
var popup = document.querySelector(".modal-write-us");
var modal_close = popup.querySelector(".modal-close");
var name_modal = popup.querySelector("[name=username]");
var form = popup.querySelector(".write-us-form");
var e_mail = popup.querySelector("[name=e-mail]");
var letter_content = popup.querySelector("[name=letter-content]");
var isStorageSupport = true;
var storage_name = "";
var storage_mail = "";

var contacts_map_link = document.querySelector(".contacts-map-link");
var map_popup = document.querySelector(".modal-map");
var modal_map_close = map_popup.querySelector(".modal-close");

contacts_map_link.addEventListener("click", function (evt) {
  evt.preventDefault();
  map_popup.classList.add("modal-map-show");
});

modal_map_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  map_popup.classList.remove("modal-map-show");
});

try {
  storage_name = localStorage.getItem("username");
  storage_mail = localStorage.getItem("usermail");
} catch (err) {
  isStorageSupport = false;
}

contacts_link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-write-us-show");
  if (storage_name && storage_mail) {
    name_modal.value = storage_name;
    e_mail.value = storage_mail;
    letter_content.focus();
  } else {
    name_modal.focus();
  }
});

modal_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-write-us-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if ( !name_modal.value || !e_mail.value || !letter_content.value ) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("username", name_modal.value);
        localStorage.setItem("usermail", e_mail.value);
      }
    }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-write-us-show") || map_popup.classList.contains("modal-map-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-write-us-show");
      popup.classList.remove("modal-error");
      map_popup.classList.remove("modal-map-show");
    }
  }
});
