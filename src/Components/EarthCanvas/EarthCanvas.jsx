// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import planet from '../../Assets/planet/scene.gltf';

// const EarthCanvas = () => {
//   return (
//     <Canvas
//       shadows
//       frameloop='demand'
//       gl={{ preserveDrawingBuffer: true }}
//       camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
//     >
//       <Suspense fallback={null}>
//         <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
//         <group>
//           <mesh>
//             <meshStandardMaterial attach='material' color='white' />
//             <useGLTF modelPath={planet} />
//           </mesh>
//         </group>
//       </Suspense>
//       {/** Add a THREE.js object to replace the div element */}
//       <mesh position={[0, 0, -10]}>
//         <planeGeometry args={[100, 100]} />
//         <meshStandardMaterial attach='material' color='#000' opacity={0.8} />
//       </mesh>
//     </Canvas>
//   );
// };

// export default EarthCanvas;
