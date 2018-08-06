
export const resetScore = () => {
  const score = document.getElementById('score');
  score.innerHTML=0;
};

export const incrementScore = (amount=1) => {
  const score = document.getElementById('score');
  score.innerHTML = +score.innerHTML+amount;
};

export const getScore = () => {
  return document.getElementById('score').innerHTML;
};

export const startTimer = () => {
  const timer = document.getElementById('timer');
  setInterval(function() {
    timer.innerHTML++
  }, 1000);
};

export const getTime = () => {
  return document.getElementById('timer').innerHTML;
};
