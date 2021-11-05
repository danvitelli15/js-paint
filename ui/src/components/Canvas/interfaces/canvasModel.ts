import { ILayerDescription } from "./layerModel";
import { ILayerOffset } from "./layerOffsetModel";

export interface ICanvasModel {
  canvasHeight: number;
  canvasWidth: number;

  displayRaster: Array<Array<string>>;
  layerDescriptions: Array<ILayerDescription>;

  addLayer: () => void;
  getLayerOffset: (index: number) => ILayerOffset;
  setBaseLayerColor: (color: string) => void;
}
