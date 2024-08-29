(function () {
  emailjs.init(process.env.API_KEY);
})();

document
  .getElementById("subscription-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

    const email = document.getElementById("email").value;
    const message = document.getElementById("message");

    if (validateEmail(email)) {
      emailjs
        .send("service_g3nxox9", "template_ktbhhmf", {
          email: email,
        })
        .then(
          function (response) {
            message.style.color = "green";
            message.textContent = "Thank you for subscribing!";
          },
          function (error) {
            message.style.color = "red";
            message.textContent = "There was an error. Please try again.";
          }
        );
    } else {
      message.style.color = "red";
      message.textContent = "Please enter a valid email address.";
    }
  });

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}
