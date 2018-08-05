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
  // drawText(ctx, instructions, 50, height/2 + height/4, 'white', '35px Raleway');
}

export function screenText(ctx, x, y, text, font='35px Muli', color='white') {
  drawText(ctx, text, x, y, color, font);
}

export function darkBackground(ctx, color='rgba(4, 2, 0, 0.84)'){

}
