const container = document.querySelector(".container");
const subscribed = document.querySelector(".subscribed");
const emailInput = document.querySelector(".emailInput");
const userEmailAddress = document.querySelector(".user-email");
const monthlyNews = document.querySelector('.subscribe');




container.addEventListener("click", (event) => {
    if (emailInput.checkValidity()){
        userEmailAddress.textContent = emailInput.value;
        container.style.display = "none";
        subscribed.style.display = "block";
    }
});

let dismissMessage = () => {
    subscribed.style.display = "none";
    container.style.display = "block";
}



// if(subscriptionBtn.click === true){
//     return subscribed;
// }

// let subscription = () => {
//     if(subscriptionBtn == ){
//         subscriptionBtn.display.style = "none";
//     }
// }