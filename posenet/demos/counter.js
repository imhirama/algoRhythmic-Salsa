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
