const form = document.querySelector("#webform");

const firstNameOutput = document.querySelector("#first_name_output");
const lastNameOutput = document.querySelector("#last_name_output");
const ageOutput = document.querySelector("#alder_output");
const emailOutput = document.querySelector("#email_output");
const datoOutput = document.querySelector("#dato_output");
const messageOutput = document.querySelector("#beskrivelse_output");
const accepterOutput = document.querySelector("#terms_output");
const kendetegnOutput = document.querySelector("#kendetegn_output");

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);

  firstNameOutput.textContent = formData.get("first_name");
  lastNameOutput.textContent = formData.get("last_name");
  ageOutput.textContent = formData.get("alders_gruppe");
  emailOutput.textContent = formData.get("Email");
  datoOutput.textContent = formData.get("dato");
  kendetegnOutput.textContent = formData.getAll("kendetegn").join(", ");
  messageOutput.textContent = formData.get("message");

  const accepter = form.querySelector("#accepter").checked;
  accepterOutput.textContent = accepter ? "Ja" : "Nej";

  form.reset();
}

form.addEventListener("submit", handleSubmit);
