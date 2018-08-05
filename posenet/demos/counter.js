
export const resetScore = () => {
  const score = document.getElementById('score');
  score.innerHTML=0;
};

export const incrementScore = () => {
  const score = document.getElementById('score');
  score.innerHTML++;
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
