const btnEl = document.getElementById("btn");

const dateEl = document.getElementById("date");
const finalAge = document.getElementById("finalAge");


function clickeEvent() {
    const birthValue = dateEl.value;
    if (birthValue === "") {
        alert("Please Enter a Valid Date");
    } else {
        const get_age = getAge(birthValue);
        console.log(get_age);
        finalAge.innerHTML = `Your Age is ${get_age}`;
    }
}

function getAge(birthValue) {
    const currentDate = new Date();
    const birthDate = new Date(birthValue);
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    return age;

}

btnEl.addEventListener("click", clickeEvent)