export const canvasSizeHandler = (el: HTMLCanvasElement) => {
  const screenWidht = document.documentElement.clientWidth;
  const screenHeight = document.documentElement.clientHeight;

  const stratXPoint = screenWidht / 2 - 200;
  const stratYPoint = screenHeight / 2 - 200;

  const endXPoint = screenWidht / 2 + 200;
  const endYPoint = screenHeight / 2 + 200;

  el.width = screenWidht;
  el.height = screenHeight;

  return {
    width: screenWidht,
    height: screenHeight,
    startPoints: [stratXPoint, stratYPoint],
    endPoints: [endXPoint, endYPoint],
  };
};
