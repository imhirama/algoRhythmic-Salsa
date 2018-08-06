import {setTitle, setRightSideText} from './outerText';
import * as counter from './counter';
import {drawText, drawRect, drawBar, drawPoint, drawFrame} from './demo_util';
import * as track from './trackingMovements';
import * as levels from './levels';


export function levelTitle(ctx, levelNum, instructions) {
  const {height, width} = track.videoDimensions();

  drawRect(ctx, width/3, height/8, 'rgba(28, 25, 22, 0.75)', 0, height*(1/15));
  drawRect(ctx, width/3 * ((counter.getScore()%10)/10), height/8, 'rgba(40, 170, 8, 0.84)', 0, height*(1/15));


  drawText(ctx, `Level ${levelNum}`, 20, height*(1/15)+height/10, 'white', '90px Raleway');
}

export function screenTitle(ctx, x, y, text, size=150, font='Poiret One', color='white') {
  drawText(ctx, text, x, y, color, `${size}px ${font}`);
}

export function screenText(ctx, x, y, text, size=55, font='Raleway', color='white') {
  drawText(ctx, text, x, y, color, `${size}px ${font}`);
}

export function darkBackground(ctx, color = 'rgba(4, 2, 0, 0.84)') {
  const {height, width} = track.videoDimensions();
  drawRect(ctx, width, height, color);
}

export function randomColors() {
  const c1 = 225*Math.random();
  const c2 = 225*Math.random();
  const c3 = 225*Math.random();
  const c4 = 1*Math.random();
  const c5 = 1*Math.random();

  const color1 = `rgba(${c1}, ${c2}, ${c3}, ${c4})`;
  const color2 = `rgba(${c1}, ${c2}, ${c3}, ${c5})`;

  return {color1, color2};
}
