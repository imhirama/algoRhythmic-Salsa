export const setText = (elementId, text) => {
  const element = document.getElementById(elementId);
  if (element.innerHTML !== text) {
    element.innerHTML=text;
  }
};

export const setTitle = (text) => {
  setText('titleText', text);
};

export const setRightSideText = (text) => {
  setText('rightSideText', text);
};

