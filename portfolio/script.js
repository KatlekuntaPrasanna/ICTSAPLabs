document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "" || email === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "All fields are required!";
        return;
    }

    if (!email.match(emailPattern)) {
        formMessage.style.color = "red";
        formMessage.textContent = "Please enter a valid email address!";
        return;
    }

    formMessage.style.color = "green";
    formMessage.textContent = "Message sent successfully!";

    document.getElementById("contactForm").reset();
});
