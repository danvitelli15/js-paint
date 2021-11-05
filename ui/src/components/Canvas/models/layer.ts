export class Layer {
  height: number;
  width: number;

  xOffset: number;
  yOffset: number;

  pixels: Array<string | null>;

  constructor(height: number, width: number, fillColor: string | null = null) {
    this.height = height;
    this.width = width;

    this.xOffset = 0;
    this.yOffset = 0;

    this.pixels = new Array(this.width * this.height).fill(fillColor);
  }

  getPixel(x: number, y: number) {
    x -= this.xOffset;
    y -= this.yOffset;

    if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
      return this.pixels[y * this.width + x];
    } else {
      return null;
    }
  }
}
