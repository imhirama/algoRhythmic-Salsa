import {setTitle, setRightSideText} from './outerText';
import * as counter from './counter';
import {drawText, drawRect, drawBar, drawPoint, drawFrame} from './demo_util';
import * as track from './trackingMovements';

const levelFunctions = {
  1: level1,
  2: level2,
  3: level3,
  4: level4,
  5: level5,
};


export default function levels(levelNum, ctx, keypoints) {
  const currentLevel = levelFunctions[levelNum];
  currentLevel(ctx, keypoints);
}

export function getCurrentLevel() {
  console.log(counter.getScore());
  return Math.ceil((counter.getScore()+1)/100);
}

export function levelTitle(ctx, levelNum, instructions) {
  const {height, width} = track.videoDimensions();

  drawRect(ctx, width/3, height/8, 'rgba(28, 25, 22, 0.75)', 0, height*(1/15));
  drawRect(ctx, width/3 * ((counter.getScore()%10)/10), height/8, 'rgba(40, 170, 8, 0.84)', 0, height*(1/15));


  drawText(ctx, `Level ${levelNum}`, 20, height*(1/15)+height/10, 'white', '90px Raleway');
  // drawText(ctx, instructions, 50, height/2 + height/4, 'white', '35px Raleway');
}

export function level1(ctx, keypoints) {
  setTitle('Level 1');
  setRightSideText('Stand completely within the white box');
  levelTitle(ctx, 1, 'Stand completely within the white box');

  // objective: stay in the frame
  track.trackInFrame(ctx, keypoints);
};

export function level2(ctx, keypoints) {
  const {height, width} = track.videoDimensions();

  setTitle('Level 2');
  setRightSideText('Turn to face the red dot, then reach out and touch it. Stay facing this direction.');
  levelTitle(ctx, 2, 'Turn and face the red dot. Reach out and touch it.');

  // objective: touch the spot
  track.trackSpot(ctx, keypoints, width/4, height*(3/4), 50, 'rgba(3, 226, 251, 0.53)', 'rgba(0, 183, 204, 0.93)');
};

export function level3(ctx, keypoints) {
  setTitle('Level 3');
  setRightSideText('Step to the left');
  levelTitle(ctx, 3, 'Step to the left');

  const {height, width} = track.videoDimensions();
  const midpoint = width/2;
  const feetPosition = track.feetPosition(ctx, keypoints);

  drawBar(ctx, [0, midpoint-width/10], [height, midpoint-width/10], 'black');
  drawBar(ctx, [0, midpoint+width/10], [height, midpoint+width/10], 'black');

  // objective: follow pattern of left, center, left, center
  const goal = 'left';
  if (feetPosition.position === goal) {
    feetPosition.colorBlock();
    counter.incrementScore();
  }
}

export function level4(ctx, keypoints) {
  setTitle('Level 4');
  setRightSideText('Step to the right');
  levelTitle(ctx, 4, 'Step to the right');

  const {height, width} = track.videoDimensions();
  const midpoint = width/2;
  const feetPosition = track.feetPosition(ctx, keypoints);

  drawBar(ctx, [0, midpoint-width/10], [height, midpoint-width/10], 'black');
  drawBar(ctx, [0, midpoint+width/10], [height, midpoint+width/10], 'black');

  // objective: follow pattern of right, center, right, center
  const goal = 'right';
  if (feetPosition.position === goal) {
    feetPosition.colorBlock();
    counter.incrementScore();
  }
}
