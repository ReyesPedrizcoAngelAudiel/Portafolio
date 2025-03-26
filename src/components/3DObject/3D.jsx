import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

import Carro from "./3D-Carro";
import CanvasLoader from "./Loading";

const Objeto3D = () => {
  return (
    <div className="canvas-container">
      {/*<Leva />*/}
      <Canvas camera={{ position: [20, 0.9, 20], fov: 46 }}>
        <pointLight position={[10, 10, 10]} intensity={2.5} />
        <Suspense fallback={<CanvasLoader />}>
          <group position={[0, 0, 0]} rotation={[0,13.8,0]}>
            <Carro 
              scale={0.023} 
              position={[-3,0,0]}/>
            <Environment preset="night" />
          </group>
          <OrbitControls
            autoRotate={true}
            autoRotateSpeed={0.3}
            enableZoom={false}
            enableRotate={false}
            minPolarAngle={Math.PI / 2.2}
            maxPolarAngle={Math.PI / 2.2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Objeto3D;