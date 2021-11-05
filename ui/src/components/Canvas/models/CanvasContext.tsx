import React, { createContext, useEffect, useState } from "react";
import { CanvasContextProps, ICanvasModel, ILayerDescription, ILayerOffset } from "../interfaces";

export const CanvasContext = createContext<ICanvasModel | undefined>(undefined);

export const CanvasModel = ({ children }: CanvasContextProps) => {
  //#region State
  const [height, setHeight] = useState<number>(450);
  const [width, setWidth] = useState<number>(800);

  const [baseLayerColor, setBaseLayerColor] = useState("#FFFFFF");
  const [layers, setLayers] = useState<Array<ILayerDescription>>([{ locked: false, name: `Layer0` }]);
  const [layerOffsets, setLayerOffsets] = useState<Array<ILayerOffset>>([]);
  const [layerRasters, setLayerRasters] = useState<Array<Array<Array<string | null>>>>(
    Array(height).fill(Array(width).fill([null]))
  );
  const [displayRaster, setDisplayReaster] = useState<Array<Array<string>>>([]);
  //#endregion State

  //#region State Dependant Changes
  useEffect(() => {
    setDisplayReaster(
      layerRasters.map((row) =>
        row.map((column) => {
          for (let i = column.length - 1; 1 >= 0; i--) {
            if (column[i] !== null) return column[i];
          }
          return baseLayerColor;
        })
      ) as string[][]
    );
  }, [baseLayerColor, layerRasters]);
  //#endregion State Dependant Changes

  //#region Private Functions

  //#endregion Private Functions

  //#region Context Accessable Functions
  const addLayer = () => {
    setLayers((previous) => previous.map((i) => i).concat({ locked: false, name: `Layer${layers.length}` }));
    setLayerOffsets((previous) => previous.map((i) => i).concat({ xOffset: 0, yOffset: 0 }));
    setLayerRasters((previous) =>
      previous.map((row) => row.map((column) => column.map((layer) => layer).concat([null])))
    );
  };

  const getLayerOffset = (index: number) => layerOffsets[index];
  //#endregion Context Accessable Functions

  return (
    <CanvasContext.Provider
      value={{
        addLayer,
        canvasHeight: height,
        canvasWidth: width,
        displayRaster,
        getLayerOffset,
        layerDescriptions: layers,
        setBaseLayerColor,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};
