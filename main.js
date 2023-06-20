const container = document.querySelector(".container");
const subscribed = document.querySelector(".subscribed");
const emailInput = document.querySelector(".emailInput");
const errorMessage = document.querySelector('#error-message');

container.addEventListener("click", () => {
  if (emailInput.checkValidity()) {
    container.style.display = "none";
    subscribed.style.display = "block";
  } else {
    displayError();
  }
});

function dismissMessage() {
  subscribed.style.display = "none";
  container.style.display = "block";
}

function displayError() {
  errorMessage.style.display = "block";
}

// if(subscriptionBtn.click === true){
//     return subscribed;
// }

// let subscription = () => {
//     if(subscriptionBtn == ){
//         subscriptionBtn.display.style = "none";
//     }
// }
