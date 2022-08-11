import React, { Component, useRef } from "react";
import { createRoot } from "react-dom/client";
import { Stage, Layer, Rect } from "react-konva";

function MyRect() {
  let mref = useRef();
  const changeSize = () => {
    // to() is a method of `Konva.Node` instances
    mref.current.to({
      scaleX: Math.random() + 0.8,
      scaleY: Math.random() + 0.8,
      duration: 0.2
    });
  };

  return (
    <Rect
      // ref={(node) => {
      //   mref.current = node;
      // }}
      ref={mref}
      width={50}
      height={50}
      fill="green"
      draggable
      onDragEnd={changeSize}
      onDragStart={changeSize}
    />
  );
}

class App extends Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <MyRect />
        </Layer>
      </Stage>
    );
  }
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
