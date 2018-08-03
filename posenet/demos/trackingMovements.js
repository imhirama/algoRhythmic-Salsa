import {drawPoint, drawRect, drawBar} from './demo_util';


export const videoDimensions = () => {
  const video = document.getElementById('video');
  return ({height: video.height, width: video.width});
};

// track hands (which is higher)
export function trackHands(ctx, keypoints) {
  const handsDif = keypoints[9].position.y - keypoints[10].position.y;
  if (Math.abs(handsDif) > 15) {
    // console.log(
    //   'higher shoulder:',
    //   (shoulderDif > 0)
    //     ? 'left'
    //     : 'right');

    if (handsDif > 0) {
    drawPoint(ctx, 200, 100, 20, 'orange');
    } else if (handsDif < 0) {
    drawPoint(ctx, 200, 500, 20, 'orange');
    }
  }
}

// track hips
export function trackHips(ctx, keypoints) {
  const leftHipPastleftFoot = keypoints[11].position.x - keypoints[15].position.x;
  if ((leftHipPastleftFoot) > 5) {
    // console.log(
    //   'higher shoulder:',
    //   (shoulderDif > 0)
    //     ? 'left'
    //     : 'right');

    if (leftHipPastleftFoot > 0) {
    drawPoint(ctx, 400, 100, 20, 'red');
    } else if (leftHipPastleftFoot < 0) {
    drawPoint(ctx, 400, 500, 20, 'red');
    }
  }
}

// track feet (apart or together)
export const trackFeetTogether = (ctx, keypoints) => {
  const feetDist = keypoints[15].position.x - keypoints[16].position.x;
  const width = videoDimensions().width;
  const startRect = (width/2)-(width/10);

  if (Math.abs(feetDist) < 25) {
    drawRect(ctx, width/5, 500, 'rgba(51, 225, 91, 0.25)', startRect, 0);
  }
};

// track feet left or right side of screen
export function trackFeet(ctx, keypoints) {
  const rightFootX = keypoints[15].position.x;
  const leftFootX = keypoints[16].position.x;
  // const feetDist = rightFootX - leftFootX;
  const width = videoDimensions().width;
  const height = videoDimensions().height;
  const midpoint = width/2;

    // console.log('L', Math.round(leftFootX));
    // console.log('R', Math.round(rightFootX));
    if (
      (leftFootX >= (midpoint-width/10))
      && (rightFootX <= (midpoint+width/10))
    ) {
      drawRect(ctx, width/5, 500, 'rgba(51, 225, 91, 0.25)', (width/2)-(width/10), 0);
      drawBar(ctx, [0, midpoint-width/10], [height, midpoint-width/10], 'black');
      drawBar(ctx, [0, midpoint+width/10], [height, midpoint+width/10], 'black');
    } else

    if (leftFootX < (midpoint-width/10)) {
      drawRect(ctx, midpoint-width/10, 500, 'rgba(225, 161, 51, 0.52)', 0, 0);
      drawBar(ctx, [0, midpoint-width/10], [height, midpoint-width/10], 'black');
      drawBar(ctx, [0, midpoint+width/10], [height, midpoint+width/10], 'black');
    }

    if (rightFootX > (midpoint+width/10)) {
      drawRect(ctx, midpoint+width/10, 500, 'rgba(51, 225, 196, 0.52)', midpoint+width/10, 0);
      drawBar(ctx, [0, midpoint-width/10], [height, midpoint-width/10], 'black');
      drawBar(ctx, [0, midpoint+width/10], [height, midpoint+width/10], 'black');
    }
}


// track jump (both feet above a certain height)
export const trackJump = (ctx, keypoints) => {
  const rightFootY = keypoints[15].position.y;
  const leftFootY = keypoints[16].position.y;
  const height = videoDimensions().height;
  const width = videoDimensions().width;
  const barHeight = height-(height/6);

  // console.log('rightFoot, leftFoot:', rightFootY, leftFootY);
  // console.log('barHeight', barHeight);

  if ((rightFootY < barHeight) && (leftFootY < barHeight)) {
    drawRect(
      ctx, width, barHeight,
      'rgba(215, 180, 54, 0.93)',
      0, barHeight
    );
  }
};

// track steps (one foot above a certain height)
export const trackSteps = (ctx, keypoints) => {
  const rightFootY = keypoints[15].position.y;
  const leftFootY = keypoints[16].position.y;
  const height = videoDimensions().height;
  const width = videoDimensions().width;
  const barHeight = height-(height/10);

  // console.log('rightFoot, leftFoot:', rightFootY, leftFootY);
  // console.log('barHeight', barHeight);

  if ((rightFootY > barHeight) && ((rightFootY - leftFootY) > 5)) {
    drawPoint(ctx, 400, 100, 20, 'purple');
  }
  if ((rightFootY > barHeight) && ((leftFootY - rightFootY) > 5)) {
    drawPoint(ctx, 400, 500, 20, 'purple');
  }
};


