// import Notiflix from 'notiflix';

const form = document.querySelector(".form");


form.addEventListener("submit",formSubmit)


function formSubmit(e) {
  e.preventDefault();
const {
    elements: { delay, step, amount }
  } = e.currentTarget;

}

// console.log(formSubmit())

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) =>{
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
  })



}
