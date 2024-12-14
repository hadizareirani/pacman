import { ElementSize } from "../../models/element-size.model";
import { canvasSizeHandler } from "../utility/canvasUtility";
import { MapCreator } from "./map";

export class GameArea {
  ctx: CanvasRenderingContext2D | null;
  elementSize: ElementSize;
  interval!: number;
  constructor(canvasEl: HTMLCanvasElement) {
    this.elementSize = canvasSizeHandler(canvasEl);
    this.ctx = canvasEl.getContext("2d");
    this.createMap();
  }

  createMap() {
    const mapCreator = new MapCreator();
    if (!this.ctx) return;
    mapCreator.draw(this.ctx, {
      startPoints: this.elementSize.startPoints,
      endPoints: this.elementSize.endPoints,
    });
  }
}
