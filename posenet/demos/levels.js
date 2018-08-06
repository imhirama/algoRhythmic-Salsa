import {setTitle, setRightSideText} from './outerText';
import * as counter from './counter';
import {drawText, drawRect, drawBar, drawPoint, drawFrame} from './demo_util';
import * as track from './trackingMovements';
import * as titles from './titles';

const levelFunctions = {
  0: learningMode,
  1: level1Title,
  2: level1,
  3: level2Title,
  4: level2,
  5: level3Title,
  6: level3,
  7: level4Title,
  8: level4,
  9: level5Title,
  10: level5,
  11: partyModeTitle,
  12: partyMode,
};


export default function levels(levelNum, ctx, keypoints) {
  const currentLevel = levelFunctions[levelNum];
  currentLevel(ctx, keypoints);
}

export function getCurrentLevel() {
  console.log(counter.getScore());
  return Math.ceil((counter.getScore())/10);
}

export function level0(ctx, keypoint) {
  titles.darkBackground(ctx);
  titles.screenTitle(ctx, 100, 150, 'CHOOSE LEARNING MODE', 100);
  titles.screenText(ctx, 500, 700, 'JUMP TO BEGIN', 50);

  counter.incrementScore();
}
export function learningMode(ctx, keypoints) {
  const {height, width} = track.videoDimensions();

  titles.darkBackground(ctx);
  titles.screenTitle(ctx, 100, 150, 'CHOOSE LEARNING MODE', 100);
  titles.screenText(ctx, 500, 700, 'JUMP TO BEGIN', 50);

  titles.screenText(ctx, width/8, height/2.2, '100% Human', 42);
  titles.screenText(ctx, width/2.5, height/2.2, 'Synthesis Mode', 42);
  titles.screenText(ctx, width*(.75), height/2.2, '100% AI', 42);


  drawBar(ctx, [height/1.8, width/6], [height/1.8, width*(5/6)], 'rgb(255, 255, 255)');
  track.trackSpot(ctx, keypoints, width/5, height/1.8, 50, 'rgb(255, 255, 255)', 'rgb(86, 255, 184)', 0);
  track.trackSpot(ctx, keypoints, width/2, height/1.8, 50, 'rgb(255, 255, 255)', 'rgb(86, 255, 184)', 0);
  track.trackSpot(ctx, keypoints, width*(4/5), height/1.8, 50, 'rgb(255, 255, 255)', 'rgb(86, 255, 184)', 0);
  // track.trackJump(ctx, keypoints);
}

export function partyModeTitle(ctx, keypoints) {
  titles.darkBackground(ctx);
  titles.screenTitle(ctx, 300, 400, 'PARTY MODE');
  titles.screenText(ctx, 80, 555, `Choose your music and start dancing!`, 70);

  counter.incrementScore();
}
export function level5Title(ctx, keypoints) {
  titles.darkBackground(ctx);
  titles.screenTitle(ctx, 350, 400, 'LEVEL FIVE');
  titles.screenText(ctx, 150, 555, `Put it all together - full basic step!`, 70);

  counter.incrementScore();
}
export function level4Title(ctx, keypoints) {
  titles.darkBackground(ctx);
  titles.screenTitle(ctx, 350, 400, 'LEVEL FOUR');
  titles.screenText(ctx, 60, 555, `Second half of the basic step - let's go!`, 70);

  counter.incrementScore();
}
export function level3Title(ctx, keypoints) {
  titles.darkBackground(ctx);
  titles.screenTitle(ctx, 350, 400, 'LEVEL THREE');
  titles.screenText(ctx, 220, 555, 'Stay facing left - time to salsa!', 70);

  counter.incrementScore();
}
export function level2Title(ctx, keypoints) {
  titles.darkBackground(ctx);
  titles.screenTitle(ctx, 350, 300, 'LEVEL TWO');
  titles.screenText(ctx, 400, 475, 'Turn left 90 degrees.', 65);
  titles.screenText(ctx, 290, 555, 'Reach out and touch the red dot.');
  titles.screenText(ctx, 320, 675, 'Face this direction for all other levels!', 45);

  counter.incrementScore(.75);
}

export function level1Title(ctx, keypoints) {
  titles.darkBackground(ctx);
  titles.screenTitle(ctx, 350, 400, 'LEVEL ONE');
  titles.screenText(ctx, 200, 600, 'Stand completely within the white box.');

  counter.incrementScore();
}

export function level1(ctx, keypoints) {
  titles.levelTitle(ctx, 1, 'Stand completely within the white box');

  // objective: stay in the frame
  track.trackInFrame(ctx, keypoints);
};

export function level2(ctx, keypoints) {
  const {height, width} = track.videoDimensions();

  titles.levelTitle(ctx, 2, 'Turn and face the red dot. Reach out and touch it.');

  // objective: touch the spot
  track.trackSpot(ctx, keypoints, width/4, height/2, 60);
};

