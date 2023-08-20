import { Notify } from 'notiflix/build/notiflix-aio'

const form = document.querySelector('.form');



form.addEventListener("submit", onCreatePromise)

function onCreatePromise(event) {
  event.preventDefault();

  console.log(form)

  const {delay, step, amount } = form.elements

  const delayVal = delay.value
  const stepVal = step.value
  const amountVal = amount.value

  if (!delayVal || !stepVal || !amountVal) {
    Notify.warning('Please enter valid fields');
    return;
  }

  let resultdelay = +delayVal

  for (let i = 1; i <= amountVal; i++) {
    createPromise(i, resultdelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {

        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    resultdelay += +stepVal
  }
}



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => { 
    setTimeout(() => { 
       if (shouldResolve) {
         // Fulfill
         resolve({ position, delay });
       } else {
         // Reject
         reject({ position, delay });
       }
    }, delay)
  })
}




