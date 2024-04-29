import { useState, useEffect } from "react";
import { canvas, context } from "./canvas";

const BLOCK_COLS = 7;
const BLOCK_ROWS = 4;
const BLOCK_WIDTH = 80;
const BLOCK_HEIGHT = 30;
const BLOCK_GAP = 20;

export default function RenderBlocks(){
  const [blocks, setBlocks] = useState([
    {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      color: "",
    },
  ]);

  useEffect(() => {
    let X_SPACING = 0;

    if (canvas) {
      X_SPACING = (canvas.width - BLOCK_COLS * (BLOCK_WIDTH + BLOCK_GAP)) / 2;

        for (let i = 0; i < BLOCK_COLS; i++) {
          for (let j = 0; j < BLOCK_ROWS; j++) {
            setBlocks((blocks) => [
              ...blocks,
              {
                x: X_SPACING + i * BLOCK_WIDTH + i * BLOCK_GAP,
                y: BLOCK_GAP + j * BLOCK_HEIGHT + j * BLOCK_GAP,
                width: BLOCK_WIDTH,
                height: BLOCK_HEIGHT,
                color: "red",
              },
            ]);
          }
        }
    }
  }, []); // Run this effect only once when the component mounts

  for (let i = 0; i < blocks.length; i++) {
    let block = blocks[i];
    if (context) {
      context.fillStyle = block.color;
      context.fillRect(block.x, block.y, block.width, block.height);
    }
  }
  return blocks;
}
