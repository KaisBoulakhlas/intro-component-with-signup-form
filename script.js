const form = document.forms[0];
const message = document.querySelectorAll(".message__empty");

const matchRegex = () => {
    const regExEmail= new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
    return regExEmail.test(form["email"].value);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    for(let i = 0; i < form.length - 1; i++){
        form[i].value === "" ? (message[i].style.visibility = "visible", form[i].classList.add("notValid")) : (message[i].style.visibility = "hidden", form[i].classList.remove("notValid")); 
    }   
    form["email"].value !== "" ? !matchRegex() ? (message[2].style.visibility = "visible", message[2].innerText = "Looks like this is not an email", form["email"].classList.add("notValid")) : form["email"].classList.remove("notValid") : message[2].innerText = "Email Adress cannot be empty.";
})