export function level3(ctx, keypoints) {
  titles.levelTitle(ctx, 3, 'Step to the left');

  const {height, width} = track.videoDimensions();
  const midpoint = width/2;
  const feetPosition = track.feetPosition(ctx, keypoints);

  drawBar(ctx, [0, midpoint-width/10], [height, midpoint-width/10], 'black');
  drawBar(ctx, [0, midpoint+width/10], [height, midpoint+width/10], 'black');

  // objective: follow pattern of left, center, left, center
  const goal = 'left';
  if (feetPosition.position === goal) {
    feetPosition.colorBlock();
    counter.incrementScore(.5);
  }
}

export function level4(ctx, keypoints) {
  titles.levelTitle(ctx, 4, 'Step to the right');

  const {height, width} = track.videoDimensions();
  const midpoint = width/2;
  const feetPosition = track.feetPosition(ctx, keypoints);

  drawBar(ctx, [0, midpoint-width/10], [height, midpoint-width/10], 'black');
  drawBar(ctx, [0, midpoint+width/10], [height, midpoint+width/10], 'black');

  // objective: follow pattern of right, center, right, center
  const goal = 'right';
  if (feetPosition.position === goal) {
    feetPosition.colorBlock();
    counter.incrementScore(.5);
  }
}

export function level5(ctx, keypoints) {
  titles.levelTitle(ctx, 5, 'Full basic step!');

  const {height, width} = track.videoDimensions();
  const midpoint = width/2;
  const feetPosition = track.feetPosition(ctx, keypoints);

  drawBar(ctx, [0, midpoint-width/10], [height, midpoint-width/10], 'black');
  drawBar(ctx, [0, midpoint+width/10], [height, midpoint+width/10], 'black');

  // objective: follow pattern of full basic step
  const goal = ['right', 'left'];
  if (goal.includes(feetPosition.position)) {
    feetPosition.colorBlock();
    counter.incrementScore(.5);
  }
}


export function partyMode(ctx, keypoints) {
  counter.resetScore();
  track.trackFeet(ctx, keypoints);
  const {height, width} = track.videoDimensions();
  drawPoint(ctx, width*Math.random(), height*Math.random(), 100*Math.random(), `rgba(${225*Math.random()}, ${225*Math.random()}, ${225*Math.random()}, ${1*Math.random()})`);
  drawPoint(ctx, width*Math.random(), height*Math.random(), 100*Math.random(), `rgba(${225*Math.random()}, ${225*Math.random()}, ${225*Math.random()}, ${1*Math.random()})`);
  drawPoint(ctx, width*Math.random(), height*Math.random(), 100*Math.random(), `rgba(${225*Math.random()}, ${225*Math.random()}, ${225*Math.random()}, ${1*Math.random()})`);
  drawPoint(ctx, width*Math.random(), height*Math.random(), 100*Math.random(), `rgba(${225*Math.random()}, ${225*Math.random()}, ${225*Math.random()}, ${1*Math.random()})`);
  drawPoint(ctx, width*Math.random(), height*Math.random(), 100*Math.random(), `rgba(${225*Math.random()}, ${225*Math.random()}, ${225*Math.random()}, ${1*Math.random()})`);
  drawPoint(ctx, width*Math.random(), height*Math.random(), 100*Math.random(), `rgba(${225*Math.random()}, ${225*Math.random()}, ${225*Math.random()}, ${1*Math.random()})`);
  drawPoint(ctx, width*Math.random(), height*Math.random(), 100*Math.random(), `rgba(${225*Math.random()}, ${225*Math.random()}, ${225*Math.random()}, ${1*Math.random()})`);
  drawPoint(ctx, width*Math.random(), height*Math.random(), 100*Math.random(), `rgba(${225*Math.random()}, ${225*Math.random()}, ${225*Math.random()}, ${1*Math.random()})`);
  drawPoint(ctx, width*Math.random(), height*Math.random(), 100*Math.random(), `rgba(${225*Math.random()}, ${225*Math.random()}, ${225*Math.random()}, ${1*Math.random()})`);
  drawPoint(ctx, width*Math.random(), height*Math.random(), 100*Math.random(), `rgba(${225*Math.random()}, ${225*Math.random()}, ${225*Math.random()}, ${1*Math.random()})`);
  drawPoint(ctx, width*Math.random(), height*Math.random(), 100*Math.random(), `rgba(${225*Math.random()}, ${225*Math.random()}, ${225*Math.random()}, ${1*Math.random()})`);
  drawPoint(ctx, width*Math.random(), height*Math.random(), 100*Math.random(), `rgba(${225*Math.random()}, ${225*Math.random()}, ${225*Math.random()}, ${1*Math.random()})`);

  // counter.incrementScore();
}
