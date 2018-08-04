export const startCounter = () => {
  console.log('counting');
  const counter = document.getElementById('counter');
  counter.innerHTML=0;
};

export const incrementCounter = () => {
  console.log('counting');
  const counter = document.getElementById('counter');
  counter.innerHTML++;
};

export const getScore = () => {
  return document.getElementById('counter').innerHTML;
};

export const startTimer = () => {
  console.log('timing');
  const timer = document.getElementById('timer');
  setInterval(function() {
    timer.innerHTML++
  }, 1000);
};

export const getTime = () => {
  return document.getElementById('timer').innerHTML;
};
