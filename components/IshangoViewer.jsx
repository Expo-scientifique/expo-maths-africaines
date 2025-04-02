import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

function Model() {
  const obj = useLoader(OBJLoader, '/models/Final_Ishango/Final_Ishango.obj');

  obj.traverse((child) => {
    if (child.isMesh && child.material) {
      child.material.color.set('#a5825a'); // Couleur beige claire
    }
  });

  return <primitive object={obj} />;
}

export default function IshangoViewer() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={1.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
