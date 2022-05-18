export class CanvasCoordinates {
  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  toJSON(): string {
    return JSON.stringify({ x: this.x, y: this.y, z: this.z });
  }
}
