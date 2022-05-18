export interface IZIndexRange {
  min: number;
  max: number;
}

export const canvasLayerZIndexRange: IZIndexRange = { max: 99, min: 1 };

export const menuZIndexRange: IZIndexRange = { max: 599, min: 500 };

export const informationPaneZIndexRange: IZIndexRange = { max: 999, min: 900 };
