import { Canvas } from "@react-three/fiber";
import "./App.css";
import Three from "./component/three";
import { Suspense } from "react";

function App() {
  return (
    <Canvas id="three-canvas-container" shadows>
      <Suspense fallback={<></>}>
        <Three />
      </Suspense>
    </Canvas>
  );
}

export default App;
