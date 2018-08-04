import {setTitle, setRightSideText} from './outerText';
import {getScore, getTime} from './counter';
import {drawText, drawRect} from './demo_util';
import {videoDimensions} from './trackingMovements';

const levelFunctions = {
  1: level1,
  2: level2,
};


export default function levels(levelNum, ctx) {
  const currentLevel = levelFunctions[levelNum];
  currentLevel(ctx);
}

export function getCurrentLevel() {
  console.log(Math.ceil((getTime()+1)/100));
  return Math.ceil((getTime()+1)/100);
}

export function levelTitle(ctx, levelNum, instructions) {
  const {height, width} = videoDimensions();
  drawRect(ctx, width/3+width/20, height/7, 'rgba(28, 25, 22, 0.69)', 0, height*(3/4));
  drawText(ctx, `Level ${levelNum}`, 20, height*(3/4)+height/8, 'white', '100px Raleway');
  // drawText(ctx, instructions, 50, height/2 + height/4, 'white', '35px Raleway');
}

export function level1(ctx) {
  setTitle('Level 1');
  setRightSideText('Stand completely within the white box');
  levelTitle(ctx, 1, 'Stand completely within the white box');
};

export function level2(ctx) {
  setTitle('Level 2');
  setRightSideText('Turn to face the red dot, then reach out and touch it. Stay facing this direction.');
  levelTitle(ctx, 2, 'Turn and face the red dot. Reach out and touch it.');

};

