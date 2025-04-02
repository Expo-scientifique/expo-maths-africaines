import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

function Model({ path }) {
  const gltf = useLoader(GLTFLoader, path);
  return <primitive object={gltf.scene} />;
}

export default function ModelViewer({ modelPath }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <Stage>
          <Model path={modelPath} />
        </Stage>
      </Suspense>
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}