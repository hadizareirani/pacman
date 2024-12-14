import { canvasSizeHandler } from "./canvasUtility";

export class MapCreator {
  map = [
    [0, 1, 0, 1],
    [0, 1, 0, 1],
    [0, 1, 0, 1],
    [0, 1, 0, 1],
  ];

  ctx: CanvasRenderingContext2D | null;
  constructor(canvasEl: HTMLCanvasElement) {
    const elementSize = canvasSizeHandler(canvasEl);
    this.ctx = canvasEl.getContext("2d");
  }
}
