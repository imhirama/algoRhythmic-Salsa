import {setTitle, setRightSideText} from './outerText';
import * as counter from './counter';
import {drawText, drawRect, drawBar, drawPoint, drawFrame} from './demo_util';
import * as track from './trackingMovements';
import * as titles from './titles';

const levelFunctions = {
  0: level0,
  1: level1,
  2: level2,
  3: level3,
  4: level4,
  // 5: level5,
};


export default function levels(levelNum, ctx, keypoints) {
  const currentLevel = levelFunctions[levelNum];
  currentLevel(ctx, keypoints);
}

export function getCurrentLevel() {
  console.log(counter.getScore());
  return Math.ceil((counter.getScore())/100);
}

export function level0(ctx, keypoint) {
  titles.darkBackground(ctx);
  titles.screenTitle(ctx, 100, 150, 'CHOOSE LEARNING MODE');
  titles.screenText(ctx, 500, 700, 'JUMP TO BEGIN');
}

export function level1(ctx, keypoints) {
  setTitle('Level 1');
  setRightSideText('Stand completely within the white box');
  levels.levelTitle(ctx, 1, 'Stand completely within the white box');

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
  levels.levelTitle(ctx, 3, 'Step to the left');

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
  levels.levelTitle(ctx, 4, 'Step to the right');

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
