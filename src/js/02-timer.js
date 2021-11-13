import  flatpickr  from  'flatpickr' ;

import 'flatpickr/dist/flatpickr.min.css';


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day)) ;
  // Remaining hours
  const hours =  addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

const refs = {
    buttonStart: document.querySelector("[data-start]"),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
    input: document.querySelector('#datetime-picker'),
}

let selectDate ;
 refs.buttonStart.setAttribute("disabled","disabled");


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      selectDate = selectedDates[0];
      const currentDate = Date.now();
      if (selectedDates[0] < currentDate) {
          alert("Please choose a date in the future")
      } else {
          refs.buttonStart.removeAttribute("disabled");

   }
  },
};


refs.input.flatpickr(options);

refs.buttonStart.addEventListener('click',onStartClick)


function onStartClick() {
   const timerId = setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = selectDate - currentTime;
        const time = convertMs(deltaTime);
        console.log(time)
     updateTime(time)


 refs.buttonStart.setAttribute("disabled","disabled")
  if (deltaTime <= 1000) {
      clearInterval(timerId);

    }
    }, 1000)
}






function updateTime({ days, hours, minutes, seconds }) {
refs.days.textContent = days;
refs.hours.textContent = hours;
refs.minutes.textContent = minutes;
refs.seconds.textContent = seconds;
}


function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

