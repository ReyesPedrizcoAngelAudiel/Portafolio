import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Carro from "./3D-Carro";
import CanvasLoader from "./Loading";

const Objeto3D = () => {
  const [loadedModel, setLoadedModel] = useState(false);
  
  useEffect(() => {
    const cached = localStorage.getItem("3DModelLoaded");
    if (cached) setLoadedModel(true);
  }, []);

  const handleModelLoad = () => {
    localStorage.setItem("3DModelLoaded", "true");
    setLoadedModel(true);
  };

  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [20, 0.9, 20] }}>
        <Suspense fallback={<CanvasLoader onLoad={handleModelLoad} />}>
          <Environment preset="city" background={false} blur={0.5} />
          <group rotation={[0, 13.6, 0]}>
            {<Carro />}
          </group>
          <OrbitControls
            autoRotate={true}
            autoRotateSpeed={0.4}
            enableZoom={false}
            enableRotate={false}
            enableDamping={false}
            enablePan={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Objeto3D;