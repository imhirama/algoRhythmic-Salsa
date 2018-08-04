import {setTitle, setRightSideText} from './outerText';

const levelFunctions = {
  1: level1,
  2: level2,
};


export default function levels(levelNum) {
  const currentLevel = levelFunctions[levelNum];
  currentLevel();
}

export function getCurrentLevel() {
  return 1;
}

export function level1() {
  setTitle('Level 1');
  setRightSideText('Stand completely within the white box');
};

export function level2() {
  setTitle('Level 2');
  setRightSideText('Turn to face the red dot, then reach out and touch it. Stay facing this direction.');
};

