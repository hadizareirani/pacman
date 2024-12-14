import { PointImageSrc, TilesHeight, TilesWidth } from "../utility/const";

abstract class Tiles {
  abstract darw(): void;
}

class PointTiles extends Tiles {
  ctx: CanvasRenderingContext2D;
  posX: number;
  posY: number;
  image: HTMLImageElement;
  constructor(ctx: CanvasRenderingContext2D, x: number, y: number) {
    super();
    this.ctx = ctx;
    this.posX = x;
    this.posY = y;
    this.image = new Image();
    this.image.src = '/blueDot.png'
    console.log('====================================');
    console.log(this.image);
    console.log('====================================');
    debugger
    this.darw();
  }

  darw(): void {
    this.ctx.drawImage(this.image, this.posX, this.posY, 20, 20);
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
