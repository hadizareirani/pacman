import { TilesHeight, TilesWidth } from "../utility/const";

abstract class Tiles {
  abstract darw(): void;
}

class PointTiles extends Tiles {
  ctx: CanvasRenderingContext2D;
  posX: number;
  posY: number;
  constructor(ctx: CanvasRenderingContext2D, x: number, y: number) {
    super();
    this.ctx = ctx;
    this.posX = x;
    this.posY = y;
    this.darw();
  }

  darw(): void {
    this.ctx.beginPath();
    this.ctx.arc(this.posX, this.posY, TilesWidth / 2.5, 0, 2 * Math.PI);
    this.ctx.stroke();
    // this.ctx.rect(this.posX, this.posY, TilesWidth, TilesHeight);
  }
}

class WallTiles extends Tiles {
  ctx: CanvasRenderingContext2D;
  posX: number;
  posY: number;
  constructor(ctx: CanvasRenderingContext2D, x: number, y: number) {
    super();
    this.ctx = ctx;
    this.posX = x;
    this.posY = y;
  }
  darw(): void {}
}

export const tilesClass: any = {
  0: PointTiles,
  1: WallTiles,
};
